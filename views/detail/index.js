// views/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videos: 'https://17huo.oss-cn-hangzhou.aliyuncs.com/product/2020/5/21/c5aeae92748f48a99418452b9f0bb2b2.mp4',
    banners: [
      'http://img0.17huo.com/01/2016-05-31/04a2fca0b62344038f83ad982c474469.jpg',
      'http://img0.17huo.com/01/2016-05-31/f26a65c9f83f108936c3e4ce63503c92.jpg',
      'http://img0.17huo.com/01/2016-05-31/4af5e75c93c76c94bb55c972234e89e9.jpg',
      'http://img0.17huo.com/01/2016-05-31/5046127250b44071781072088d80e2b9.jpg'
    ],
    htmls: `<div class="d_html">
        <p><img src="https://cbu01.alicdn.com/img/ibank/2015/051/302/2649203150_1742340954.jpg"> <img src="https://cbu01.alicdn.com/img/ibank/2015/583/730/2651037385_1742340954.jpg"> <img src="https://cbu01.alicdn.com/img/ibank/2015/382/040/2651040283_1742340954.jpg"></p>
<p><img src="https://cbu01.alicdn.com/img/ibank/2015/845/791/2649197548_1742340954.jpg"></p>
<p><img src="https://cbu01.alicdn.com/img/ibank/2015/000/230/2651032000_1742340954.jpg"></p>
<p><img src="https://cbu01.alicdn.com/img/ibank/2015/229/491/2649194922_1742340954.jpg"></p>
<p><img src="https://cbu01.alicdn.com/img/ibank/2015/892/002/2649200298_1742340954.jpg"></p>
<p><img src="https://cbu01.alicdn.com/img/ibank/2015/267/430/2651034762_1742340954.jpg"></p>
<p><img src="https://cbu01.alicdn.com/img/ibank/2015/515/769/2646967515_1742340954.jpg"></p>
<p><img src="https://cbu01.alicdn.com/img/ibank/2015/615/079/2646970516_1742340954.jpg"></p>
<p>&nbsp;</p>    </div>`,
    show:false,
    colorList: { name: '颜色', list: [{ name: '白色', id: 5 }, { name: '黑色', id: 6 }, { name: '粉色', id: 7 }, { name: '军绿', id: 8 }]},
    sizeList: { name: '尺码', list: [{ name: 'X', id: 1 }, { name: 'XXL', id: 2 }, { name: 'M', id: 3 }, { name: 'L', id: 4 }] },
    colorIdx:'',
    selectInfo:{
      num:0,
      price:0.00
    },
    commitInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    this.initHtml()
  },
  initHtml() {
    this.setData({
      htmls: this.data.htmls.replace(/\<img/g, "<img style='display:block;width:100%;'")
    })
  },
  onClose(){
    this.setData({
      show: false
    })
  },
  onClickButton(){
    this.setData({
      show:true
    })
  },
  onChange(e){
    const num = e.detail, idx = e.currentTarget.dataset.idx;
    console.log(num,idx)
  },
  selectColor(e){
    const idx = e.currentTarget.dataset.idx;
    if (idx===this.data.colorIdx)return;
    this.setData({
      colorIdx: idx
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