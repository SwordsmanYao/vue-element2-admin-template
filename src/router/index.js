import Vue from 'vue'
import Router from 'vue-router'

// 异步加载组件
const Layout = r => require.ensure([], () => r(require('@/views/layout')), 'Layout')
const DemoForm = r => require.ensure([], () => r(require('@/views/demo/form')), 'DemoForm')
const DemoList = r => require.ensure([], () => r(require('@/views/demo/list')), 'DemoList')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Layout'
    }, {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'DemoList',
          name: 'DemoList',
          component: DemoList
        }, {
          path: 'DemoForm',
          name: 'DemoForm',
          component: DemoForm
        }
      ]
    }
  ]
})
