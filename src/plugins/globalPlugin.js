/**
 * 注册Vue的全局/实例属性入口
 * @author lulianjie
 * 2019-04-20
 */
import servicePlugin from './servicePlugin'
import utilPlugin from './utilPlugin'
import resourcePlugin from './resourcePlugin'
import mixinPlugin from './mixinPlugin'

const plugin = {
  install (Vue) {
    Vue.use(servicePlugin)
    Vue.use(utilPlugin)
    Vue.use(resourcePlugin)
    Vue.use(mixinPlugin)
  }
}

export default plugin
