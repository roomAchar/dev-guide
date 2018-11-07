import Test from '../../components/test'
import Test2 from '../../components/test2'
export default [
    {
        path: 'user',
        name: 'user',
        component: resolve=>require(['../../views/system/user/list'],resolve)
    },
    {
        path: 'user1',
        name: 'user1',
        component: Test
    },
    {
        path: 'user2',
        name: 'user2',
        component: Test2
    }
]