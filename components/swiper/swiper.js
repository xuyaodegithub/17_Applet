// components/swiper.js
const app = getApp()
const mixins = require('../../utils/behaviors.js')
Component({
  behaviors: [mixins],
  /**
   * 组件的属性列表
   */
  properties: {
    banner: {
      type: Array
    },
    advers:{
      type:Array
    },
    height:Number,
    notice:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //活动
    goType(e) {
      
      // wx.navigateTo({
      //   url: '../find/find?url=' + e.target.dataset.url//跳转详情页，用options接受参数
      // })
    },
  }
})
