// userViews/saveAdress/index.js
import {
  adressDetail,
  adressAdd,
} from '../../fetch/user.js';
import area from '../../utils/area.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      getName: '',
      phone: '',
      Detailed: '',
      areaName: '所在地区',
      codes: '',
    },
    area,
    autosize: {
      maxHeight: 100,
      minHeight: 70
    },
    active: false,
    show: false,
    objstyle: {
      'line-height': '60rpx',
      'margin-right': '20rpx',
      // 'color': this.info.areaName === '所在地区' ? '#9c9c9c' : '#333'
    },
    ids: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.id) {
      this.setData({
        ids: [options.id, options.gid]
      })
    }
    this.initDetail()
  },
  initDetail() {
    if (this.data.ids.length < 1) return;
    let [info, objstyle] = [this.data.info, this.data.objstyle];
    adressDetail({
      id: this.data.ids[0]
    }).then(res => {
      info = {
        getName: res.data.consignee,
        phone: res.data.mobile,
        Detailed: res.data.addr,
        areaName: res.data.address,
        codes: this.data.ids[1]
      }
      objstyle['color'] = info.areaName === '所在地区' ? '#9c9c9c' : '#333'
      this.setData({
        info,
        objstyle
      })
    })
  },
  open() {
    this.setData({
      show: true
    })
  },
  close() {
    this.setData({
      show: false
    })
  },
  chose() {
    this.setData({
      active: !this.data.active
    })
  },
  confirm(e) {
    console.log(e)
    const [list, info] = [e.detail.values, this.data.info]
    if (!list[0].code || !list[1].code) return;
    info.areaName = list.reduce((pre, item, idx, arr) => (item ? pre + ' ' + item.name : pre), '');
    info.codes = list[2] ? (list[2].code ? list[2].code : list[1].code) : list[1].code;
    this.setData({
      info,
      show: false
    })
  },
  change(e) {
    const [val, info, idx] = [e.detail, this.data.info, e.target.dataset.idx]
    if (idx === 1) info.getName = val;
    else if (idx === 2) info.phone = val;
    else info.Detailed = val;
    this.setData({
      info
    })
  },
  save() {
    const info=this.data.info;
    if (!info.getName || !info.phone || !info.Detailed) {
      wx.showToast({title: '请先完善个人信息',icon:'none'})
      return;
    }
    if (!info.codes) {
      wx.showToast({ title: '请选择省市区', icon: 'none' })
      return;
    }
    let data = {
      id: this.data.ids[0] ? this.data.ids[0] : 0,
      gov_region_id: info.codes,
      consignee: info.getName,
      addr: info.Detailed,
      mobile: info.phone,
    }
    if (this.data.active) data['default_time'] = parseInt(new Date().getTime() / 1000);
    adressAdd(data).then(res=>{
      if(!res.code)wx.navigateBack()
    })
    // console.log(data)
    // const result =  adressAdd(data)
    // if (!result.code) {
    //   this.$router.go(-1)
    // }

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