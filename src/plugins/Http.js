import axios from 'axios';
import url from './url.js';
import config from './config';

// import userInfo from '../modus/UserInfo/UserInfo.js';

function to() {
    return Object.keys(config).map(k => {
        let v = '';
        if (typeof config[k] == 'function') {
            v = `${k}=${config[k]()}`;
        } else {
            v = `${k}=${config[k]}`;
        } config
        return v;
    }).join(';');
}


let Http = axios.create({
    baseURL: url.serverUrl,
    // transformRequest: [function (data) {
    //     // return JSON.stringify(data);
    //     if (data) {
    //         data = JSON.parse(JSON.stringify(data));
    //         let ret = [];
    //         Object.keys(data).forEach(k => {
    //             if (typeof data[k] == "object") {
    //                 data[k] = JSON.stringify(data[k]);
    //             }
    //             ret.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
    //         });;
    //         return ret.join("&")
    //     }
    // }],
});

// // 添加一个请求拦截器
Http.interceptors.request.use(function (conf) {
    conf.headers.Authorization = to(config);

    // conf.headers.Authorization = "token " + 'ssssssssssssssssssssssssssssssaa';
    // conf.headers['Access-TimeSpan'] = new Date().valueOf();
    // if (conf.method == 'get') {
    // if (!conf.params) conf.params = {};
    // }
    return conf;
}, function (error) {
    return Promise.reject(error);
});

// // 添加一个响应拦截器
Http.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    console.error('接口错误');
    console.error(error);
    if (error.response.status == 401) {
        // 未登录

    }
    // return Promise.reject(error);
});


export default Http;