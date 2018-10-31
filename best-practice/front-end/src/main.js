import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

new Vue({
  router,
  template:'<router-view/>'
}).$mount('#app')
