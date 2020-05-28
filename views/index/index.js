const [http, app] = [require('../../fetch/request.js'), getApp()]
// views/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    active: 'recommand',
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
    shortList: [{
        title: '女装短视频',
        url: '/views/indexNavs/womenVideos/index',
        tag: '品牌',
        imgs: ['https://17huo.oss-cn-hangzhou.aliyuncs.com/product/2020/5/24/dbaa4b27068547b5bc2b19d0f322657d.jpeg', 'https://17huo.oss-cn-hangzhou.aliyuncs.com/product/2020/5/25/b47a0cc9a2624ddc8726dc37b0fbbe93.jpeg']
      },
      {
        title: '男装短视频',
        url: '/views/indexNavs/menVideos/index',
        tag: '爆款',
        imgs: ['https://img.alicdn.com/bao/uploaded/i1/381543957/O1CN01ae1SEW1f6LpmkIkXm_!!0-item_pic.jpg_250x250.jpg', 'https://img.alicdn.com/bao/uploaded/i3/381543957/O1CN01Wjat9C1f6LpegTm90_!!0-item_pic.jpg_250x250.jpg']
      },
    ],
    page: 1,
    scrollLoading: true,
    listTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData()
   
    // console.log(this.route)
  },
  seach(e) {
    console.log(e.detail)
  },
  goserviceDes() {
    wx.navigateTo({
      url: '/views/indexNavs/serviceDes/index',
    })
  },
  changes(e) {
    // console.log(e.detail.name, e.detail.title, this.data.active)
    wx.pageScrollTo({
      scrollTop: this.data.listTop,
    })
    this.setData({
      active: e.detail.name,
      page:1,
      scrollLoading:true,
    }, this.initData)
  },
  initData() {
    const data = {
      url: '/weapp/Products/search',
      data: {
        page: this.data.page,
        active_tab: this.data.active
      }
    }
    http.beforRqs(data).then(res => {
      this.setData({
        list: this.data.page===1 ? res.data : [...this.data.list, ...res.data],
        scrollLoading: res.data.length < 10 ? false : true
      }, this.setListTop)
    
    })
  },
  setListTop(){
    if (this.data.listTop>0)return;
    let _self = this;
    wx.nextTick(() => {
      const query = wx.createSelectorQuery()
      query.select('#list').boundingClientRect()
      query.selectViewport().scrollOffset()
      query.exec(function (res) {
        // console.log(res)
        // res[0].top       // #the-id节点的上边界坐标
        // res[1].scrollTop // 显示区域的竖直滚动位置
        _self.setData({ listTop: res[0].top - 44 })
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
  onPageScroll(e){
    console.log(e.scrollTop)
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