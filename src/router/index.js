import Vue from 'vue'
import Router from 'vue-router'

// 异步加载组件
const Layout = r => require.ensure([], () => r(require('@/views/layout')), 'Layout')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
