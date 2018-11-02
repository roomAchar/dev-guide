const Conf = {
    baseUrl: {
        development: 'api/',
        pro: 'api/'
    },
    mockUrl:{
        easyMock: 'https://www.easy-mock.com/mock/5bdbe2baedc1b37905bfd607/mock/',
        local: '',
    },
}

export default {
    // token在Cookie中存储的天数，默认1天
    cookieExpires: 1,

    // 默认请求路径
    baseUrl: Conf.baseUrl[process.env.NODE_ENV],
    // Mock URL前缀
    mockUrl: Conf.mockUrl[process.env.VUE_APP_MOCK_TYPE],


}


import {getConfigArray,getConfigKey,getConfigValue} from './base_data'
export const BaseData = {getConfigArray,getConfigKey,getConfigValue}