import vue from 'vue'

const thisVue = vue
const thirdSysUrl = '/ai/threeSystems/'

function queryAllSys () {
  return thisVue.httpService.get(thirdSysUrl + 'query')
}

function updateSys (id, address) {
  const data = {
    id: id,
    loginAddress: address
  }
  return thisVue.httpService.post(thirdSysUrl + 'updateLoginAddress', data)
}

export default {
  queryAllSys,
  updateSys
}
