import {
    login,
    logout,
    getUserInfo,
    getMessage,
    getContentByMsgId,
    hasRead,
    removeReaded,
    restoreTrash,
    getUnreadCount
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

const state = {
    loginStatus: false,         // 登录状态
    userName: '',               // 用户名称
    userId: '',
    avatarImgPath: '',
    token: getToken(),
    hasGetInfo: false,
    unreadCount: 0,
    messageUnreadList: [],
    messageReadedList: [],
    messageTrashList: [],
    messageContentStore: {},
    routeList: [],               // 用户能够访问的路由信息
    getRouteStatus: false        // 判断是否获取到了用户的路由信息8
}
const mutations = {
    setAvatar (state, avatarPath) {
        state.avatarImgPath = avatarPath
    },
    setUserId (state, id) {
        state.userId = id
    },
    setUserName (state, name) {
        state.userName = name
    },
    setAccess (state, access) {
        state.access = access
    },
    setToken (state, token) {
        state.token = token
        setToken(token)
    },
    setHasGetInfo (state, status) {
        state.hasGetInfo = status
    },
    setRouteList (state, routerList) {
        state.routeList = routerList
        state.getRouteStatus = true
    },
    setMessageCount (state, count) {
        state.unreadCount = count
    },
    setMessageUnreadList (state, list) {
        state.messageUnreadList = list
    },
    setMessageReadedList (state, list) {
        state.messageReadedList = list
    },
    setMessageTrashList (state, list) {
        state.messageTrashList = list
    },
    updateMessageContentStore (state, { msg_id, content }) {
        state.messageContentStore[msg_id] = content
    },
    moveMsg (state, { from, to, msg_id }) {
        const index = state[from].findIndex(_=>_.msg_id === msg_id)
        const msgItem = state[from].splice(index, 1)[0]
        msgItem.loading = false
        state[to].unshift(msgItem)
    }
}
const getters = {
    messageUnreadCount: state => state.messageUnreadList.length,
    messageReadedCount: state => state.messageReadedList.length,
    messageTrashCount: state => state.messageTrashList.length
}
const actions = {
    // handler 命令空间全局注册action
    // 登录
    handleLogin: {
        root: true,
        handler ({ commit }, { userName, password }) {
            userName = userName.trim()
            return new Promise((resolve, reject) => {
                login({
                    userName,
                    password
                }).then(res => {
                    const data = res.data
                    commit('setToken', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
    // 获取用户相关信息
    getUserInfo: {
        root: true,
        handler({ state, commit}) {
            return new Promise((resolve, reject) => {
                try {
                    getUserInfo(state.token).then(res => {
                        const data = res.data
                        commit('setAvatar', data.avatar)
                        commit('setUserName', data.name)
                        commit('setUserId', data.user_id)
                        commit('setAccess', data.access)
                        commit('setHasGetInfo', true)
                        commit('setRouteList', data.routerPages)
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}