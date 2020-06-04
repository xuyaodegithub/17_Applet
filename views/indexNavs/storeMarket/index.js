// views/indexNavs/storeMarket/index.js
import {
  storeProList,
  storeInfo
} from '../../../fetch/index.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    list: [],
    loadingScroll: true,
    seller_id: '',
    storeInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      seller_id: options.id
    })
    this.initStore();
    this.initstoreInfo();
  },
  initStore() {
    const data = {
      page: this.data.page,
      seller_id: this.data.seller_id
    }
    storeProList(data).then(res => {
      this.setData({
        list: data.page === 1 ? res.data : [...this.data.list, ...res.data],
        loadingScroll: res.data.length < 10 ? false : true
      })
    })
  },
  initstoreInfo() {
    storeInfo({
      id: this.data.seller_id
    }).then(res => {
      this.setData({
        storeInfo: res.data
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
    if (!this.data.loadingScroll) return;
    this.setData({
      page: this.data.page + 1
    }, this.initStore)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})