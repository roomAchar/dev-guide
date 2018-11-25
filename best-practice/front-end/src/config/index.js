/**
 * 基础配置信息
 */
export default {
    // token在Cookie中存储的天数，默认1天
    cookieExpires: 1,

    // API 默认请求路径
    baseUrl: process.env.VUE_APP_API,

    // Mock URL前缀
    mockUrl: process.env.VUE_APP_MOCK_URL || '',

}



/**
 * 暴露其他配置信息
 */
import JsonHandler from '../utils/jsonHandler'
import basedata from '../../static/basedata.json'
export const BaseData = new JsonHandler(basedata)
