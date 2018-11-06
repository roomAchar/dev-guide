import { menu } from '../../api'

export default {
    state: {
        menus: null

    },
    mutations: {
        setMenu(state, menus) {
            state.menus = menus
        },
    },
    actions: {
        // 获取首页菜单，保存到store
        handleGetMenu({state}) {
            return new Promise((resolve, reject) => {
                if (state.menus == null) {
                    menu().then(res => {
                        const data = res.data;
                        state.menus = data.data;
                        resolve(data.data)
                    }).catch(err => {
                        reject(err)
                    })
                } else {
                    resolve(state.menus)
                }
            })
        },

    }
}
