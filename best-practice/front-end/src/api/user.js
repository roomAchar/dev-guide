import request from '../utils/axios'

export const login = (data) => {
    return request({
        url: 'login',
        data,
        method: 'post'
    })
};

export const logout = () => {
    return request({
        url: 'logout',
        method: 'get'
    })
};

export const userInfo = () => {
    return request({
        url: 'userInfo',
        method: 'get'
    })
}