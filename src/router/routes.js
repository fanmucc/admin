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
                title: 'home',
                icon: 'user'
              },
              component: Home
          }
      ]
    },
    {
      path: '/',
      name: '_about',
      meta: {
        title: '_about',
        icon: 'user'
      },
      component: Main,
      children: [
        {
          path: 'about',
          name: 'about',
          meta: {
            icon: 'user',
            title: 'about'
          },
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
        title: '401',
        icon: 'user'
      },
      meta: {
        hideInMenu: true
      },
      component: () => import(/* webpackChunkName: "401" */'@/views/error-page/401.vue')
    },
    {
      path: '/array',
      name: 'array',
      meta: {
        title: 'array',
        icon: 'user'
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