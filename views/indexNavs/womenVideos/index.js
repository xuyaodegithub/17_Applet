// views/indexNavs/womenVideos/index.js
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
    }, ],
    list: [{ "id": 5054048, "name": "舒适简约气质个性百搭修身休闲显瘦时尚都市青春流行纯色毛呢外套", "price": "145.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/05\/23\/5b053e04b7175.jpg_250x250.jpg", "img": "31568253,31568263,31568268,31568283,31568285,31568290", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/977eef3f25f7497d80e08ced9a510372.mp4", "marketname": "中纺中心", "sellername": "6B40-41" }, { "id": 5372819, "name": "时尚简约优雅翻领双排扣气质纯色2018年秋季毛呢外套", "price": "135.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/08\/09\/5b6b9a8abd0bd.jpg_250x250.jpg", "img": "33842899,33842928,33842935,33842969,33843029,33843083", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/a2f052f09952420fb5921a6529cb5cda.quicktime", "marketname": "中纺中心", "sellername": "6A12（原2531）" }, { "id": 5404243, "name": "小脚裤潮流拼接时尚气质纯色2018年秋季开衫", "price": "140.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/08\/15\/5b7379d47a145.jpg_250x250.jpg", "img": "34030399,34030401,34030403,34030406,34030411,34030416", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/43d75f0f4d7c41d5a81852fc61077d05.mp4", "marketname": "中纺中心", "sellername": "6B62-63(原2027)" }, { "id": 5447255, "name": "韩版潮流拼色连衣裙秋2018新款小香风高腰裙时髦长袖中腰A字裙", "price": "105.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/08\/23\/5b7e224df3f42.jpg_250x250.jpg", "img": "34274742,34274745,34274750,34274753,34274757,34274761", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/95d309366f444a83874820d6c1bab1c8.mp4", "marketname": "中纺中心", "sellername": "7A01（原2590）" }, { "id": 5513568, "name": "毛呢外套2018年秋季百搭格子长袖POLO领潮流简约个性显瘦修身", "price": "165.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/09\/10\/5b95e210827fe.jpg_250x250.jpg", "img": "34651396,34651406,34651413,34651420,34651427", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/5a9518e60a284d4d96eede513de93519.mp4", "marketname": "中纺中心", "sellername": "6B61（原2038）" }, { "id": 5597064, "name": "2018秋冬新款中长款加厚韩版修身毛领连帽棉服", "price": "140.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/09\/23\/5ba794fa03bbe.jpg_250x250.jpg", "img": "35117335,35117337,35117345,35117353,35117361,35117386", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/605ee2b8e8594e2783b7b1ca4c5d6658.mp4", "marketname": "中纺中心", "sellername": "7a30（原YF2080）" }, { "id": 5607353, "name": "一粒扣潮流拼接气质时尚休闲开衫2018年冬季中长款", "price": "130.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/09\/25\/5baa3acf97004.jpg_250x250.jpg", "img": "35172867,35172873,35172878,35172880,35172882,35172884", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/554b80272f4242b48600b496a447c7c1.mp4", "marketname": "中纺中心", "sellername": "6A20（原1147-1148）" }, { "id": 5744885, "name": "2018年冬季纯色时尚简约修身口袋中长款束腰修身气质淑女棉衣", "price": "165.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/10\/17\/5bc73cccc23d1.jpg_250x250.jpg", "img": "35935880,35935884,35935891,35935899,35935906,35935911", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/fe8fba45eb5445e4a8d12b778dada697.mp4", "marketname": "中纺中心", "sellername": "6B48（原2298)" }, { "id": 5758709, "name": "长款修身时尚2019冬温暖印花系扣流苏中国风棉衣外套新增3xL4XL", "price": "170.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/10\/20\/5bcb27384ade5.jpg_250x250.jpg", "img": "36016355,36016362,36016369,36016376,36016381", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/42574afaa381498793e86948a9f64fc3.mp4", "marketname": "中纺中心", "sellername": "7C32(原2B88）" }, { "id": 5788180, "name": "中长款长袖2018冬季新款潮流时尚休闲常规拉链棉衣", "price": "188.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/10\/26\/5bd32344390d1.jpg_250x250.jpg", "img": "36188592,36188594,36188596,36188598,36188600,36188602", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/723815e4ac8c4ba2b86240853d58ef89.mp4", "marketname": "中纺中心", "sellername": "6A20（原2561）" }, { "id": 5814069, "name": "舒适长袖女长款棉衣\/棉服2018年冬季加厚保暖时尚简约百搭", "price": "135.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/11\/06\/5be13c9d7f203.jpg_250x250.jpg", "img": "36334567,36334569,36334571,36334577,36334583,36334588", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/ad805a6539ac4330b33c58f62b39b31d.mp4", "marketname": "中纺中心", "sellername": "5A06（原2113）" }, { "id": 5828305, "name": "西装领2019冬季新款双排扣常规纯色长袖毛呢外套", "price": "145.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/11\/08\/5be437501a965.jpg_250x250.jpg", "img": "36419681,36419689,36419698,36419706,36419716,36419726", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/a192464fc6014099a478284a0cf9436f.mp4", "marketname": "中纺中心", "sellername": "6A20（原2561）" }, { "id": 5855524, "name": "印花拉链棉衣纯色简约2018年冬季休闲时尚潮流舒适长袖中长款口袋", "price": "175.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/11\/19\/5bf2b765160dc.jpg_250x250.jpg", "img": "36578275,36578281,36578286,36578298,36578305,36578314", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/5adddab554744bacb14a06d3f7e10934.mp4", "marketname": "中纺中心", "sellername": "7A19(原ZF1046习习)" }, { "id": 5865088, "name": "2018冬季新款加厚保暖舒适中长款纯色时尚潮流假两件棉衣", "price": "155.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/11\/22\/5bf6aaaecd565.jpg_250x250.jpg", "img": "36638085,36638087,36638089,36638091,36638093,36638095", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/699a06f9c7b44729b74d4e464b6d553c.mp4", "marketname": "中纺中心", "sellername": "7C-40B（原2202-2203）" }, { "id": 6041067, "name": "时尚简约百搭棉衣\/棉服2018年冬季舒适长袖女长款加厚保暖", "price": "185.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/11\/27\/5bfd436295e2d.jpg_250x250.jpg", "img": "37402590,37402649,37402710,37402791,37402867", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/56c818a97eaf4842930172a9acd8f818.mp4", "marketname": "中纺中心", "sellername": "6B55（原8B68）" }, { "id": 6288114, "name": "中长款2018年冬季连衣裙修身宽松保暖舒适圆领蕾丝优雅", "price": "110.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/12\/04\/5c067ea6e3eac.jpg_250x250.jpg", "img": "38448631,38448635,38448646,38448652,38448656,38448660", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/851965eeb95f429a91bd0416073635f9.mp4", "marketname": "中纺中心", "sellername": "7A29（原D055）" }, { "id": 6328155, "name": "加厚中长款直筒喇叭袖棉衣\/棉服2018年冬季拉链连帽纯色长袖", "price": "185.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2018\/12\/13\/5c125a3c7ed85.jpg_250x250.jpg", "img": "38640296,38640298,38640300,38640302,38640304", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/3887e0874ce7438b86a2421d926c1388.mp4", "marketname": "中纺中心", "sellername": "5A27" }, { "id": 6412887, "name": "秋季2019新款修身显瘦百搭简约两件套时尚都市潮流", "price": "125.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2019\/01\/08\/5c33f62854421.jpg_250x250.jpg", "img": "39073951,39073969,39073997,39074043,39074059", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/e7172f8cea1c4f44992f9fe96c825e98.mp4", "marketname": "中纺中心", "sellername": "2B57（原2278）" }, { "id": 6499657, "name": "2019年春季长裙连衣裙气质甜美纯色优雅蕾丝复古", "price": "115.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2019\/02\/15\/5c66913c00564.jpg_250x250.jpg", "img": "39665484,39665505,39665525,39665548,39665641,39665790", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/d716a9a288a847b2a8c0f2cb2ef63d72.quicktime", "marketname": "中纺中心", "sellername": "5B43" }, { "id": 6667422, "name": "套装\/套裙2019年夏季时尚修身百搭优雅韩版纯色简约舒适", "price": "145.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2019\/03\/25\/5c987914c8e83.jpg_250x250.jpg", "img": "40644912,40644922,40644933,40644952,40644962,40644970", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/3dc0de932eee43349a6dbf26cd6821fb.mp4", "marketname": "中纺中心", "sellername": "6B62-63(原2027)" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  taptabs(e) {
    console.log(e.detail)
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