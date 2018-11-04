const Conf = {
    baseUrl: {
        local: process.env.VUE_APP_LOCAL_API,
        development: 'api/',
        production: 'api/'
    },
    mockUrl:{
        local: '',
        easyMock: 'https://www.easy-mock.com/mock/5bdbe2baedc1b37905bfd607/mock/',       
    },
}


export default {
    // token在Cookie中存储的天数，默认1天
    cookieExpires: 1,

    // 默认请求路径
    baseUrl: Conf.baseUrl[process.env.VUE_APP_ENV],

    // Mock URL前缀
    mockUrl: Conf.mockUrl[process.env.VUE_APP_MOCK_TYPE],
}


import base_data from './base_data'
export const BaseData = base_data;



let progress = {
    progress:false,
    percentage:0
}
export const Progress = progress;
export const setProgress = (data) => {
    progress = data;
}