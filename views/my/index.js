const app=getApp();
import { userInfo } from '../../fetch/user.js'
// views/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      username:'',
      money:''
    },
    menuList: [
      { title: '待付款', icon: 'paid', num: 0, link: '/userViews/orderList/index?type=1' },
      { title: '待采购', icon: 'cart-circle-o', num: 0, link: '/userViews/orderList/index?type=2' },
      { title: '已发货', icon: 'logistics', num: 0, link: '/userViews/orderList/index?type=3' },
      { title: '全部订单', icon: 'orders-o', num: 0, link: '/userViews/orderList/index' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    userInfo().then(res=>{
      app.userInfoData=res.data;
      this.setData({ userInfo: res.data})
    })
  },
  ownAdress(){
    wx.getSetting({
      success:(res)=>{
        if (res.authSetting['scope.address']){
          console.log(111)
        }else{
          wx.authorize({
            scope: 'scope.address',
            success:()=>{},
            fail:()=>{}
          })
        }
      }
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
    // app.getUserInfo((info) => {
    //   this.setData({
    //     userInfo: info
    //   })
    // })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})