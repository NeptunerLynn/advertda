// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import routes from './router/index'
import Vuex from 'vuex'
import Mock from './mock'
Mock.bootstrap();

Vue.use(Router)
Vue.use(ElementUI)

Vue.config.productionTip = false
const router = new Router({routes});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
