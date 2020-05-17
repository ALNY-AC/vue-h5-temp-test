// @ts-nocheck
import Vue from 'vue';
import U from './url.js';
import Random from '../lib/tool/Random.js';

// arrToStr

Vue.prototype.$getUrl = function (url = '') {
  if (!url) return '';
  if (url.indexOf('./') >= 0) return url;
  let _url;
  if (url.indexOf('http') == -1) {
    _url = U.imageUrl + url;
  } else {
    _url = url;
  }
  _url = _url.replace(/\\/g, "/");
  return _url;
}

// // 对Date的扩展，将 Date 转化为指定格式的String
// // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// // 例子：
// // (new Date()).Format("yyyy-MM-dd.S") ==> 2006-07-02 08:09:04.423
// // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
  const o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};

/**
     * 
     * 产生随机字符串
     * @param int $length
     * @return 产生的随机字符串
     */
Vue.prototype.$getRandom = new Random().getRandom;

//复制内容
Vue.prototype.$copy = function (str) {

  var oInput = document.createElement('input');
  oInput.value = str;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  document.body.removeChild(oInput);
}


Vue.prototype.$isPower = function (..._) {
  const powers = this.$store.state.power.list;
  return _.filter(el => powers.indexOf(el) >= 0).length > 0;
}



Vue.prototype.$back = function (go = -1) {
  this.$router.go(go);
}
