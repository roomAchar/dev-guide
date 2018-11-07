import axios from 'axios'
import mock from '../api/mock'
import config from '../config'
import { getToken } from "./index"
import {Message,Loading} from 'element-ui'


// 在实例已创建后修改默认值
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = config.baseUrl;

// 添加请求拦截器
axios.interceptors.request.use(
    function (config) {
        // 添加Authorization
        config.headers['Authorization'] = 'Bearer ' + getToken();
        // 加载loading层
        if(config.loading !== false){
            Loading.service({
                text:config.loading
            })
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        if(response.config.loading !== false){
            Loading.service({}).close()
        }
        return response;
    },
    function (error) {
        let code = error.response.status;
        let list = {
            404: '请求地址不存在',
            401: '无请求权限',
            422: '参数校验不通过',
            500: '服务器错误，请稍后再试',
        };
        Message({
            showClose: true,
            message: list[code],
            type: 'error'
        });
        return Promise.reject(error);
    }
);


/**
 *
 * @param option    请求参数
 * @param loading   是否开启loading层，默认为false 值为loading层显示的文本
 * @returns {AxiosPromise<any>}
 */
export default (option,loading = false)=>{
    if(option.url in mock){
        option.url = config.mockUrl + option.url
    }
    option.loading = loading
    return axios.request(option);
}