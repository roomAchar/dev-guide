import axios from '../utils/axios';
import config from '../config';

export const login = (data) => {
    return axios.request({
        url: map.get('login'),
        data,
        method: 'post'
    })
};

export const logout = (token) => {
    return axios.request({
        url: map.get('logout'),
        method: 'get'
    })
};

export const userInfo = () => {
    return axios.request({
        url: map.get('userInfo'),
        method: 'get'
    })
}



/**
 * 后端路由表+mock
 */
const map = {
    urls:{
        login: 'login',
        logout: 'logout',
        userInfo: 'userInfo',
    },
    mock:{
        login:true,
        userInfo:true
    },
    get(key){
        let url;
        if(this.mock[key] === true){
            url = config.mockUrl + this.urls[key]
            console.log('Mock :' + url)
        }else{
            if(key in this.urls){
                url = this.urls[key]
            }else{
                throw new Error('没配置这条路由 url:'+key)
            }
        }
        return url
    }
}



