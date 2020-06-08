// userViews/orderList/index.js
import {
  orderList,
  payMoney,
  userBagReturn
} from '../../fetch/user.js';
const [app] = [getApp()];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: 0,
    page: 1,
    list: [],
    scrollLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type) {
      this.setData({
        activeName: parseFloat(options.type)
      })
    }
    console.log(this.data.activeName);
    this.initList()
  },
  change(e) {
    if (this.data.activeName === e.detail.name) return;
    wx.showLoading()
    this.setData({
      activeName: e.detail.name,
      page: 1,
      list: [],
      scrollLoading: true
    }, this.initList)
  },
  initList() {
    const data = {
      page: this.data.page,
      order_status: this.data.activeName
    }
    orderList(data).then(res => {
      this.setData({
        list: data.page === 1 ? res.data : [...this.data.list, ...res.data],
        scrollLoading: res.data.length < 10 ? false : true
      })
      wx.hideLoading()
    })
  },
  orderDetail(e) {
    const id = e.currentTarget.dataset.id;
    console.log(id, e)
    wx.navigateTo({
      url: `../orderDetail/index?id=${id}`,
    })
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id;
    console.log(e, id)
    wx.navigateTo({
      url: `/views/detail/index?id=${id}`,
    })
  },
  getInfo(e) {
    const [item, itemBtn] = [e.currentTarget.dataset.item, e.currentTarget.dataset.itembtn];
    if (itemBtn.idx === 1) this.userCancleOrder(item.package_id) //取消订单;
    else if (itemBtn.idx === 2) this.initPay(item.package_id);
    // else if (itemBtn.idx === 3) window.open(`https://m.kuaidi100.com/result.jsp?nu=${pid}`)//查看物流;
  },
  userCancleOrder(id) {
    wx.showModal({
      title: '取消确认',
      content: '确定要取消此订单么',
      cancelColor: '#9c9c9c',
      confirmColor: '#c2202d',
      success:(res)=> {
        if (res.confirm) {
          userBagReturn({
            package_id: id
          }).then(res => {
            wx.showToast({
              title: '操作成功',
              icon: 'none'
            })
            this.setData({
              page: 1
            }, this.initList)
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }

    })
  },
  initPay(id) {
    wx.showLoading({
      mask: true
    })
    const data = {
      package_id: id
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
        fail(res) {
          // wx.showToast({
          //   title:res.errMsg,
          //   icon:'none'
          // })
        },
        complete: () => {}
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
    if (!this.data.scrollLoading) return;
    this.setData({
      page: this.data.page + 1
    }, this.initList)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})