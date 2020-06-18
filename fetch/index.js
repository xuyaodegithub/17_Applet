let http = require('./request.js')
/**
 * 购物车
 **/
export const userShopCar = (data) => http.beforRqs('/weapp/Cart/lists', data) 
/**
 * 详情页
 **/
export const proDetail = (data) => http.beforRqs('/weapp/Products/detail', data) 
/**
 * 添加购物车
 **/
export const addShopcar = (data) => http.beforRqs('/weapp/Cart/add', data, "POST") 
/**
 * 首页产品//男装短视频//男装//女装//女装短视频//搜索页商品
 **/
export const initIndex = (data) => http.beforRqs('/weapp/Products/search', data, "POST") 
/**
 * 首页左右视频
 **/
export const initIndexVideo = (data) => http.beforRqs('/weapp/Products/video_index', data) 
/**
 * 每日新款
 **/
export const initDayNew = (data) => http.beforRqs('/weapp/Products/daily_new', data, "POST") 
/**
 * 批发市场
 **/
export const initmarket = (data) => http.beforRqs('/weapp/Shops/search', data) 
/**
 * 男装短视频tabs
 **/
export const initVideosTabs = (data) => http.beforRqs('/weapp/Products/categories', data) 
/**
 * 删除购物车
 **/
export const shopDelete = (data) => http.beforRqs('/weapp/Cart/delete', data, 'POST');
/**
 * 购物车修改数量
 **/
export const userShopSave = (data) => http.beforRqs('/weapp/Cart/save', data, 'POST'); 
/**
 * 档口商品
 **/
export const storeProList = (data) => http.beforRqs('/weapp/Products/seller_products', data, 'POST'); 
/**
 * 档口信息
 **/
export const storeInfo = (data) => http.beforRqs('/weapp/Shops/detail', data, ); 
/**
 * 特价列表
 **/
export const tejiaList = (data) => http.beforRqs('/weapp/Tejia/search', data, );