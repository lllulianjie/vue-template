import Vue from 'vue'
import Router from 'vue-router'

// 路由可以分模块定义并导入
import commandRoute from './commandRouter'
import thirdPartySysRoute from './thirdPartySysRouter'

Vue.use(Router)

const route = [
  {
    path: '/',
    redirect: '/commandList'
  }
]

const routes = [].concat(route, commandRoute, thirdPartySysRoute)

export default new Router({
  routes: routes
})
