import compareMixin from '@/mixins/compareMixin'

function initVueMixin (Vue) {
  Vue.mixin(compareMixin)
}

const plugin = {
  install (Vue) {
    initVueMixin(Vue)
  }
}

export default plugin
