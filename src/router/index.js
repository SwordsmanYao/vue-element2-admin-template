import Vue from 'vue'
import Router from 'vue-router'

// 异步加载组件
const Layout = r => require.ensure([], () => r(require('@/views/layout')), 'Layout')
const Login = r => require.ensure([], () => r(require('@/views/login')), 'Login')

const DemoForm = r => require.ensure([], () => r(require('@/views/demo/form')), 'DemoForm')
const DemoList = r => require.ensure([], () => r(require('@/views/demo/list')), 'DemoList')

Vue.use(Router)

export default new Router({
  // 设置被点击路由的class，如果不设置也可以用提供的 router-link-exact-active
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      redirect: '/Layout'
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'DemoList',
          name: 'DemoList',
          component: DemoList,
          meta: {
            title: '演示列表'
          }
        }, {
          path: 'DemoForm',
          name: 'DemoForm',
          component: DemoForm,
          meta: {
            title: '演示表单'
          }
        }
      ]
    }
  ]
})
