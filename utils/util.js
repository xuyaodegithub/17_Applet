// 可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块只有通过 module.exports 或者 exports 才能对外暴露接口。
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const uerCode = (that, code)=>{
  wx.request({
    url: that.baseUrl + '/weapp/User/loginByCode',
    data: {code:code},
    dataType: 'json',
    method:'GET',
    header: {
      'content-type': 'application/json',
      // 'token': app.token
      // 'cookie': wx.getStorageSync("sessionid")//读取cookie
    },
    success: function (res) {
      if (!res.data.code) {
        that.token = res.data.data.weapp_token;
        if (that.loginInfoCallback) that.loginInfoCallback(res.data.data.weapp_token);
      }else wx.showToast({ title: res.data.msg, icon: 'none' });
    },
    fail: function (res) {
      wx.showToast({
        title: '请求错误',
        icon: 'none',
        duration: 2000
      });
    }
  })
}
module.exports = {
  formatTime: formatTime,
  uerCode
}
