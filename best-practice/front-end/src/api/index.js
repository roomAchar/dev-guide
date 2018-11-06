import request from '../utils/axios'

export const menu = () => {
    return request({
        url: 'menu',
        method: 'get'
    })
};