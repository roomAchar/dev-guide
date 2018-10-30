import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'



Vue.config.productionTip = false;
console.log(process.env.VUE_APP_ROOT)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_DEBUG)
console.log(process.env.VUE_APP_MOCK)
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
new Vue({
  render: h => h(App)
}).$mount('#app')
