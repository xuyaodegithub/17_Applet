const [http, app] = [require('../../fetch/request.js'), getApp()];
import {
  initIndex,
  initIndexVideo
} from '../../fetch/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    active: 'newproducts',
    list: [],
    gridList: [{
        text: '女装',
        img: 'http://m.17huo.com/public/images/i_nv.png',
        url: '/views/indexNavs/womenWear/index'
      },
      {
        text: '男装',
        img: 'http://m.17huo.com/public/images/i_nan.png',
        url: '/views/indexNavs/menWear/index'
      },
      {
        text: '每日新款',
        img: 'http://m.17huo.com/public/images/i_clock.png',
        url: '/views/indexNavs/dayNew/index'
      },
      {
        text: '批发市场',
        img: 'http://m.17huo.com/public/images/i_home.png',
        url: '/views/indexNavs/marketWholesale/index'
      },
    ],
    shortList: {},
    page: 1,
    scrollLoading: true,
    listTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData();
    this.initVideoList();
    // console.log(this.route)
  },
  seach(e) {
    wx.navigateTo({
      url: `../indexNavs/seachList/index?words=${e.detail}`,
    })
  },
  goserviceDes() {
    wx.navigateTo({
      url: '/views/indexNavs/serviceDes/index',
    })
  },
  changes(e) {
    // console.log(e.detail.name, e.detail.title, this.data.active)
    if (this.data.active === e.detail.name)return;
    wx.pageScrollTo({
      scrollTop: 480,
    })
    this.setData({
      active: this.data.active,
      page: 1,
      scrollLoading: true,
      active:e.detail.name
    }, this.initData)
    // if (this.data.listTop > 0){
    //   this.setListTop()
    // }else{
    //   let _self = this;
    //   const query = wx.createSelectorQuery()
    //   query.select('#list').boundingClientRect()
    //   query.selectViewport().scrollOffset()
    //   query.exec(function (res) {
    //     // console.log(res)
    //     // res[0].top       // #the-id节点的上边界坐标
    //     // res[1].scrollTop // 显示区域的竖直滚动位置
    //     _self.setData({
    //       listTop: res[0].top - 44
    //     })
    //     _self.setListTop()
    //   })
    // }
  
  },
  initData() {
    const data = {
      page: this.data.page,
      active_tab: this.data.active
    }
    initIndex(data).then(res => {
      this.setData({
        list: this.data.page === 1 ? res.data : [...this.data.list, ...res.data],
        scrollLoading: res.data.length < 10 ? false : true
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
  setListTop() {
  
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
    this.setData({
      page: 1,
      active: 'newproducts'
    })
    this.initData();
    this.initVideoList();
  },
  onPageScroll(e) {
    // console.log(e.scrollTop)
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