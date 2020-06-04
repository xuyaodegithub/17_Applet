import {
  payMoney,
  userBagReturn,
  orderDetail
} from '../../fetch/user.js';
const [app] = [getApp()];
// userViews/orderDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proMsg: {
      items: [],
      package: {}
    },
    pageId: '',
    allNum: 0,
    allprice: 0,
    allMoney: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pageId: options.id,
    }, this.initDetail)
  },
  initDetail() {
    const data = {
      package_id: this.data.pageId
    };
    orderDetail(data).then(res => {
      const relt = res.data
      const money = relt.services.reduce((pre, item, idx) => pre + item.num * parseFloat(item.price), 0) + relt.items.reduce((pre, item, idx) => pre + parseFloat(item.product_price) * item.num, 0) + parseFloat(relt.money_package)
      this.setData({
        proMsg: relt,
        allNum: relt.items.reduce((pre, item, idx) => pre + item.num, 0),
        allprice: relt.items.reduce((pre, item, idx) => pre + item.num * parseFloat(item.product_price), 0),
        allMoney:money
      })
    })
  },
  getInfo(e){
    const [item] = [e.currentTarget.dataset.item];
    if (item.idx === 1) this.userCancleOrder()//取消订单;
    else if (item.idx === 2) this.initPay();
    // else if (item.idx === 3) window.open(`https://m.kuaidi100.com/result.jsp?nu=${pid}`)//查看物流;
  },
  toDetail(e){
    const id=e.currentTarget.dataset.id;
    console.log(e,id)
    wx.navigateTo({
      url: `/views/detail/index?id=${id}`,
    })
  },
  userCancleOrder(){
    wx.showModal({
      title: '取消确认',
      content: '确定要取消此订单么',
      cancelColor: '9c9c9c',
      confirmColor: '#c2202d',
      success:(res) =>{
        if (res.confirm) {
          userBagReturn({ package_id: this.data.proMsg.package_id }).then(res=>{
            wx.showToast({
              title: '操作成功',
              icon:'none'
            })
            this.initDetail()
            // wx.navigateBack()
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }

    })
  },
  initPay() {
    wx.showLoading({ mask: true })
    const data = {
      package_id: this.data.proMsg.package_id
    }
    payMoney(data).then(res => {
      wx.hideLoading()
      const relt = res.data
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
        complete: () => {
        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})