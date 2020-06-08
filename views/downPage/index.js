const app = getApp();
// views/downPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    videoImg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },
  initData() {
    let list = app.downList.filter(item => item.list.length > 0);
    const videoImg = (list.filter(item => item.name === 'imgs'))[0].list[0]
    list = list.map(item => ({
      ...item,
      sList: [],
      sAll: 0
    }))
    console.log(list, videoImg)
    this.setData({
      list,
      videoImg
    })
  },
  selectShop(e) {
    const [idx, list] = [e.currentTarget.dataset.idx, this.data.list];
    list[idx].sAll = 0;
    if (list[idx].sList.length !== list[idx].list.length) {
      list[idx].sList = [...list[idx].list];
      list[idx].sAll = 1;
    } else list[idx].sList = [];
    this.setData({
      list
    })
  },
  selectItem(e) {
    const [idx, idxson, list] = [e.currentTarget.dataset.idx, e.currentTarget.dataset.idxson, this.data.list];
    const index = list[idx].sList.indexOf(list[idx].list[idxson])
    if (index > -1) list[idx].sList.splice(index, 1)
    else list[idx].sList.push(list[idx].list[idxson])
    if (list[idx].sList.length === list[idx].list.length) list[idx].sAll = 1;
    else list[idx].sAll = 0;
    this.setData({
      list
    })
  },
  down() {
    const list = this.data.list;
    let [imgs, video] = [list.filter(item => item.name !== 'video'), list.filter(item => item.name === 'video')[0].sList];
    const allList = imgs.reduce((pre, item, idx) => [...pre, ...item.sList], [])
    if (allList.length < 1 && video.length < 1) {
      wx.showToast({
        title: '先选择需要下载的图片或视频',
        icon: 'none'
      })
      return;
    }
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: res => {
              this.imgInfouser(allList, video)
            },
            fail: err => {
              wx.showModal({
                title: '权限设置',
                content: '相册授权后才能保存图片，前往设置？',
                cancelColor: '#9c9c9c',
                confirmColor: '#c2202d',
                success: (res) => {
                  if (res.confirm) {
                    wx.openSetting()
                  } else if (res.cancel) {

                  }
                }
              })
            }
          })
        } else this.imgInfouser(allList, video)
      }
    })
  },
  imgInfouser(arr, videos) {
   const list=arr.length>0 ? (arr.join(',').replace(/http:/gi, "https:")).split(',') : [];
   const video=videos.length>0 ?(videos.join(',').replace(/http:/gi, "https:")).split(','): [];
   console.log(arr,videos,list,video)
    let saveNum = 0;
    if(list.length>0){
    wx.showLoading({title: `下载进度(${saveNum}/${list.length})`,icon: 'none', mask: true})
      list.map(item => {
        wx.getImageInfo({
          src: item,
          success: res=> {
           wx.saveImageToPhotosAlbum({
             filePath: res.path,
             success:()=>{},
             fail:()=>{},
             complete:()=>{
              saveNum+=1;
              if(saveNum===list.length && video.length>0){
                wx.showLoading({title: `正在下载视频`,mask: true});
                this.downVideo(video)
              }else if(saveNum===list.length && video.length<1)wx.showToast({title: `图片下载完成`,icon: 'none',mask: true});
              else  wx.showLoading({ title: `下载进度(${saveNum}/${list.length})`,mask: true})
             }
           })
          }
        })
      })
    }else{
      wx.showLoading({title: `正在下载视频`,mask: true});
      this.downVideo(video)
    }
  
  },
  downVideo(video){
    wx.downloadFile({
      url:video[0],
      success:res=>{
        wx.saveVideoToPhotosAlbum({
          filePath: res.tempFilePath,
          success :res=>{
            wx.showToast({
              title: '下载完成',
              icon:'none'
            })
          }
        })
      },
      fail:err=>{
        wx.showToast({
          title: err,
          icon:'none'
        })
      },
      complete:()=>{
        wx.hideLoading()
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