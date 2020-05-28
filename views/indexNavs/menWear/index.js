// views/indexNavs/menWear/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      name: '全部',
      type: 0
    }, {
      name: '毛衣',
      type: 1
    }, {
      name: '衬衫',
      type: 2
    }, {
      name: '蕾丝衫/雪纺衫',
      type: 3
    }, {
      name: '裤子',
      type: 4
    }, {
      name: '牛仔裤',
      type: 5
    }, {
      name: '套装/学生校服/工作制服',
      type: 6
    }, {
      name: '婚纱/旗袍/礼服',
      type: 7
    }, {
      name: 'T恤',
      type: 8
    }, {
      name: '毛针织衫',
      type: 9
    }, {
      name: '中老年女装',
      type: 10
    },],
    active:3,
    list: [{ "id": 4407204, "name": "风衣2018年春季时尚纯色潮流气质优雅修身显瘦中长款", "price": "125.00", "headurl": "http:\/\/imgcdn0.17huo.com\/02\/2018-02-01\/201802011900303hurf.jpg", "img": "27175998,27175999,27176000,27176001,27176002,27176003", "video": null, "marketname": "中纺中心", "sellername": "5B58（原YF2582）" }, { "id": 4603222, "name": "709-1*A02 P55 2018夏季新款 情侣爆款无袖速干面料短裤套装", "price": "55.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/788437513\/TB29HtVjWSWBuNjSsrbXXa0mVXa_!!788437513.jpg_250x250.jpg", "img": "29170852,29170853,29170854,29170855,29170856,29170857", "video": null, "marketname": "四季星座", "sellername": "709-1" }, { "id": 5130713, "name": "2018年春季时尚圆领针织拼接显瘦绣花套头韩版T恤", "price": "58.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/06\/01\/5b11a24e4636e.jpg_250x250.jpg", "img": "32124038,32124062,32124081,32124114,32124149,32124192", "video": "", "marketname": "中纺中心", "sellername": "7C-18B（原2105-2106）" }, { "id": 5143785, "name": "衬衫2018年春季长袖中长款修身显瘦气质唯美纯色潮流", "price": "50.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/06\/01\/5b11cde7bd450.jpg_250x250.jpg", "img": "32261635,32261679,32261698,32261767,32261815,32261843", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/fc2bf8fb836940298b37d4aa90b7e01f.quicktime", "marketname": "中纺中心", "sellername": "6A21" }, { "id": 5404245, "name": "v领时尚气质微喇裤九分裤2018年秋季套装\/套裙纯色口袋", "price": "170.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/08\/15\/5b7379d59c518.jpg_250x250.jpg", "img": "34030412,34030418,34030422,34030427,34030433,34030439", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/d533248b6fa94a9cad9a6529a7dd3e58.mp4", "marketname": "中纺中心", "sellername": "6B62-63(原2027)" }, { "id": 5460904, "name": "收腰潮流休闲气质时尚不规则下摆V领长袖2020年春季", "price": "120.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/08\/27\/5b836d00622a0.jpg_250x250.jpg", "img": "34352067,34352071,34352075,34352077,34352080,34352084", "video": "", "marketname": "中纺中心", "sellername": "5B29(原ZF2A08)" }, { "id": 5576953, "name": "现货(有视频)牛角扣情侣毛呢大衣女装风衣外套F21-P138", "price": "135.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i1\/837890344\/TB2nYiKcfBNTKJjSszbXXaFrFXa_!!837890344.jpg_250x250.jpg", "img": "35005120,35005121,35005122,35005123,35005124,35005125", "video": null, "marketname": "电商基地", "sellername": "B356情侣" }, { "id": 5758864, "name": "棉衣2018年冬季时尚潮流舒适简约个性纯色中长款长袖", "price": "190.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/10\/20\/5bcb2c05ada8b.jpg_250x250.jpg", "img": "36017445,36017447,36017449,36017451,36017453,36017455", "video": "", "marketname": "中纺中心", "sellername": "6A13（原YF2273A）" }, { "id": 5766570, "name": "冬季加绒中长款口袋拉链棉服2018年单件直筒长袖开衫", "price": "145.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/10\/22\/5bcdcd7bb0b36.jpg_250x250.jpg", "img": "36062444,36062452,36062458,36062463,36062467,36062470", "video": "", "marketname": "中纺中心", "sellername": "5A26（原ZF5B27）" }, { "id": 5814328, "name": "时尚气质阔腿裤2018年冬季保暖长裤休闲", "price": "90.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/11\/06\/5be13d69f102a.jpg_250x250.jpg", "img": "36336534,36336545,36336567,36336585,36336596,36336606", "video": "", "marketname": "中纺中心", "sellername": "5A35（原YF4063）" }, { "id": 6275869, "name": "芷墨服饰 ZMFS81075", "price": "198.00", "headurl": "http:\/\/imagecdn0.17huo.com\/e5e0adb5bc345bc01c3f4e0cd4072c71.jpg", "img": "38389235,38389236,38389237,38389238,38389239,38389240", "video": null, "marketname": "中纺中心", "sellername": "6A08（原2060）" }, { "id": 6500447, "name": "POLO领时尚都市潮流休闲系带2019春季新款连衣裙", "price": "100.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2019\/02\/15\/5c6692c639e76.jpg_250x250.jpg", "img": "39673863,39673978,39674006,39674086,39674129,39674172", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/31b59b5c4fa7491d988b8f8cfc46bfd7.mp4", "marketname": "中纺中心", "sellername": "7B26" }, { "id": 6644503, "name": "XZ1007-C330-P50限68春季港风宽松长袖纯色文艺男女小清新ins衬衫", "price": "50.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/815507890\/O1CN016SI9kc289fSVRTL4Q_!!815507890.jpg_250x250.jpg", "img": "40512247,40512248,40512249,40512250,40512251", "video": null, "marketname": "四季星座", "sellername": "1007(同1007-1,1007-2)" }, { "id": 7470370, "name": "大货2019秋冬新款情侣毛衣渐变色半高领毛衣225-MY651-P50控价88", "price": "50.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/1990316177\/O1CN01orBFhs1vV736oDrhw_!!1990316177.jpg_250x250.jpg", "img": "46067547,46067548,46067549,46067550,46067551,46067552", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/1990316177\/p\/1\/e\/6\/t\/1\/234060610063.mp4", "marketname": "四季星座", "sellername": "225（原285）" }, { "id": 7487988, "name": "b106 风衣", "price": "135.00", "headurl": "http:\/\/imagecdn0.17huo.com\/e7fbb2ee83b11cad1e0788caadbd520c.jpg", "img": "46237613,46237614,46237615,46237616,46237617,46237618", "video": null, "marketname": "中纺中心", "sellername": "7C-40B（原2202-2203）" }, { "id": 7562789, "name": "女类 19秋装新款反光连帽情侣夹克男潮流休闲学生BF外套 J212 P88", "price": "88.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/3390570623\/O1CN01etNMvE1GTNIvKLZeC_!!3390570623.jpg_250x250.jpg", "img": "46937021,46937022,46937023,46937024,46937025,46937026", "video": null, "marketname": "四季星座", "sellername": "102" }, { "id": 7622527, "name": "韩版羽绒服", "price": "355.00", "headurl": "http:\/\/imagecdn0.17huo.com\/123e9317e022816d28e98817ee79181c.jpg", "img": "47516408,47516409,47516410,47516411,47516412,47516413,47516420,47516421,47516422,47516423", "video": null, "marketname": "中纺中心", "sellername": "5B12" }, { "id": 7667642, "name": "华彩伊身2019新款棉服M812", "price": "155.00", "headurl": "http:\/\/imagecdn0.17huo.com\/fff91c6e7c9f8e5bb625e55f001bcc4b.jpg", "img": "47843847,47843848,47843849,47843850,47843851,47843852,47843853,47843854,47843855", "video": null, "marketname": "九堡好四季", "sellername": "3171（原ZF5B10）" }, { "id": 7840597, "name": "女类 2019情侣装秋冬新款简约甜美毛衣外套A358-D313-P78(控108）", "price": "78.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/1020653412\/O1CN01cdRLAd1b4jw8zYuXV_!!1020653412.jpg_250x250.jpg", "img": "48872207,48872208,48872209,48872210,48872211,48872212,48872213", "video": null, "marketname": "电商基地", "sellername": "A358情侣" }, { "id": 7943920, "name": "709-1-JK80-P85 20春款 全棉宽松大口袋夹克韩版百搭时尚外套男", "price": "85.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/788437513\/O1CN01FaWljP25N0DwUIe08_!!788437513.jpg_250x250.jpg", "img": "50822458,50822469,50822479,50822489,50822497,50822501", "video": null, "marketname": "四季星座", "sellername": "709-1" }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  taptabs(e) {
    console.log(e.detail)
  },
  changes(e) {
    console.log(e.detail.name, e.detail.title, this.data.active)
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