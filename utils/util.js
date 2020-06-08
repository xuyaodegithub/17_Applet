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
const uerCode = (that, code) => {
  wx.request({
    url: that.baseUrl + '/weapp/User/loginByCode',
    data: {
      code: code
    },
    dataType: 'json',
    method: 'GET',
    header: {
      'content-type': 'application/json',
    },
    success: function (res) {
      if (!res.data.code) {
        that.token = res.data.data.weapp_token;
        if (that.loginInfoCallback.length > 0) that.loginInfoCallback.map((item, idx) => {
          item(res.data.data.weapp_token);
          if (idx === that.loginInfoCallback.length - 1) that.loginInfoCallback = [];
        })
      } else wx.showToast({
        title: res.data.msg,
        icon: 'none'
      });
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
const getDay = (day, t) => {
  var today = new Date();
  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds); //注意，这行是关键代码

  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  if (t) return tMonth + "-" + tDate;
  else return tYear + "-" + tMonth + "-" + tDate;
}
const doHandleMonth = month => {
  var m = month;
  if (month.toString().length == 1) {
    m = "0" + month;
  }
  return m;
}
module.exports = {
  formatTime: formatTime,
  uerCode,
  getDay,
}