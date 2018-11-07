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
    },'正在退出系统...')
};

export const userInfo = () => {
    return request({
        url: 'userInfo',
        method: 'get'
    },'获取用户数据中...')
}

export const addUser = () => {
    return request({
        url: 'userInfo',
        method: 'get'
    },'获取用户数据中...')
}

export const editUser = () => {
    return request({
        url: 'userInfo',
        method: 'get'
    },'获取用户数据中...')
}


export const delUser = () => {
    return request({
        url: 'userInfo',
        method: 'get'
    },'获取用户数据中...')
}


