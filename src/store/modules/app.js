import {
    getBreadCrumbList,
    getHomeRoute,
    getRouteTitleHandled,
    routeHasExist,
    setTagNavListInLocalstorage
} from '@/libs/util'
import config from '@/config'
const { homeName } = config
const state = {
    breadCrumbList: [],  // 面包屑
    homeRoute: {},       // 初始化路由
    tagNavList: []       // tags数组
}
const mutations = {
    setBreadCrumb (state, route) {
        state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
    setHomeRoute (state, routes) {
        state.homeRoute = getHomeRoute(routes, homeName) 
    },
    addTag (state, { route, type = 'unshift'}) {
        let router = getRouteTitleHandled(route)
        if(!routeHasExist(state.tagNavList, router)) {
            if (type === 'push') state.tagNavList.push(router)
            else {
                if (router.name === homeName) state.tagNavList.unshift(router)
                else state.tagNavList.splice(1, 0, router)
            }
            setTagNavListInLocalstorage([...state.tagNavList])
        }
    }
}
const actions = {

}
export default {
    state,
    mutations,
    actions
}