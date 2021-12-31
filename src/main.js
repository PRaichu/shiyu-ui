import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import store from './store'
import VWaves from '@/utils/Waves'
import Close from '@/utils/Close'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VWaves)
Vue.use(Close)

new Vue({
  render: h => h(App),
  router: Router,
  store: store
}).$mount('#app')
