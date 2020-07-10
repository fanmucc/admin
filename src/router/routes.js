import Home from '../views/Home.vue'
import Main from '../components/main'
const routes = [
    {
      path: '/',
      name: 'Home',
      redirect: '/home',
      component: Main,
      children: [
          {
              path: '/home',
              name: '_Home',
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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login')
    }
]
const authority = [
  //
]
export default routes