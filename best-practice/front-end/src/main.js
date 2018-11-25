import Vue from 'vue'
import App from './App.vue'
import config from './config'
import {BaseData} from './config'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

console.log(config)
console.log(process.env)
console.log(BaseData.get('sex'))
console.log(BaseData.key('sex','女'))


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')