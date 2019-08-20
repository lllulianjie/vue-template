import Vue from 'vue'

const thisVue = Vue
const categaryUrl = '/ai/commandCategorys/'
const commandUrl = '/ai/commands/'

// 根据分类id获取分类下的指令
function queryCommandsByCategoryId (categoryId) {
  return thisVue.httpService.get(commandUrl + 'category/' + categoryId + '/query')
}

// 根据分类id获取分类下的指令（分页）
function queryByCategoryId (categoryId, pageNo, pageSize) {
  const params = {
    categoryId: categoryId,
    pageNo: pageNo,
    pageSize: pageSize
  }
  return thisVue.httpService.get(commandUrl + 'queryByCategoryId', params)
}

// 保存指令
function saveCommand (command) {
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
  return thisVue.httpService.postVo(commandUrl + 'save', command, config)
}

// 检查指令名称唯一性
function checkByCommandName (commandName) {
  const params = {
    commandName: commandName
  }
  return thisVue.httpService.get(commandUrl + 'checkByCommandName', params)
}

// 根据commandIds批量删除指令
function delCommands (commandList) {
  const config = {
    data: JSON.stringify(commandList),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
  return thisVue.httpService.del(commandUrl + 'delete', config)
}

// 根据指令id查找指令
function queryCommandById (id) {
  return thisVue.httpService.get(commandUrl + id + '/query')
}

// 根据指令名字查找指令(模糊查询)
function queryCommandsByName (name) {
  return thisVue.httpService.get(commandUrl + name + '/likequery')
}

// 指令所属分类获取前面2级数据
function queryCategories () {
  return thisVue.httpService.get(categaryUrl + 'init')
}

// 根据分类id查找子分类
function queryCategoryByPid (pid) {
  return thisVue.httpService.get(categaryUrl + pid + '/sub/query')
}

// 根据分类id删除分类
function deleteCategoryById (id) {
  return thisVue.httpService.del(categaryUrl + id + '/delete')
}

// 指令所属分类获取全部数据
function queryAllCategories () {
  return thisVue.httpService.get(categaryUrl + 'queryAll')
}

// 保存分类
function saveCategory (category) {
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
  return thisVue.httpService.postVo(categaryUrl + 'save', category, config)
}

// 检查分类名称唯一性
function checkByCategoryName (categoryName) {
  return thisVue.httpService.get(categaryUrl + categoryName + '/check')
}

// 根据指令id查找配置信息
function queryCallConfigByCommandId (commandId) {
  return thisVue.httpService.get(commandUrl + commandId + '/callconfig')
}

// 保存配置信息
function saveCallConfig (callConfig) {
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
  return thisVue.httpService.postVo(commandUrl + 'callConfig/save', callConfig, config)
}

// 查询指令下的嵌套指令
function queryNestCommands (commandId, properties = 'orderNo', pageNo = 0, pageSize = 0) {
  const params = {
    id: commandId,
    pageNo: pageNo,
    pageSize: pageSize,
    properties: properties
  }
  return thisVue.httpService.get(commandUrl + 'innerRelation/query', params)
}

// 保存嵌套指令
function saveNestCommand (params = {}) {
  const config = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
  return thisVue.httpService.postVo(commandUrl + 'innerRelation/save', params, config)
}

export default {
  queryCommandsByCategoryId,
  queryByCategoryId,
  queryCommandsByName,
  queryCommandById,
  saveCommand,
  delCommands,
  checkByCommandName,
  queryCategories,
  queryCategoryByPid,
  deleteCategoryById,
  queryAllCategories,
  saveCategory,
  checkByCategoryName,
  queryCallConfigByCommandId,
  saveCallConfig,
  queryNestCommands,
  saveNestCommand
}
