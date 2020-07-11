import Cookies from 'js-cookie'
import config from '@/config'
export const TOKEN_KEY = 'token'
const { title, cookieExpires } = config
/**
 *  设置和读取token 
 */
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
   const token = Cookies.get(TOKEN_KEY)
   if (token) return token
   else return false
 }

/**
 * @param {String} url
 * @description 从URL中解析参数
 */
export const getParams = url => {
  const keyValueArr = url.split('?')[1].split('&')
  let paramObj = {}
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = keyValue[1]
  })
  return paramObj
}


export const getRouteTitleHandled = (route) => {
    let router = { ...route }
    let meta = { ...route.meta }
    let title = ''
    if (meta.title) {
      if (typeof meta.title === 'function') {
        meta.__titleIsFunction__ = true
        title = meta.title(router)
      } else title = meta.title
    }
    meta.title = title
    router.meta = meta
    return router
}


export const showTitle = (item, vm) => {
    let { title, __titleIsFunction__ } = item.meta
    if (!title) return
    if (useI18n) {
      if (title.includes('{{') && title.includes('}}') && useI18n) title = title.replace(/({{[\s\S]+?}})/, (m, str) => str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim())))
      else if (__titleIsFunction__) title = item.meta.title
      else title = vm.$t(item.name)
    } else title = (item.meta && item.meta.title) || item.name
    return title
}

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
export const setTitle = (routeItem, vm) => {
    const handledRoute = getRouteTitleHandled(routeItem)
    const pageTitle = showTitle(handledRoute, vm)
    // const resTitle = pageTitle ? `${title} - ${pageTitle}` : title
    // window.document.title = resTitle
  }