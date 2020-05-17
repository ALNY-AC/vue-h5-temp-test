import Vue from 'vue';

let Url = {
  // serverUrl: 'http://192.168.0.122:81/admin',//吴杰的本地
  serverUrl: 'http://127.0.0.1:12193/ctos',//李传浩的本地
  // serverUrl: 'https://api.flame.yihuo-cloud.com/ctos',//生产环境
  // serverUrl: 'http://192.168.0.115:9002/ctos',//
  // serverUrl: 'https://api.flame.yihuo-cloud.cn/ctos',//测试环境

  // uploadUrl: '',
  uploadUrl: 'https://api.yihuo-cloud.com',
  // imageUrl: '',
  imageUrl: 'https://api.yihuo-cloud.com',
}

Vue.prototype.$Url = Url;

export default Url;


