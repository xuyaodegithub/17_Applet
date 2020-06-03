// userViews/changePass/index.js
import {
  userSendSms,
  userSetPassword,
  userPhone
} from '../../fetch/user.js';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      sms: '',
      pass: '',
      pass2: '',
    },
    timer: 0,
    phone: ''
    // phone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({ phone: app.userInfoData.phone})
  },
  sendSms() {
    if (this.data.timer > 0) return;
    userSendSms().then(res => {
      if (!res.code) {
        wx.showToast({
          title: '短信已发送',
          icon: 'none'
        });
        this.setData({
          timer: 60
        }, this.setTimer)
      }
    })
  },
  setTimer() {
    let times = setInterval(() => {
      this.setData({
        timer: this.data.timer - 1
      })
      if (this.data.timer < 1) clearInterval(times)
    }, 1000)
  },
  savePass() {
    const info = this.data.info
    if (!Object.keys(info).every(item => info[item])) {
      wx.showToast({
        title: '请输入验证码或密码',
        icon: 'none'
      });
      return;
    }
    if (info.pass.length < 6) {
      wx.showToast({
        title: '密码长度少于6位,请重新输入',
        icon: 'none'
      });
      return;
    }
    if (info.pass !== info.pass2) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'none'
      });
      return;
    }
    const data = {
      code: info.sms,
      pay_password: info.pass
    }
    userSetPassword(data).then(res => {
      wx.showToast({
        title: '支付密码设置成功',
        icon: 'none'
      });
      app.userInfoData.pay_password_setted = 1;
      setTimeout(() => {
        wx.navigateBack()
      }, 2000)
    })
  },
  getPhoneNumber(e) {
    console.log(e.detail)
    if (e.detail.errMsg === 'getPhoneNumber:ok') {
      let data = {
        iv: e.detail.iv,
        encryptedData: e.detail.encryptedData
      }
      userPhone(data).then(res => {
        app.userInfoData.phone = res.data;
        this.setData({
          phone: res.data
        }, this.sendSms)
      })
    }
  },
  change(e) {
    const [val, idx, info] = [e.detail, e.target.dataset.idx, this.data.info]
    if (idx === 1) info.sms = val;
    else if (idx === 2) info.pass = val;
    else info.pass2 = val;
    this.setData({
      info
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})