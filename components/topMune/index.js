// components/topMune/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList:Array,
    bc:String,
    seach: Boolean,
    border:Boolean,
    placeHolder:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:'',
    selectIdx:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    seachTab(e){
      const [type, idx] = [e.currentTarget.dataset.type, e.currentTarget.dataset.idx];
      if (idx === this.data.selectIdx) return;
      this.setData({
        selectIdx: idx
      })
      this.triggerEvent('myevent', type)
    },
    confirm(e){
      const value=e.detail
      this.triggerEvent('confirm', value)
    }
  }
})
