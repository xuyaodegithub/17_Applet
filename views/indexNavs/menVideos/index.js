// views/indexNavs/menVideos/index.js
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
    list: [{ "id": 5208054, "name": "2018 新款夏季韩版潮流宽松学生休闲运动哈伦裤束脚裤 K37 P25", "price": "25.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/838870002\/TB2dZGkyXmWBuNjSspdXXbugXXa_!!838870002.jpg_250x250.jpg", "img": "32944998,32944999,32945000,32945001,32945002", "video": "http:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/50170138577.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 6331191, "name": "2019男士休闲裤秋季宽松运动裤男生束脚长裤潮牌工装裤9917 P25", "price": "25.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/838870002\/O1CN01TdFq0r1BsxHEdETeL_!!838870002.jpg_250x250.jpg", "img": "38655923,38655924,38655925,38655926,38655927,38655928,38655929", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/215891050183.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 6350185, "name": "2019男士休闲裤秋季宽松运动裤男生束脚长裤潮牌工装裤k9917 P25", "price": "25.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/838870002\/O1CN01jv4yja1BsxHJhsz2M_!!838870002.jpg_250x250.jpg", "img": "38749261,38749262,38749263,38749264,38749265,38749266", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/215891050183.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 6480396, "name": "2019春夏装男士休闲小脚裤暗黑国潮夜场锥形男生工装裤 K590 P85", "price": "85.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/327757789\/O1CN01majJou27PPS7QGt4f_!!327757789.jpg_250x250.jpg", "img": "39552105,39552106,39552107,39552108,39552109,39552110", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/327757789\/p\/1\/e\/6\/t\/1\/218975403975.mp4", "marketname": "四季星座", "sellername": "101A-3（原176）" }, { "id": 6489438, "name": "D301-CS31 2019春季新款韩版修身格子长袖衬衣男社会小伙衬衫P55", "price": "55.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/2228336331\/O1CN01ZuCDHy1wddzAyPJgQ_!!2228336331.jpg_250x250.jpg", "img": "39602882,39602883,39602884,39602885,39602886,39602887", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/2228336331\/p\/1\/e\/6\/t\/1\/252173397479.mp4", "marketname": "电商基地", "sellername": "D301（原D302-1）" }, { "id": 6504413, "name": "春季运动裤子男韩版潮流阔腿裤宽松休闲哈伦裤束脚亚麻九分裤K801", "price": "20.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/838870002\/O1CN015olKsy1BsxI0Nqk2s_!!838870002.jpg_250x250.jpg", "img": "39699022,39699023,39699024,39699025,39699026,39699027", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/217345991175.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 6504437, "name": "星座303男士宽松小脚休闲裤韩版裤收口束脚哈伦裤9917-P25控价39", "price": "25.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/838870002\/O1CN01F5sb2s1BsxI10z7kT_!!838870002.jpg_250x250.jpg", "img": "39699164,39699165,39699166,39699167,39699168,39699169", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/215891050183.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 6544221, "name": "【春季主推】哈伦裤子日系大码男装休闲裤牛仔裤九分裤男NZ888P50", "price": "50.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i1\/2064597286\/O1CN01S2PUf023h2Ec0SEFj_!!2064597286.jpg_250x250.jpg", "img": "39926874,39926875,39926876,39926877,39926878", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/2064597286\/p\/1\/e\/6\/t\/1\/210526369791.mp4", "marketname": "电商基地", "sellername": "B278" }, { "id": 6736886, "name": "19新款纯色男士九分牛仔裤港风休闲日系店主原宿破洞原创 802\/P45", "price": "45.00", "headurl": "http:\/\/imgcdn.wsy.com\/ps\/340961\/20190408\/seenKbAWyG.jpg", "img": "41070872,41070873,41070874,41070875,41070876,41070877,41070878", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/18\/816aba2c29914bb2a8aab5df93aa1ae8.mp4", "marketname": "电商基地", "sellername": "C201（原DSB267）" }, { "id": 6753912, "name": "19新款纯色男士九分牛仔裤港风休闲日系店主原宿破洞原创 802\/P45", "price": "45.00", "headurl": "http:\/\/imgcdn.wsy.com\/ps\/340961\/20190414\/5AkZt6hstQ.jpg", "img": "41167992,41167993,41167994,41167995,41167996,41167997,41167998", "video": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/18\/74619317acfc4250bd3aef2b9dcfcf0e.mp4", "marketname": "电商基地", "sellername": "C201（原DSB267）" }, { "id": 7292617, "name": "新款工装时尚长裤束脚印花大口袋系绳松紧腰宽松K906", "price": "30.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i1\/838870002\/O1CN01jDBKxx1BsxL9okDrL_!!838870002.jpg_250x250.jpg", "img": "44746097,44746098,44746099,44746100,44746101,44746102,44746103", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/215927051462.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 7363550, "name": "2019秋冬新款英伦网红印花男士长袖衬衫男上衣A407-CS514-P55", "price": "55.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/407841329\/O1CN01LYbO9x1LgivF2UT8x_!!407841329.jpg_250x250.jpg", "img": "45383538,45383539,45383540,45383541,45383542,45383543", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/407841329\/p\/1\/e\/6\/t\/1\/234658543816.mp4", "marketname": "电商基地", "sellername": "A407" }, { "id": 7440474, "name": "爆款2019潮流夏秋九分裤X21宽松束脚魔术贴哈伦裤薄款工装裤男K13", "price": "25.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/838870002\/O1CN01Vow89D1BsxLR00lAn_!!838870002.jpg_250x250.jpg", "img": "45840883,45840884,45840885,45840886,45840887,45840888,45840890", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/234950226567.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 7562357, "name": "春季港风情侣宽松潮流休闲长袖圆领印花卫衣A150-YL03-P45", "price": "45.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/58127545\/O1CN01xxqz7k25besJYAaiL_!!58127545.jpg_250x250.jpg", "img": "46924745,46924746,46924747,46924748,46924749,46924750", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/58127545\/p\/1\/e\/6\/t\/1\/234839466742.mp4", "marketname": "电商基地", "sellername": "A150" }, { "id": 7829624, "name": "秋装裤脚松紧休闲长裤男宽松小脚潮流哈伦纯色裤子K191 P25", "price": "20.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/838870002\/O1CN014E8A4g1BsxMWIim37_!!838870002.jpg_250x250.jpg", "img": "48803564,48803565,48803566,48803567,48803568,48803569,48803571", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/241884263497.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 7830165, "name": "K9989工装裤男潮牌余文乐哈伦裤束脚休闲裤男ins超火的裤子K602", "price": "25.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/838870002\/O1CN01kwHLcC1BsxMCK9NqB_!!838870002.jpg_250x250.jpg", "img": "48806609,48806610,48806611,48806612,48806613,48806614,48806615", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/838870002\/p\/1\/e\/6\/t\/1\/238563757440.mp4", "marketname": "四季星座", "sellername": "303A（同XZ303A-1）" }, { "id": 7830504, "name": "港风毛呢冬季保暖小西裤休闲裤中性情侣男女英伦裤C405-K586P60", "price": "60.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/797660399\/O1CN01jYqvGs1Eomaiom8Us_!!0-item_pic.jpg_250x250.jpg", "img": "48808607,48808608,48808609,48808610,48808611,48808612,48808613", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/797660399\/p\/1\/e\/6\/t\/1\/50291580549.mp4", "marketname": "电商基地", "sellername": "C405（原B420）" }, { "id": 7834617, "name": "秋季港风情侣宽松印花毛领棉衣棉袄潮外套A150-MY051-P140控价168", "price": "140.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i1\/58127545\/O1CN0136lFsj25beshxXf3O_!!0-item_pic.jpg_250x250.jpg", "img": "48833594,48833595,48833596,48833597,48833598,48833599,48833600", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/58127545\/p\/1\/e\/6\/t\/1\/237770380033.mp4", "marketname": "电商基地", "sellername": "A150" }, { "id": 7839461, "name": "秋冬季新款男束脚运动休闲长裤韩版潮流抖音网红同款裤子K955P55", "price": "55.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/427464908\/O1CN01b79CbT1m7uSHOU0AT_!!427464908.jpg_250x250.jpg", "img": "48864545,48864546,48864547,48864548,48864549,48864550,48864551", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/427464908\/p\/1\/e\/6\/t\/1\/229394370241.mp4", "marketname": "电商基地", "sellername": "A368" }, { "id": 7839744, "name": "秋季新款韩版潮流休闲裤社会小伙裤子男学生百搭纯色长裤K991P65", "price": "65.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i4\/427464908\/O1CN01f49MBY1m7uS69hxBV_!!427464908.jpg_250x250.jpg", "img": "48866396,48866397,48866398,48866399,48866400,48866401,48866402", "video": "https:\/\/cloud.video.taobao.com\/\/play\/u\/427464908\/p\/1\/e\/6\/t\/1\/237250136563.mp4", "marketname": "电商基地", "sellername": "A368" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  taptabs(e) {
    console.log(e.detail)
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