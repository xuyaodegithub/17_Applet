//一些公用方法和声明周期  类似vue中的mixsins
const mixins = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: '这是myBehavior内的数据'
  },
  attached: function () { },
  methods: {
    myBehaviorMethod: function () {
      console.log('这是执行myBehavior内引入的myBehavior中的方法')
    }
  }
})
module.exports = mixins