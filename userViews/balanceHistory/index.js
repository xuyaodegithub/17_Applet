// userViews/balanceHistory/index.js
const app = getApp();
import {
  userBagMoney
} from '../../fetch/user.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finished: false,
    list: [],
    page: 1,
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({userInfo:app.userInfoData})
    this.initList()
  },
  initList() {
    let data = {
      page: this.data.page
    }
    userBagMoney(data).then(res => {
      this.setData({
        list: data.page > 1 ? [...this.data.list, ...res.data] : res.data,
        // list: list,
        finished: res.data.length<10 ? true : false
      })
    })
  },
  nextScroll(){
    if (finished)return;
    this.setData({
      page:this.data.page+=1
    }, this.userBagMoney)
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