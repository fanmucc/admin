import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

import { getToken, setTitle } from '@/libs/util'
import config from '@/config'
import store from '../store'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const LOGIN_PATH_NAME = 'login'
const { homeName } = config
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (!token && to.name !== LOGIN_PATH_NAME) {
    // 未登录切跳转的页面不是登录页
    next({
      name: LOGIN_PATH_NAME
    })
  } else if (!token && to.name === LOGIN_PATH_NAME) {
    // 未登录且跳转的页面为登录页
    next()
  } else if (token && to.name === LOGIN_PATH_NAME) {
    // 已经登录且跳转的页面为登录页
    next({
      name: homeName
    })
  } else {
    if (!store.state.user.getRouteStatus) {
      // 如果路由表数据为false，则重新拉去用户信息
      store.dispatch('getUserInfo').then(user => {
        console.log('---')
        next()
      }).catch(() => {
        // 说明通过token登录发生错误，token 过期则跳转到登录页
        setToken('')    // 清空token
        next({
          name: LOGIN_PATH_NAME
        })
      })
    } else {
      next()
    }
  } 
})


// router.afterEach((to, next) => {
//   setTitle(to, router.app)
//   // iView.LoadingBar.finish()
//   window.scrollTo(0, 0)
//   next()
// })


export default router
