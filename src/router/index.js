import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '../components/Main'
import Content from '../components/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 路由路径，表示当请求path的时候跳转到
      path: '/',
      name: 'HelloWorld',
      // 请求组件
      component: HelloWorld
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/main',
      name: 'content',
      component: Main
    }
  ]
})
