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
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]
const authority = [
  //
]
export default routes