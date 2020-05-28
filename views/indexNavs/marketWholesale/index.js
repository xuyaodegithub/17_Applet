// views/indexNavs/marketWholesale/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      name: '全部',
      type: 0
    }, {
      name: '杭州女装',
      type: 1
    }, {
      name: '杭州男装',
      type: 2
    },],
    list: [{ "id": 1993, "marketname": "中纺中心", "sellername": "7B16-1（原2593）", "cityname": "杭州", "time": 1502704233, "products": [{ "id": 8444935, "name": "牡丹诺 套装 221", "price": "100.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/09\/5eb668fd12732.jpg", "img": "60328479,60328480,60328481,60328482,60328483,60328484,60328485,60328486,60328487" }, { "id": 8444937, "name": "牡丹诺 套装 218", "price": "95.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/09\/5eb668fe132ed.jpg", "img": "60328498,60328499,60328500,60328501,60328502,60328503,60328504,60328505,60328506" }, { "id": 8444938, "name": "牡丹诺 套装 217", "price": "100.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/09\/5eb668fe741ea.jpg", "img": "60328507,60328508,60328509,60328510,60328511,60328512,60328513,60328514,60328515" }], "year": 3 }, { "id": 3020, "marketname": "中纺中心", "sellername": "7A19(原ZF1046习习)", "cityname": "杭州", "time": 1547461897, "products": [{ "id": 8448378, "name": "2331款两件套", "price": "95.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/10\/5eb7be22b95bd.jpg", "img": "60348468,60348470,60348472,60348473,60348474,60348475,60348476" }, { "id": 8448384, "name": "2328款两件套", "price": "105.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/10\/5eb7be23ca3cd.jpg", "img": "60348492,60348493,60348494,60348495,60348496,60348497,60348498" }, { "id": 8448385, "name": "2327款两件套", "price": "95.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/10\/5eb7be242eafc.jpg", "img": "60348499,60348500,60348501,60348502,60348503,60348504,60348505" }], "year": 2 }, { "id": 13362, "marketname": "中纺中心", "sellername": "6B28（原YF2108）", "cityname": "杭州", "time": 1520589982, "products": [{ "id": 8500178, "name": "2020夏装新款时尚连衣裙 631 ", "price": "100.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/25\/5ecb3398bfa5c.jpg", "img": "60645287,60645288,60645289,60645290,60645291,60645292" }, { "id": 8500179, "name": "2020夏装新款时尚连衣裙 630 ", "price": "100.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/25\/5ecb339925103.jpg", "img": "60645293,60645294,60645295,60645296,60645297,60645298" }, { "id": 8500180, "name": "2020夏装新款时尚连衣裙 629 ", "price": "100.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/25\/5ecb339967287.jpg", "img": "60645299,60645300,60645301,60645302,60645303,60645304" }], "year": 3 }, { "id": 2804, "marketname": "中纺中心", "sellername": "6B21（原ZF6A09）", "cityname": "杭州", "time": 1530871872, "products": [{ "id": 4563391, "name": "3082实拍 斜门襟竖条纹抽绳短袖连衣裙", "price": "65.00", "headurl": "http:\/\/imagecdn0.17huo.com\/0e4ee9f7ffad254650297bb2ffc1ef95.jpg", "img": "28965838,28965839,28965840,28965841,28965842" }, { "id": 5486447, "name": "百涟 BL5110", "price": "115.00", "headurl": "http:\/\/imagecdn0.17huo.com\/85b7a009d14ba111bc701089631589f8.jpg", "img": "34501990,34501991,34501992,34501993,34501994" }, { "id": 5486450, "name": "百涟 BL5129", "price": "150.00", "headurl": "http:\/\/imagecdn0.17huo.com\/2dbee31fe25cbf3ef66de46799f88087.jpg", "img": "34502006,34502007,34502008,34502009,34502010,34502011" }], "year": 2 }, { "id": 2837, "marketname": "中纺中心", "sellername": "7B10（原ZF2223）", "cityname": "杭州", "time": 1530871916, "products": [{ "id": 8042472, "name": "潮流时尚风衣舒适长袖2020年春季中长款个性气质", "price": "100.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/ed5e42245cfb43c9b4d8ab69bff1b107.jpeg", "img": "51386700,51386701,51386702,51386703,51386704,51386705" }, { "id": 8042478, "name": "优雅时尚西装潮流中长款2020年春季个性长袖气质", "price": "100.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/efa0f7a32ce2459f9622c1f4419e81d2.jpeg", "img": "51386722,51386723,51386724,51386725,51386726" }, { "id": 8042964, "name": "破洞流苏口袋短裙中腰百搭牛仔布字母2018年夏季T恤", "price": "35.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/a0b24800380a4fb19e5ff23fb61f1742.jpeg", "img": "51386763,51386764,51386765,51386766,51386767,51386768" }], "year": 2 }, { "id": 3425, "marketname": "九堡好四季", "sellername": "3018(原YF2028)", "cityname": "杭州", "time": 1552815891, "products": [{ "id": 7665317, "name": "赫本风新品毛呢外套森系娃娃领复古秋冬大衣女过膝韩版长款chic", "price": "118.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/460782540\/O1CN019e69Fw1UdMZIX3Dxi_!!460782540.jpg", "img": "47830304,47830305,47830306,47830307" }, { "id": 7665408, "name": "2019流行网红女神款赫本毛呢子大衣冬季新款加厚中长款毛呢外套女", "price": "118.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i2\/460782540\/O1CN01ZVtumQ1UdMZMIkCeY_!!460782540.jpg", "img": "47831104,47831105,47831106,47831107,47831108" }, { "id": 7667251, "name": "纯手工双面羊绒呢子大衣女2019韩国黑色中长款过膝毛呢外套简约风", "price": "259.00", "headurl": "https:\/\/img.alicdn.com\/bao\/uploaded\/i3\/460782540\/O1CN01mJ5NDy1UdMZLColfH_!!0-item_pic.jpg", "img": "47841329,47841330,47841331,47841332,47841333" }], "year": 2 }, { "id": 18976, "marketname": "浙宝星座女装", "sellername": "183（原BTH8403A）", "cityname": "杭州", "time": 1520582399, "products": [{ "id": 8204918, "name": "现货怒推2色DA牌设计不规则拼接连衣裙ZB183-6613", "price": "105.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/31\/766aa3dc8b024acf9a67d4eacd05dbc7.jpeg", "img": "58700579,58700580,58700581,58700582,58700583,58700584" }, { "id": 8209434, "name": "本期惊喜减龄飘逸牛油果绿两件套娃娃裙ZB183-6618", "price": "110.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/4\/1\/a23556c5729f4ae19551c8e4e41b6774.jpeg", "img": "58726138,58726139,58726140,58726141,58726142,58726143" }, { "id": 8224188, "name": "4月6日出20夏米白工装连体裤（配送腰带）ZB183-6616", "price": "110.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/4\/2\/e4b9fc1c13254ab69bfc5be2c3702825.jpeg", "img": "58808434,58808435,58808436,58808437,58808438,58808439" }], "year": 3 }, { "id": 3067, "marketname": "中纺中心", "sellername": "5B52", "cityname": "杭州", "time": 1500894242, "products": [{ "id": 8041091, "name": "中长款连帽风衣个性舒适简约甜美可爱优雅简约大方", "price": "125.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/4385662c3ea94f028fadf32bfb1b95cc.jpeg", "img": "51378747,51378748,51378749,51378750,51378751,51378752" }, { "id": 8041100, "name": "潮流舒适时尚毛呢外套中长款2019年秋季单排扣气质", "price": "145.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/5b17ed537aee42fda859824babcc2a74.jpeg", "img": "51378803,51378804,51378805,51378806,51378807,51378808" }, { "id": 8041108, "name": "时尚潮流舒适连衣裙2019年夏季V领高腰套头短袖长裙", "price": "115.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/a17d4ee983584aedaba85b88121a11cb.jpeg", "img": "51378852,51378853,51378854,51378855,51378856,51378857" }], "year": 3 }, { "id": 14002, "marketname": "中纺中心", "sellername": "5A22（原YF3280）", "cityname": "杭州", "time": 1530872038, "products": [{ "id": 8058169, "name": "29052019秋冬新款韩版宽松豹纹拼接皮毛一体颗粒绒短款外套", "price": "145.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/fcba1ee4e8934e9db7d40096952ce3d7.jpeg", "img": "51474293,51474294,51474295,51474296,51474297,51474298" }, { "id": 8058891, "name": "2019冬季新款韩版休闲百搭中长款棉衣加厚保暖连帽外套", "price": "170.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/1264557dee3b48408229d634d8b0fe86.jpeg", "img": "51478317,51478318,51478319,51478320,51478321" }, { "id": 8232237, "name": "2020夏装新款亚麻舒适显瘦休闲长款连衣裙", "price": "100.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/04\/03\/5e8700ccc7153.jpg", "img": "58853596,58853597,58853598,58853599,58853600,58853601,58853602" }], "year": 2 }, { "id": 22906, "marketname": "中纺中心", "sellername": "7A25A（原ZF7B19）", "cityname": "杭州", "time": 1532394750, "products": [{ "id": 8203042, "name": "20315款连衣裙", "price": "145.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/03\/30\/5e81bda75c8f3.jpg", "img": "58689950,58689951,58689952,58689953,58689954,58689955,58689956" }, { "id": 8320148, "name": "20509款连衣裙", "price": "160.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/04\/11\/5e912518cd2c2.jpg", "img": "59614911,59614912,59614913,59614914,59614915,59614916,59614917" }, { "id": 8365939, "name": "20523款套装", "price": "125.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/04\/21\/5e9e94b336975.jpg", "img": "59877807,59877808,59877809,59877810,59877811,59877812,59877813" }], "year": 2 }, { "id": 2819, "marketname": "中纺中心", "sellername": "2B57（原2278）", "cityname": "杭州", "time": 1509106127, "products": [{ "id": 8502855, "name": "连衣裙优雅时尚潮流气质2020年夏季中长款高腰休闲", "price": "115.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/5\/26\/73ec4736a1224c58b2184896985ab1ca.jpeg", "img": "60661052,60661053,60661054,60661055,60661056,60661057" }, { "id": 8502856, "name": "2020年夏季时尚潮流舒适短袖套装\/套裙连帽纯色气质", "price": "110.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/5\/26\/5b8c802f0d9647318bb68d2e3d4568a6.jpeg", "img": "60661058,60661059,60661060,60661061,60661062,60661063" }, { "id": 8502858, "name": "潮流舒适时尚套装\/套裙短袖2020年夏季休闲宽松优雅", "price": "100.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/5\/26\/307c409ccdab4406a752846a7aa207da.jpeg", "img": "60661064,60661065,60661066,60661067,60661068,60661069" }], "year": 3 }, { "id": 3538, "marketname": "中纺中心", "sellername": "5B20（原6B04）", "cityname": "杭州", "time": 1496306626, "products": [{ "id": 8041482, "name": "潮流连衣裙2019年夏简约时尚百搭", "price": "75.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/0cdd68e30be445f7872c95cfc68e5b90.jpeg", "img": "51381001,51381002,51381003,51381004,51381005" }, { "id": 8041818, "name": "2019年冬装新款韩版宽松bf时尚潮流棉袄冬季棉服", "price": "125.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/1d5832e33f5542358facfa6abe68afb9.jpeg", "img": "51382917,51382918,51382919,51382920,51382921,51382922" }, { "id": 8041819, "name": "2019冬季新款韩版小辣椒棉衣女短款宽松bf时尚潮流棉服外套", "price": "135.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/589786c85dc34519843a740e6ea2fd67.jpeg", "img": "51382923,51382924,51382925,51382926,51382927,51382928" }], "year": 3 }, { "id": 19196, "marketname": "中纺中心", "sellername": "6B48（原2298)", "cityname": "杭州", "time": 1522319601, "products": [{ "id": 8460515, "name": "名媛衣尚2020夏装新款时尚套装 8827", "price": "110.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/14\/5ebca07ad995b.jpg", "img": "60418263,60418262,60418264,60418265,60418266,60418267" }, { "id": 8460518, "name": "名媛衣尚2020夏装新款时尚连衣裙 8830", "price": "95.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/14\/5ebca07c02fa4.jpg", "img": "60418280,60418281,60418282,60418283,60418284,60418285" }, { "id": 8500569, "name": "名媛衣尚2020夏装新款时尚连衣裙 1917-1 ", "price": "85.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/25\/5ecb50f890706.jpg", "img": "60647820,60647821,60647822,60647823,60647824,60647825" }], "year": 3 }, { "id": 3047, "marketname": "中纺中心", "sellername": "5A27", "cityname": "杭州", "time": 1525341861, "products": [{ "id": 8044689, "name": "彩雨轩 CYX1501", "price": "45.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/454bb29fc864411b9a4423be69f9afbe.jpeg", "img": "51399196,51399197,51399198,51399199,51399200" }, { "id": 8046291, "name": "2019秋款纯色复古金丝绒两件套套装修身显瘦气质优雅潮流时髦洋气", "price": "120.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/bbb5d31fc18d4975a0124442e56d4663.jpeg", "img": "51408297,51408298,51408299,51408300,51408301,51408302" }, { "id": 8183173, "name": "春熙牛仔外套通勤2020年春季拼接卡通潮款小外套", "price": "125.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/26\/97a4faaaba334d51a105e0680f8ff55c.jpeg", "img": "58576964,58576965,58576966,58576967,58576968,58576969" }], "year": 3 }, { "id": 3885, "marketname": "中纺中心", "sellername": "2B93（原2393）", "cityname": "杭州", "time": 1492604407, "products": [{ "id": 8044358, "name": "2019年夏季时尚潮流舒适连衣裙个性中长款荷叶边裙", "price": "90.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/a7a6bef8ac03459e8d5373557e2cdd62.jpeg", "img": "51397254,51397255,51397256,51397257,51397258,51397259" }, { "id": 8044372, "name": "夏季V领高腰雪纺套头印花中长款韩版连衣裙", "price": "65.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/98449f1d22c643b188756b7f916cb1bc.jpeg", "img": "51397283,51397284,51397285,51397286,51397287,51397288" }, { "id": 8046604, "name": "羊羔毛短外套女2019秋冬新款网红羊剪绒羊毛颗粒真毛呢大衣小香风", "price": "155.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/7\/4328bebff8694a0bb9e53baad61b3cd5.jpeg", "img": "51410019,51410020,51410021,51410022,51410023,51410024" }], "year": 4 }, { "id": 2587, "marketname": "中纺中心", "sellername": "5B51（原2B56）", "cityname": "杭州", "time": 1522321173, "products": [{ "id": 8490229, "name": "套装\/套裙两件套舒适宽松柔软潮流个性简约", "price": "125.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/5\/22\/24af964da9634d679bed3b691dc29aee.jpeg", "img": "60587288,60587289,60587290,60587291,60587293,60587295" }, { "id": 8490230, "name": "套装\/套裙时尚气质百搭宽松优雅通勤两件套休闲", "price": "95.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/5\/22\/b499b3adc9fd4537be965356f24c7c04.jpeg", "img": "60587292,60587294,60587296,60587297,60587298,60587299" }, { "id": 8490231, "name": "套装\/套裙通勤两件套休闲时尚气质百搭宽松优雅", "price": "115.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/5\/22\/1b2a42e6317846d1869f3f1020df3364.jpeg", "img": "60587300,60587301,60587302,60587303,60587304,60587305" }], "year": 3 }, { "id": 3404, "marketname": "浙宝星座女装", "sellername": "A172（原HSJ3046）", "cityname": "杭州", "time": 1510018620, "products": [{ "id": 8182836, "name": "网红小西装女薄款2020新款春秋外套韩版修身休闲小西服(支持退现)", "price": "90.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/26\/d8a7de64a8a840aa9c27dc5644642dd5.jpeg", "img": "58575135,58575136,58575137,58575138,58575139,58575140" }, { "id": 8183198, "name": "短款风衣女2020春秋新款韩版宽松气质立领拼接工装夹克短外套春款", "price": "115.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/26\/643831c62c3547099240b4987425ed5a.jpeg", "img": "58577107,58577108,58577109,58577110,58577111,58577112" }, { "id": 8183409, "name": "皮衣外套女短款2020年春季新款韩版宽松时尚pu皮夹克女ins潮春秋", "price": "120.00", "headurl": "https:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/3\/26\/6d5e3480fc484149835cea811fee5eaf.jpeg", "img": "58578255,58578256,58578257,58578258,58578259,58578260" }], "year": 3 }, { "id": 2938, "marketname": "中纺中心", "sellername": "5B29(原ZF2A08)", "cityname": "杭州", "time": 1540454605, "products": [{ "id": 8497178, "name": "2080时尚圆领修身连衣裙", "price": "110.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/24\/5ec9f1ea512c1.jpg", "img": "60628142,60628143,60628144,60628145,60628146,60628147,60628148,60628149,60628150" }, { "id": 8497179, "name": "2081时尚V领修身连衣裙", "price": "115.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/24\/5ec9f1ead6c69.jpg", "img": "60628151,60628152,60628153,60628154,60628155,60628156,60628157,60628158,60628159" }, { "id": 8497180, "name": "2082时尚复古印花连体裤 配腰带", "price": "105.00", "headurl": "http:\/\/17huo.oss-cn-hangzhou.aliyuncs.com\/product\/2020\/05\/24\/5ec9f1eb73397.jpg", "img": "60628160,60628161,60628162,60628163,60628164,60628165,60628166,60628167" }], "year": 2 }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  taptabs(e) {
    console.log(e.detail)
  },
  confirms(e){
    console.log(e.detail)
  },
  toStore(e){
    const id = e.currentTarget.dataset.id
    console.log(id)
  },
  toDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/views/detail/index?id=${id}`,
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