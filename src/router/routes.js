import Home from '../views/single-page/home'
import Main from '../components/main'
const routes = [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import(/* webpackChunkName: "login" */ '../views/login')
    },
    {
      path: '/',
      name: '_home',
      meta: {
        title: '_home',
        icon: 'user'
      },
      redirect: '/home',
      component: Main,
      children: [
          {
              path: 'home',
              name: 'home',
              meta: {
                title: '首页',
                icon: 'user'
              },
              component: Home
          }
      ]
    },
    {
      path: '/401',
      name: 'error_401',
      meta: {
        title: '401',
        icon: 'user'
      },
      meta: {
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "401" */'@/views/error-page/401.vue')
    },
    {
      path: '/500',
      name: 'error_500',
      meta: {
        title: '500',
        icon: 'user',
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "500" */'@/views/error-page/500.vue')
    },
    {
      path: '*',
      name: 'error_404',
      meta: {
        title: '404',
        icon: 'user',
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "404" */'@/views/error-page/404.vue')
    }
]
const authority = [
  //
]
export default routes