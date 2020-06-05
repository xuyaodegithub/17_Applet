const [http, app] = [require('../../fetch/request.js'), getApp()];
import { proDetail, addShopcar } from '../../fetch/index.js';
// views/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    htmls: '',
    show: false,
    colorList: [],
    sizeList: [],
    colorIdx: 0,
    selectInfo: { //总数和总价
      num: 0,
      price: 0.00
    },
    commitInfo: {},
    id: '',
    proInfo: {},
    sellerInfo: {},
    gassList: [],
    upType: 1, //1添加购物车，2购买
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: options.id,
      commitInfo: {
        product_id: options.id,
        sku_list: []
      },
    })
    this.initData()
  },
  initHtml(val) {
    const str=val.replace(/style/gi, "str")
    this.setData({
      htmls: str.replace(/\<img/gi, "<img style='display:block;width:100%;'")
    })
    // console.log(this.data.htmls)
  },
  onClose() {
    this.setData({
      show: false
    })
  },
  onClickIcon(e) {
    const idx = e.currentTarget.dataset.idx;
    wx.switchTab({
      url: idx === 1 ? '/views/index/index' : '/views/shopcar/index',
    })
  },
  onClickButton(e) {
    const idx = e.currentTarget.dataset.idx;
    this.setData({
      show: true,
      upType: idx
    })
  },
  onChange(e) {
    const [num, idx, sizeList] = [e.detail, e.currentTarget.dataset.idx, this.data.sizeList];
    sizeList[idx].num = num
    this.setData({
      sizeList
    }, this.initcommitInfo)
  },
  selectColor(e) {
    if (idx === this.data.colorIdx) return;
    const [idx, colorList, sizeList, commitInfo] = [e.currentTarget.dataset.idx, this.data.colorList, this.data.sizeList, this.data.commitInfo];
    sizeList.map(item => item.num = 0)
    commitInfo.sku_list.map(item => {
      if (item.color_id === colorList[idx].id) {
        const s = sizeList.findIndex(it => it.id === item.size_id)
        sizeList[s].num = item.num
      }
    })
    this.setData({
      colorIdx: idx,
      sizeList
    })
  },
  initcommitInfo() {
    const [colorId, sizeList, commitInfo, selectInfo] = [this.data.colorList[this.data.colorIdx].id, this.data.sizeList, this.data.commitInfo, this.data.selectInfo];
    sizeList.map(item => {
      let data = {
        color_id: colorId,
        color: this.data.colorList[this.data.colorIdx].name,
        size_id: item.id,
        size: item.name,
        num: item.num
      }
      const s = commitInfo.sku_list.findIndex(item => item.color_id === data.color_id && item.size_id === data.size_id)
      if (s > -1) commitInfo.sku_list.splice(s, 1, data)
      else commitInfo.sku_list.push(data)
    })
    commitInfo.sku_list = commitInfo.sku_list.filter(item => item.num > 0)
    selectInfo.num = commitInfo.sku_list.reduce((pre, item, idx) => pre += parseFloat(item.num), 0)
    selectInfo.price = commitInfo.sku_list.reduce((pre, item, idx) => pre += (parseFloat(item.num) * parseFloat(this.data.proInfo.nowprice)), 0)
    this.setData({
      commitInfo,
      selectInfo
    })
  },
  initData() {
    let data = {
        id: this.data.id
    }
    proDetail(data).then(res => {
      this.setData({
        htmls: this.initHtml(res.data.product.content),
        banners: res.data.imgs,
        colorList: res.data.color_infos,
        sizeList: res.data.size_infos.map(item => ({ ...item,
          num: 0
        })),
        proInfo: res.data.product,
        sellerInfo: res.data.seller,
        gassList: res.data.products,
      })
      // console.log(this.data.sizeList)
    })
  },
  upDetail(e) { //点击猜你喜欢
    const id = e.currentTarget.dataset.id;
    wx.redirectTo({
      url: `/views/detail/index?id=${id}`,
    })
  },
  goservers() {
    wx.navigateTo({
      url: '/views/indexNavs/serviceDes/index',
    })
  },
  goSeller() {
    const id = this.data.sellerInfo.id;
    wx.navigateTo({
      url: `../indexNavs/storeMarket/index?id=${id}`,
    })
  },
  sureUp() {
    const [type, commitInfo] = [this.data.upType, this.data.commitInfo];
    if (commitInfo.sku_list.length < 1) {
      wx.showToast({title: '请先选择规格',icon: 'none'})
      return
    }
    addShopcar(commitInfo).then(res => {
      if (type===1) {
        wx.showToast({ title: '添加购物车成功！', icon: 'none' })
      }else{
        wx.setStorageSync('carIds', [res.data])
        wx.navigateTo({
          url: `/userViews/confirmationOrder/index`,
        })
      }
    })
    console.log(this.data.commitInfo)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})