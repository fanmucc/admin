import Home from '../views/Home.vue'
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
      redirect: '/home',
      component: Main,
      children: [
          {
              path: '/home',
              name: 'home',
              component: Home
          }
      ]
    },
    {
      path: '/',
      name: '_about',
      redirect: '/home',
      component: Main,
      children: [
        {
          path: 'about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
      ]
    },
    {
      path: '/401',
      name: 'error_401',
      meta: {
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "401" */'@/views/error-page/401.vue')
    },
    {
      path: '/array',
      name: 'array',
      meta: {
        title: 'array'
      },
      children: [
        {
          path: 'list',
          name: 'list',
          meta: {
            title: 'list',
            icon: 'user'
          },
          component: () => import(/*webpckChunkName: "list"*/ '@/views/list.vue')
        }
      ]
    },
    {
      path: '/500',
      name: 'error_500',
      meta: {
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "500" */'@/views/error-page/500.vue')
    },
    {
      path: '*',
      name: 'error_404',
      meta: {
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "404" */'@/views/error-page/404.vue')
    }
]
const authority = [
  //
]
export default routes