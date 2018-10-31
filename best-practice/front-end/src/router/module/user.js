export default [
    {
        path: 'user1',
        name: 'user1',
        component: resolve=>require(['../../views/error/404.vue'],resolve)
    },
    {
        path: 'user2',
        name: 'user2',
        component: resolve=>require(['../../views/error/404.vue'],resolve)
    }
]