export default [
    {
        path: 'demo/list',
        name: 'demo_list',
        component: resolve=>require(['../../views/demo/list/index'],resolve)
    },
    {
        path: 'demo/list_extend',
        name: 'demo_list_extend',
        component: resolve=>require(['../../views/demo/list_extend/index'],resolve)
    },{
        path: 'demo/test_keep',
        name: 'testKeep',
        component: resolve=>require(['../../views/demo/edit/index'],resolve)
    }
    
]