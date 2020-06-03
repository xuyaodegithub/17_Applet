// userViews/addressList/index.js
import {
  adressList,
  adressDele,
  adressAdd,
} from '../../fetch/user.js';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    hasback: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      hasback: options.hasback ? true : false
    })
  },
  initList() {
    adressList().then(res => {
      this.setData({
        list: res.data
      })
    })
  },
  add() { //新增
    wx.navigateTo({
      url: '../saveAdress/index',
    })
  },
  updataItem(e) { //修改
    const item = e.target.dataset.item;
    wx.navigateTo({
      url: `../saveAdress/index?id=${item.id}&gid=${item.gov_region_id}`,
    })
  },
  deleteItem(e) { //删除
    const [item, idx, list] = [e.target.dataset.item, e.target.dataset.idx, this.data.list];
    wx.showModal({
      title: '删除确认',
      content: '确认要删除此地址么？',
      cancelColor: '9c9c9c',
      confirmColor: '#c2202d',
      success:(res)=> {
        if (res.confirm) {
          adressDele({
            id: item.id
          }).then(res => {
            list.splice(idx, 1)
            this.setData({
              list
            })
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }

    })

  },
  saveLocal(e) { //选择地址后返回
    if (!this.data.hasback) return;
    const item = e.target.dataset.item;
    console.log(item)
    let data = {
      id: item.id,
      gov_region_id: item.gov_region_id,
      consignee: item.consignee,
      addr: item.addr,
      mobile: item.mobile,
      default_time: parseInt(new Date().getTime() / 1000)
    }
    adressAdd(data).then(res => {
      if (!res.code)wx.navigateBack()
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
    this.initList()
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
  // onShareAppMessage: function() {

  // }
})