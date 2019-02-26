import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Info1 from './views/Info1.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Add from './views/Add.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // 路由被激活时添加class
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
        },
        {
          path: '/home/user',
          name: 'user',
          component: () => import(/* webpackChunkName: "name" */ './views/User.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/info1',
      name: 'info1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Info1
    }
  ]
})
