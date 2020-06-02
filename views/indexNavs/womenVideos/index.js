const [http, app] = [require('../../../fetch/request.js'), getApp()];
import {
  initIndex,
  initVideosTabs
} from '../../../fetch/index.js';
// views/indexNavs/womenVideos/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [],
    list: [],
    page: 1,
    tabIds: ['0'],
    scrollLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData()
    this.initTabs()
  },
  taptabs(e) {
    console.log(e.detail)
    this.setData({
      page: 1,
      tabIds: [e.detail],
      scrollLoading: true,
    }, this.initData)
  },
  initData() {
    const data = {
        page: this.data.page,
        sex_type: 2,
        cids: this.data.tabIds,
        has_video:1
    }
    initIndex(data).then(res => {
      this.setData({
        list: this.data.page === 1 ? res.data : [...this.data.list, ...res.data],
        scrollLoading: res.data.length < 10 ? false : true
      })
    })
  },
  initTabs() {
    let data = {
      sex_type:2
    }
    initVideosTabs(data).then(res => {
      this.setData({ tabList: [{ name: '全部', cid: 0 }, ...res.data] })
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
    }, this.initData)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})