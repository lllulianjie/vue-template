export default [
  {
    path: '/commandList',
    name: 'command',
    component: (resolve) => require(['@/modules/command/commandList'], resolve), // 实现懒加载
    children: [
      {
        path: 'callCommandConfig',
        name: 'callCommandConfig',
        component: (resolve) => require(['@/modules/command/callCommandConfig'], resolve) // 实现懒加载
      },
      {
        path: 'nestCommandConfig',
        name: 'nestCommandConfig',
        component: (resolve) => require(['@/modules/command/nestCommandConfig'], resolve) // 实现懒加载
      }
    ]
  }
]
