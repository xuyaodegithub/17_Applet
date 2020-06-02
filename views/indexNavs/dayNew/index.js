const [http, app, utils] = [require('../../../fetch/request.js'), getApp(), require('../../../utils/util')];
import { initDayNew } from '../../../fetch/index.js';
// views/indexNavs/dayNew/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      name: '全部',
      cid: 0
    }, {
      name: '女装',
      cid: 2
    }, {
      name: '男装',
      cid: 1
    }],
    list: [],
    timeList: [{
        name: '全部',
        val: 0
      },
      {
        name: '今天',
        val: utils.getDay(0)
      },
      {
        name: '昨天',
        val: utils.getDay(-1)
      },
      {
        name: utils.getDay(-2, 1),
        val: utils.getDay(-2)
      }, {
        name: utils.getDay(-3, 1),
        val: utils.getDay(-3)
      }, {
        name: utils.getDay(-4, 1),
        val: utils.getDay(-4)
      }, {
        name: utils.getDay(-5, 1),
        val: utils.getDay(-5)
      }, {
        name: utils.getDay(-6, 1),
        val: utils.getDay(-6)
      },
    ],
    active: 0,
    sex_type: 0,
    page: 1,
    scrollLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData()
  },
  taptabs(e) {
    // console.log(e.detail)
    this.setData({
      page: 1,
      sex_type: e.detail,
      scrollLoading: true,
      active: 0
    }, this.initData)
  },
  changes(e) {
    // console.log(e.detail.name, e.detail.title, this.data.active)
    if (e.detail.name === this.data.active) return;
    wx.pageScrollTo({
      scrollTop: 0,
    })
    this.setData({
      page: 1,
      scrollLoading: true,
      active: e.detail.name
    }, this.initData)
  },
  initData() {
    const data = {
        page: this.data.page,
        sex_type: this.data.sex_type,
        date: this.data.active ? this.data.active : '',
    }
    initDayNew(data).then(res => {
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
    }, this.initData)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})