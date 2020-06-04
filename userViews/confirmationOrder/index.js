// userViews/confirmationOrder/index.js
import {
  adressList,
  orderPreview,
  payOrder,
  payMoney,
  userPayByBalance,
  userInfo
} from '../../fetch/user.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '', //密码
    showKeyboard: false,
    loading: false,
    orderAdress: {},
    proMsg: {
      preview_items: [{
        city_name: '',
        list: []
      }],
      express_info: {
        company_name: '',
        money: ''
      },
      services: []
    },
    radio: 1,
    carId: '',
    pageId: '', //订单id
    allnum: 0,
    allPrice: 0,
    upprice: 0,
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
  },
  initUserInfo(){
    if(!app.userInfoData.phone){
      userInfo().then(res => {
        app.userInfoData = res.data;
        this.setData({ userInfo: res.data })
      })
    } else this.setData({ userInfo: app.userInfoData })
  },
  initData() {
    wx.showLoading({
      mask: true
    })
    const carIds = wx.getStorageSync('carIds')
    this.setData({
      carId: carIds
    }, this.initAdress)
  },
  initAdress() {
    adressList().then(res => {
      this.setData({
        orderAdress: res.data.length > 0 ? res.data[0] : {}
      }, this.initPro)
    })
  },
  initPro() {
    let data = {
        "cart_item_ids": this.data.carId
      },
      proMsg = this.data.proMsg;
    if (this.data.orderAdress.consignee) data.gov_region_id = this.data.orderAdress.gov_region_id;
    orderPreview(data).then(res => {
      this.setData({
        proMsg: { ...proMsg,
          ...res.data
        }
      }, this.initAllData)
      wx.hideLoading()
    });
  },
  initAllData() {
    const msgInfo = this.data.proMsg;
    const allnum = msgInfo.preview_items[0].list.reduce((pre, item, idx) => pre + item.num, 0);
    const allPrice = msgInfo.preview_items[0].list.reduce((pre, item, idx) => pre + (item.num * parseFloat(item.nowprice)), 0);
    const sPrice = msgInfo.services.reduce((pre, item, idx) => pre + (parseFloat(item.price) * item.num), 0)
    const upprice = (sPrice + allPrice + (msgInfo.express_info.money ? parseFloat(msgInfo.express_info.money) : 0)) * 100
    this.setData({
      allnum,
      allPrice,
      upprice
    })
  },
  confirm() {
    if (!this.data.value) {
      wx.showToast({
        title: '请输入支付密码',
        icon: 'none'
      })
      return
    }
    const data = {
      package_id: this.data.pageId,
      pay_password: this.data.value
    }
    userPayByBalance(data).then(res => {
      if (!res.code) {
        wx.redirectTo({
          url: '../paySuccess/index',
        })
      }
    })
  },
  cancel() {
    this.setData({ showKeyboard:false})
  },
  onClick(e) {
    this.setData({
      radio:e.target.dataset.name
    })
   },
  change(e){
    this.setData({ value:e.detail})
  },
  changeAdree(){
    wx.navigateTo({
      url: '../addressList/index?hasback=1',
    })
  },
  onSubmit() {
    let userInfo = this.data.userInfo;
    if (!this.data.orderAdress.consignee) {//判断收货地址
     wx.showToast({title: '请先添加收货地址',icon:'none'})
      return;
    }
    if (this.data.radio === 2 && parseFloat(userInfo.money) < (this.data.upprice / 100)) {//判断余额不足
      console.log(parseFloat(userInfo.money), this.data.upprice / 100)
      wx.showToast({ title: '余额不足，请选择其他支付方式', icon: 'none' })
      return;
    }
    if (this.data.radio === 2 && userInfo.pay_password_setted != 1) {//判断有无设置支付密码
      wx.showModal({
        title: '交易密码设置？',
        content: '您还未设置交易密码，是否前往设置？',
        cancelColor: '9c9c9c',
        confirmColor: '#c2202d',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '../changePass/index',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return
    }
    if (this.data.pageId) {
      if (this.data.radio === 1) {
        this.setData({ loading: true })
        this.initPay();
      }
      else this.setData({ showKeyboard:true})
      return
    }
    this.setData({ loading: true })
    let data = {
      cart_item_ids: this.data.carId,
      "receiver_info": {
        receiver_name: this.data.orderAdress.consignee,
        receiver_mobile: this.data.orderAdress.mobile,
        gov_region_id: this.data.orderAdress.gov_region_id,
        receiver_address: this.data.orderAdress.addr
      }
    }
    payOrder(data).then(res=>{
      this.setData({ pageId: res.data.package_id })
      if (!res.code) {
        wx.removeStorageSync('carIds')
        if (this.data.radio === 1) {
          // jsApiCall(payMoney, this.pageId, this)
          this.initPay()
        } else {
          this.setData({ showKeyboard: true, loading: false})
        }
      }


    });
  },
  initPay(){
    const data={
      package_id: this.data.pageId
    }
    payMoney(data).then(res=>{
      const relt=res.data
      wx.requestPayment({
        timeStamp: relt.timeStamp,
        nonceStr: relt.nonceStr,
        package: relt.package,
        signType: 'HMAC-SHA256',
        paySign: relt.paySign,
        success(res) { 
          wx.redirectTo({
            url: '../paySuccess/index',
          })
        },
        fail(res) { },
        complete:()=>{
          this.setData({ loading: false })
        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.initData();
    this.initUserInfo();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})