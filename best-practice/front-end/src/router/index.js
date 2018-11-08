import VueRouter from 'vue-router'
import routes from './routers'
import Vue from 'vue'
import store from '../store'
import { Loading,Message } from 'element-ui'
import { getToken,setToken} from '../utils/common'

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'hash'
})

// 是否开启路由跳转时的Loading层
const LOADING = false

// Loading层单例对象
let loadingInstance

// 页面常量
const HOME_PAGE_NAME = 'home'
const LOGIN_PAGE_NAME = 'login'
const REGISTER_PAGE_NAME = 'register'

/**
 * 路由跳转前的操作
 */
router.beforeEach((to, from, next) => {
    if(LOADING){
        loadingInstance = Loading.service({
            text:"页面跳转中..."
        })
    }
    const is_login = getToken() ? getToken() != 'undefined':false;

    if (!is_login && to.name !== LOGIN_PAGE_NAME && to.name !== REGISTER_PAGE_NAME) {
        // 未登录且要跳转的页面不是登录页和注册页
        next({
            name: LOGIN_PAGE_NAME
        })
    } else if (!is_login && (to.name === LOGIN_PAGE_NAME || to.name === REGISTER_PAGE_NAME)) {
        // 未登陆且要跳转的页面是登录页或注册页
        next() // 跳转
    } else if (is_login && to.name === LOGIN_PAGE_NAME) {
        // 已登录且要跳转的页面是登录页
        next({
            name: HOME_PAGE_NAME
        })
    } else {
        // 判断是否有权限访问
        store.dispatch('getUserInfo').then(access => {
            if (to.name.indexOf('error_') == 0 || to.path == '/'){
                next()  // 放过错误页和首页
            }else if (access.indexOf(to.path) > -1){
                next()  // 有权限，可访问
            } else{
                next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
            }
        }).catch(()=>{
            Message.error('获取用户信息失败，请重新登录')
            if(getToken() !== 'undefined'){
                setToken();
            }
            next({
                name: LOGIN_PAGE_NAME
            })
        })
    }
})


/**
 * 路由跳转后的操作
 */
router.afterEach(() => {
    if(LOADING){
        loadingInstance.close()
    }
})

export default router