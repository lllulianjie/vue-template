/**
 * 引入全局资源组件
 * @author lulianjie
 * 2019-04-20
 */

import {
  Button, ButtonGroup,
  DatePicker, Dialog,
  Input,
  Loading,
  Message, MessageBox,
  Option,
  Pagination,
  Select, Switch,
  Table, TableColumn, Tree } from 'element-ui'

function init (Vue) {
  initElementUIComp(Vue)
}

// MessageBox 无法直接通过 Vue.use 引入
function initElementMessageBox (Vue) {
  // 请使用commonUtil.xxx方法代替以下方法
  const MsgBox = MessageBox
  Vue.$msgbox = MsgBox
  Vue.$alert = MsgBox.alert
  Vue.$confirm = MsgBox.confirm
  Vue.$prompt = MsgBox.prompt
}

function initElementMessage (Vue) {
  // 请使用commonUtil.showMsg 方法替代
  Vue.$message = Message
}

function initElementUIComp (Vue) {
  Vue.use(Input)
  Vue.use(Button)
  Vue.use(ButtonGroup)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Tree)
  Vue.use(Dialog)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Switch)
  Vue.use(DatePicker)
  Vue.use(Loading)
  Vue.use(Pagination)
  initElementMessageBox(Vue)
  initElementMessage(Vue)
}

const plugin = {
  install (Vue) {
    init(Vue)
  }
}

export default plugin
