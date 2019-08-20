/**
 * 本地缓存工具
 * @author lulianjie
 * 2019-04-20
 */

function set (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function get (key) {
  let value = localStorage.getItem(key)
  return JSON.parse(value)
}

function remove (key) {
  localStorage.removeItem(key)
}

function clear () {
  localStorage.clear()
}

export default {
  set,
  get,
  remove,
  clear
}
