import {
    getBreadCrumbList,
    getHomeRoute
} from '@/libs/util'
import config from '@/config'
const { homeName } = config
const state = {
    breadCrumbList: [],
    homeRoute: {},
}
const mutations = {
    setBreadCrumb (state, route) {
        state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
    setHomeRoute (state, routes) {
        state.homeRoute = getHomeRoute(routes, homeName) 
    },
}
const actions = {

}
export default {
    state,
    mutations,
    actions
}