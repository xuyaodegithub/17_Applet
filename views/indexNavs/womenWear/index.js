const [http, app] = [require('../../../fetch/request.js'), getApp()]
// views/indexNavs/womenWear/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      name: '全部',
      type: 0
    }, {
      name: '毛衣',
      type: 1
    }, {
      name: '衬衫',
      type: 2
    }, {
      name: '蕾丝衫/雪纺衫',
      type: 3
    }, {
      name: '裤子',
      type: 4
    }, {
      name: '牛仔裤',
      type: 5
    }, {
      name: '套装/学生校服/工作制服',
      type: 6
    }, {
      name: '婚纱/旗袍/礼服',
      type: 7
    }, {
      name: 'T恤',
      type: 8
    }, {
      name: '毛针织衫',
      type: 9
    }, {
      name: '中老年女装',
      type: 10
    }, ],
    active: 'recommand',
    list: [],
    page:1,
    tabIds: ['162104'],
    scrollLoading:true
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
      page:1,
      tabIds: e.detail,
      scrollLoading: true,
      active: 'recommand'
    }, this.initData)
  },
  changes(e) {
    // console.log(e.detail.name, e.detail.title, this.data.active)
    this.setData({
      page: 1,
      scrollLoading: true,
      active: e.detail.name
    }, this.initData)
  },
  initData(){
    const data={
      url:'/weapp/Products/search',
      type: "POST",
      data:{
        page:this.data.page,
        sex_type: 2,
        active_tab: this.data.active,
        cids: this.data.tabIds,
      }
    }
    http.beforRqs(data).then(res=>{
      this.setData({
        list: this.data.page === 1 ? res.data : [...this.data.list, ...res.data],
        scrollLoading: res.data.length < 10 ? false : true
      }, this.setListTop)
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