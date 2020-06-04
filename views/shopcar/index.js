import {
  userShopCar,
  shopDelete,
  userShopSave
} from '../../fetch/index.js'
// views/shopcar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    allPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  selectShop(e) { //选择货源地
    const [idx, list] = [e.currentTarget.dataset.idx, this.data.list];
    const [slen, len] = [list[idx].idList.length, list[idx].list.length];
    list[idx].selectAll = 0;
    list[idx].idList = [];
    if (slen !== len) {
      list[idx].selectAll = 1;
      list[idx].list.map(item => list[idx].idList.push(item.id));
    }
    this.setData({
      list
    }, this.initAllData)
  },
  selectItem(e) { //选择单个商品
    const [idx, idxson, list] = [e.currentTarget.dataset.idx, e.currentTarget.dataset.itemidx, this.data.list];
    const ix = list[idx].idList.indexOf(list[idx].list[idxson].id)
    if (ix > -1) list[idx].idList.splice(ix, 1);
    else list[idx].idList.push(list[idx].list[idxson].id)
    this.setData({
      list
    }, this.initAllData)
  },
  deletes(e) { //删除某个商品
    const [idx, idxson, list] = [e.currentTarget.dataset.idx, e.currentTarget.dataset.itemidx, this.data.list];
    wx.showModal({
      title: '删除确认',
      content: '确认要删除此商品么？',
      cancelColor: '#9c9c9c',
      confirmColor: '#c2202d',
      success:(res) =>{
        if (res.confirm) {
          shopDelete({
            id: list[idx].list[idxson].id
          }).then(res => {
            wx.showToast({
              title: '删除成功！',
              icon: 'none'
            })
            const i = list[idx].idList.indexOf(list[idx].list[idxson].id);
            if (i > -1) list[idx].idList.splice(i, 1)
            list[idx].list.splice(idxson, 1)
            this.setData({
              list
            }, this.initAllData)
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }

    })
  },
  changenum(e) { //修改数量
    // console.log(e.detail)
    const [val, idx, idxson, itidx, list] = [e.detail, e.currentTarget.dataset.idx, e.currentTarget.dataset.itemidx, e.currentTarget.dataset.itidx, this.data.list];
    let data = {
      "product_id": list[idx].list[idxson].product_id,
      "sku_list": list[idx].list[idxson].sku_list
    }
    if (+val < 1) {
      wx.showModal({
        title: '删除确认',
        content: '确定要删除此规格么？',
        cancelColor: '#9c9c9c',
        confirmColor: '#c2202d',
        success:(res)=> {
          if (res.confirm) {
            wx.showLoading()
            data.sku_list[itidx].num = 0;
            userShopSave(data).then(res => {
              const [k, arr] = [list[idx].idList.indexOf(data.product_id), data.sku_list.filter(itn => itn.num > 0)];
              if (k > -1 && arr.length < 1) list[idx].idList.splice(k, 1)
              list[idx].list[idxson].sku_list[itidx].num = 0;
              this.setData({
                list
              }, this.initAllData);
            })
          } else if (res.cancel) {
            // data.sku_list[itidx].num = 1;
            list[idx].list[idxson].sku_list[itidx].num =1;
            this.setData({
              list
            }, this.initAllData);
          }
        }
      })
    } else {
      wx.showLoading()
      data.sku_list[itidx].num = val;
      userShopSave(data).then(res => {
        list[idx].list[idxson].sku_list[itidx].num = val;
        this.setData({
          list
        }, this.initAllData)
      })
    }

    console.log(val, idx, idxson, itidx)

  },
  initAllData() { //每次改变后
    let list = this.data.list,
      allPrice = 0;
    list = list.filter(item => item.list.length > 0)
    list.map(item => {
      item.list = item.list.filter(item => item.sku_list.some(it => it.num > 0));
      item.list.map(itson => {
        itson.sku_list=itson.sku_list.filter(it=>it.num>0)
        if (item.idList.includes(itson.id)) {
          allPrice += itson.sku_list.reduce((pre, it, idx) => (parseFloat(it.num) * parseFloat(itson.nowprice)) + pre, 0)
        }
      })
      if (item.idList.length === item.list.length) item.selectAll = 1;
      else item.selectAll = 0;
    });
    this.setData({
      list,
      allPrice
    })
    wx.hideLoading()
  },
  initShopcar() {
    userShopCar().then(res=>{
      let list=res.data
      list.map(item => {
        item.selectAll = 0;
        item.idList = [];
        item.list = item.list.filter(item=>item.sku_list.some(it => it.num > 0))
      })
      console.log(list)
      this.setData({
        list
      })
    })

  },
  onSubmit() { //确认提交
    const [list, onlyone] = [this.data.list, this.data.list.reduce((pre, it, idx) => (it.idList.length> 0 ? pre+=1 : pre+=0),0)];
    const s = list.every(item => item.idList.length < 1)
    if (onlyone>1)wx.showToast({title: '每次只能结算相同货源地产品，请重新选择产品后结算。',icon:'none'});
    if (s) wx.showToast({ title: '请先选择商品', icon: 'none' });
    if (onlyone > 1 || s)return;
    const sItem = list.find(item=>item.idList.length>0)
    wx.setStorageSync('carIds',sItem.idList)
    wx.navigateTo({
      url: '/userViews/confirmationOrder/index',
    })
  },
  goindex(){
    wx.switchTab({
      url: '/views/index/index',
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
    this.initShopcar()
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