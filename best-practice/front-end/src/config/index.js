/**
 * 基础配置信息
 */
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

/**
 * 默认暴露配置属性
 * 全局常用配置
 */
export default {
    // token在Cookie中存储的天数，默认1天
    cookieExpires: 1,

    // 默认请求路径
    baseUrl: Conf.baseUrl[process.env.VUE_APP_ENV],

    // Mock URL前缀
    mockUrl: Conf.mockUrl[process.env.VUE_APP_MOCK_TYPE],

}




/**
 * 暴露其他配置信息
 */
import _BaseData from './base_data'
export const BaseData = _BaseData

