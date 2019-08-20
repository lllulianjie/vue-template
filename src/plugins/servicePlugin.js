/**
 * 将工具类注册为Vue的全局/实例属性
 * @author lulianjie
 * 2019-04-20
 */

// import globalService from '@/services/globalConfigService'
// import httpService from '@/services/httpService'
// import commandService from '@/services/commandService'
// import thirdPartySysService from '@/services/thirdPartySysService'

function globalService (Vue) {
  const services = require.context(
    '@/services',
    false,
    /\.js$/
  )
  services.keys().forEach((filename) => {
    const config = services(filename)
    const name = camelCase(
      filename.split('/').pop().replace(/\.\w+$/, '')
    )
    Vue[name] = Vue.prototype[`$${name}`] = config.default
  })
}

function init (Vue) {
  // 添加Vue全局属性
  initVueGlobalMethods(Vue)
  // 定义Vue实例属性
  initVuePrototype(Vue)
}

function initVueGlobalMethods (Vue) {
  Vue.globalService = globalService
  Vue.httpService = httpService
  Vue.commandService = commandService
  Vue.thirdPartySysService = thirdPartySysService
}

function initVuePrototype (Vue) {
  Vue.prototype.$globalService = globalService
  Vue.prototype.$httpService = httpService
  Vue.prototype.$commandService = commandService
  Vue.prototype.$thirdPartySysService = thirdPartySysService
}

const plugin = {
  install (Vue) {
    // 手动将service挂载到 Vue 实例以及 Vue 方法上
    // init(Vue)

    // 自动扫描 services 文件夹下的js文件并挂载到Vue上
    globalService(Vue)
  }
}

export default plugin
