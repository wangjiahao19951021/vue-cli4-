import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import store from './store'


//引入移动端rem比例
import './rem/rem.js'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
