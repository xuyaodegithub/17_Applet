//公共方法js//模块化
//可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块只有通过 module.exports 或者 exports 才能对外暴露接口。
//在需要使用这些模块的文件中，使用 require(path) 将公共代码引入:var a=require(path) require 暂时不支持绝对路径
// header: {
//   'content-type': 'application/x-www-form-urlencoded' // 默认值
// },
const app = getApp()

function beforRqs(url, data, method = 'GET') {
  return new Promise((resole, reject) => {
    if (app.token) fetch(url, data, method, app.token, resole, reject);
    else app.loginInfoCallback.push(function(token) {
      fetch(url, data, method, token, resole, reject)
    });
  })
}

function fetch(url, data, method, token, resole, reject) {
  wx.request({
    url: app.baseUrl + url,
    data: data,
    dataType: 'json',
    method: method,
    header: {
      // 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'weapp-token': token
    },
    success: function(res) {
      // console.log(res.statusCode)
      if (!res.data.code) resole(res.data);
      else if (res.data.code === 1001) { //token失效
        app.loginInfoCallback.push(function (t) {
          fetch(url, data, method, t, resole, reject)
        });
        app.onLaunch();
        return;
      } else if (res.data.code === 1002) {
        wx.navigateTo({
          url: '/userViews/login/index',
        })
        reject(res)
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        });
        reject(res)
      }
    },
    fail: function(res) {
      wx.showToast({
        title: '请求错误',
        icon: 'none',
        duration: 2000
      });
      reject(res)
    },
    complete() {
      wx.stopPullDownRefresh()
      wx.hideLoading()
    }
  })
}
// function getGraphCode(data) {
//   wx.request({
//     url: app.baseUrl + '/mobile/code/wxGraphCode',
//     data: {},
//     responseType: 'arraybuffer',
//     method: 'GET',
//     header: {
//       'cookie': wx.getStorageSync("sessionid"),//读取cookie
//       'content-type': 'application/x-www-form-urlencoded' // 默认值
//     },
//     success: function (res) {
//       if (res.statusCode == 200) {
//         data.callback(res)
//       } else {
//         wx.showToast({
//           title: res.data.message,
//           icon: 'none',
//           duration: 2000
//         });
//       }
//     },
//     fail: function (res) {
//       wx.showToast({
//         title: '请求错误',
//         icon: 'none',
//         duration: 2000
//       });
//     }
//   })
// }
module.exports = {
  beforRqs
}