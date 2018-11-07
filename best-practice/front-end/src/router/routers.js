import user from './module/user'
import demo from './module/demo'

export default [
    {
        path: '/', component:resolve=>require(['../views/home'],resolve),
        children: [
            {
                path: '/',name:'home', component:resolve=>require(['../components/HelloWorld'],resolve)
            },
            {
                path: '/no_auth',name:'no_auth', component:resolve=>require(['../components/test_auth'],resolve)
            },
            ...user,
            ...demo
        ]
    },
    {
        path: '/login', name:'login',component:resolve=>require(['../views/login'],resolve)
    },
    {
        path: '/register', name:'register', component:resolve=>require(['../views/register'],resolve)
    },
    {
        path: '/500',name: 'error_500',component: resolve=>require(['../views/error/500.vue'],resolve)
    },
    {
        path: '/401',name: 'error_401',component: resolve=>require(['../views/error/401.vue'],resolve)
    },
    {   // 404
        path: '*',name: 'error_404',component: resolve=>require(['../views/error/404.vue'],resolve)
    }
];