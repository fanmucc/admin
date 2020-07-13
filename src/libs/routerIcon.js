/**
 * 动态渲染侧边栏icon
 * 引用router路由列表进行匹配icon如果没有则返回自定义的icon
 */
import route from '@/router/routes'

const routerMenuIcon = (name, list, icon) => {
    for (let value of list) {
        if (value.children) {
            routerMenuIcon(name, value.children)
        } else {
            if (value.name === name) return value.mate.icon
            else return icon
        }
    }
}

 export const routeIcon = (name) => {
    let icon = ''
    switch (name) {
        case 'home':
            icon = routerMenuIcon(name, route, 'user')
            break;
        default: 
            return ''
    }
    return icon
 }