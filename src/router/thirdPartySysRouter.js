export default [
  {
    path: '/thirdPartySys',
    name: 'thirdPartySys',
    component: resolve => require(['@/modules/thirdPartySys/thirdPartySys'], resolve) // 实现懒加载
  }
]
