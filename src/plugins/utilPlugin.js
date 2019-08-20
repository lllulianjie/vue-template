/**
 * 将工具类注册为Vue的全局/实例属性
 * @author lulianjie
 * 2019-04-20
 */

import localStorage from '@/utils/localStorageUtil'
import commonUtil from '@/utils/commonUtil'

function init (Vue) {
  // 添加Vue全局属性
  initVueGlobalMethods(Vue)
  // 定义Vue实例属性
  initVuePrototype(Vue)
}

function initVueGlobalMethods (Vue) {
  Vue.localStorage = localStorage
  Vue.commonUtil = commonUtil
}

function initVuePrototype (Vue) {
  Vue.prototype.$localStorage = localStorage
  Vue.prototype.$commonUtil = commonUtil
}

const plugin = {
  install (Vue) {
    init(Vue)
  }
}

export default plugin
