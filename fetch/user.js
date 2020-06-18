let http = require('./request.js')
/**
 * 登录
 **/
export const userLogin = (data) => http.beforRqs('/weapp/User/reportWxUserInfo', data);
/**
 * 用户信息
 **/
export const userInfo = (data) => http.beforRqs('/weapp/User/info', data); 
/**
 * 用户余额
 **/
export const userBagMoney = (data) => http.beforRqs('/weapp/UserMoney/logs', data); 
/**
 * 发送验证码
 **/
export const userSendSms = (data) => http.beforRqs('/weapp/User/send_sms_code', data);
/**
 * 设置密码
 **/
export const userSetPassword = (data) => http.beforRqs('/weapp/User/set_pay_password', data, 'POST');
/**
 * 解密手机号
 **/
export const userPhone = (data) => http.beforRqs('/weapp/User/reportWxPhoneNumber', data, 'POST');
/**
 * 收货地址列表
 **/
export const adressList = (data) => http.beforRqs('/weapp/Order/address_list', data);
/**
 * 收货地址删除
 **/
export const adressDele = (data) => http.beforRqs('/weapp/Order/address_del', data, 'POST');
/**
 * 收货地址新增或修改
 **/
export const adressAdd = (data) => http.beforRqs('/weapp/Order/address_save', data, 'POST');
/**
 * 收货地址详情
 **/
export const adressDetail = (data) => http.beforRqs('/weapp/Order/address_get', data);
/**
 * 确认订单页预览
 **/
export const orderPreview = (data) => http.beforRqs('/weapp/Order/preview_order', data, 'POST');
/**
 * 下单
 **/
export const payOrder = (data) => http.beforRqs('/weapp/Order/create_order', data, 'POST');
/**
 * 支付
 **/
export const payMoney = (data) => http.beforRqs('/weapp/Weixin/unifiedOrder', data,'POST');
/**
 * 密码支付
 **/
export const userPayByBalance = (data) => http.beforRqs('/weapp/Order/payByBalance', data, 'POST');
/**
 * 订单列表
 **/
export const orderList = (data) => http.beforRqs('/weapp/Package/lists', data,"POST");
/**
 * 订单详情
 **/
export const orderDetail = (data) => http.beforRqs('/weapp/Package/detail', data);
/**
 * 包裹退款
 **/
export const userBagReturn = (data) => http.beforRqs('/weapp/Order/refund', data,"POST");
