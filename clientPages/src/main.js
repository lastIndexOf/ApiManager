// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/styles/family.css'
import './assets/styles/reset.css'
import './assets/styles/fonts/iconfont.css'
import 'sweetalert2/dist/sweetalert2.min.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
