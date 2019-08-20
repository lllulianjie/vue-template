let globalConfig = null

function initGlobalConfig () {
  globalConfig = require('../config/global-config.json') || {}
}

function getConfig () {
  if (!globalConfig) {
    initGlobalConfig()
  }
  return globalConfig
}

function getConfigByKey (key) {
  if (!globalConfig) {
    initGlobalConfig()
  }
  let value = globalConfig[key]
  return value || {}
}

export default {
  getConfig,
  getConfigByKey
}
