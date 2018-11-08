import Cookies from 'js-cookie'
import config from '../config'


/**
 * token 存取操作
 * @type {string}
 */
export const TOKEN_KEY = 'token'

export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, {expires: config.cookieExpires})
}

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}

