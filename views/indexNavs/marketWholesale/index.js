const [http, app] = [require('../../../fetch/request.js'), getApp()];
import { initmarket } from '../../../fetch/index.js';
// views/indexNavs/marketWholesale/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      name: '全部',
      cid: 0
    }, {
      name: '杭州女装',
      cid: 2
    }, {
      name: '杭州男装',
      cid: 1
    }, ],
    list: [],
    sex_type: 0,
    page: 1,
    keywords: '',
    scrollLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData()
  },
  taptabs(e) {
    console.log(e.detail)
    this.setData({
      sex_type: e.detail,
      page: 1,
    }, this.initData)
  },
  confirms(e) {
    console.log(e.detail)
    this.setData({
      page: 1,
      keywords: e.detail.value
    }, this.initData)
  },
  toStore(e) {
    const id = e.currentTarget.dataset.id
    console.log(id)
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/views/detail/index?id=${id}`,
    })
  },
  initData() {
    let data = {
        page: this.data.page,
        sex_type: this.data.sex_type,
        keywords: this.data.keywords,
        city: this.data.sex_type ? 2 : 0
    }
    initmarket(data).then(res => {
      this.setData({
        list: this.data.page === 1 ? res.data : [...this.data.list, ...res.data],
        scrollLoading: res.data.length < 10 ? false : true
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
    if (!this.data.scrollLoading) return;
    this.setData({
      page: this.data.page + 1
    },this.initData)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})