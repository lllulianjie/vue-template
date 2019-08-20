// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 解决浏览器兼容性问题
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import globalPlugin from './plugins/globalPlugin'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(globalPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
