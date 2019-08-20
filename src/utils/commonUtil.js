import vue from 'vue'
const thisVue = vue

function groupBy (data, key) {
  let map = {}
  if (!data) {
    return map
  }
  for (let item of data) {
    const subs = map[item[key]]
    if (subs) {
      subs.push(item)
    } else {
      let list = []
      list.push(item)
      map[item[key]] = list
    }
  }
  return map
}

function format2TreeByPid (data, pid) {
  let list = data[pid]
  if (!list) {
    return []
  }
  for (let item of list) {
    item.children = this.format2TreeByPid(data, item.id)
  }
  return list
}

function formatDate (dt) {
  var year = dt.getFullYear()
  var month = twoWord(dt.getMonth() + 1)
  var date = twoWord(dt.getDate())
  var hour = twoWord(dt.getHours())
  var minute = twoWord(dt.getMinutes())
  var second = twoWord(dt.getSeconds())
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
}

function twoWord (str) {
  return str > 9 ? str : '0' + str
}

function dateToString (time) {
  if (!time) {
    return ''
  }
  var t = time.slice(7, 20)
  var newTime = new Date(parseInt(t))
  return formatDate(newTime)
}

var timeoutId = ''
function debounce (callback, delayTime) {
  timeoutId && clearTimeout(timeoutId)
  timeoutId = ''
  timeoutId = setTimeout(() => {
    callback && callback()
  }, delayTime || 500)
}

function isNullObject (obj) {
  if (obj && typeof obj === 'object') {
    return Object.keys(obj).length === 0
  }
  return true
}

function regularExpressionDetected (pattern) {
  return function (str) {
    return pattern.test(str)
  }
}

// var specialCharactersPattern = new RegExp("[`·~!@#$^&*%()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\\s]")
var specialCharactersPattern = new RegExp('[^0-9a-zA-Z\\u4e00-\\u9fa5]')
var hasSpecialCharacters = regularExpressionDetected(specialCharactersPattern)

function arrayItemSwap (arr, index1, index2) {
  arr[index2] = arr.splice(index1, 1, arr[index2])[0]
  return arr
}

function alert (msg, title = '提示', options = {}) {
  let defaultOptions = {
    closeOnClickModal: true,
    closeOnPressEscape: true
  }
  defaultOptions = Object.assign(defaultOptions, options)
  thisVue.$alert(msg, title, defaultOptions).catch(() => {})
}

function prompt (msg, title = '提示', options = {}) {
  let defaultOptions = {
    cancelButtonClass: 'el-button--primary'
  }
  defaultOptions = Object.assign(defaultOptions, options)
  return thisVue.$prompt(msg, title, defaultOptions).catch(() => {})
}

function confirm (msg, options = {}, title = '提示') {
  let defaultOptions = {
    cancelButtonClass: 'el-button--primary'
  }
  defaultOptions = Object.assign(defaultOptions, options)
  return thisVue.$confirm(msg, title, defaultOptions)
}

function showMsg (options) {
  let type = getType(options)
  let defaultOptions = {
    type: 'info',
    message: ''
  }
  if (type === 'string') {
    defaultOptions.message = options
  } else {
    defaultOptions = Object.assign(defaultOptions, options)
  }
  thisVue.$message(defaultOptions)
}

['success', 'warning', 'info', 'error'].forEach(type => {
  showMsg[type] = function (options) {
    let optionsType = getType(options)
    if (optionsType === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return showMsg(options)
  }
})

function getType (val) {
  let type = Object.prototype.toString.call(val)
  return type.substring(8, type.length - 1).toLocaleLowerCase()
}

export default {
  groupBy,
  format2TreeByPid,
  formatDate,
  dateToString,
  twoWord,
  debounce,
  isNullObject,
  hasSpecialCharacters,
  arrayItemSwap,
  getType,
  alert,
  prompt,
  confirm,
  showMsg
}
