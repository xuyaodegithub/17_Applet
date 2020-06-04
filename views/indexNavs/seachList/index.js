// views/indexNavs/seachList/index.js
import {
  initIndex,
  initIndexVideo
} from '../../../fetch/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shortList: [],
    list: [],
    words: '',
    page: 1,
    loadingScroll: true,
    showTop: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.words) this.setData({
      words: options.words
    });
    this.initList();
    this.initVideoList();
  },
  initList() {
    const data = {
      keywords: this.data.words,
      page: this.data.page
    }
    initIndex(data).then(res => {
      this.setData({
        list: data.page === 1 ? res.data : [...this.data.list, ...res.data],
        loadingScroll: res.data.length < 10 ? false : true
      })
    })
  },
  initVideoList() {
    initIndexVideo({}).then(res => {
      this.setData({
        shortList: res.data
      })
      // console.log(this.data.shortList,res)
    })
  },
  seach(e) {
    this.setData({
      words: e.detail
    }, this.initList)
  },
  goserviceDes() {
    wx.navigateTo({
      url: '../serviceDes/index',
    })
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/views/detail/index?id=${id}`,
    })
  },
  goTop() {
    wx.pageScrollTo({
      scrollTop: 0
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
    }, this.initList)
  },
  onPageScroll(e) {
    // console.log(e.scrollTop)
    if(e.scrollTop>1000 && !this.data.showTop)this.setData({showTop:true})
    else if(e.scrollTop<=1000 && this.data.showTop)this.setData({showTop:false})
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})