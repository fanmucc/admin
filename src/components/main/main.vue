<template>
<div class="main">
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <div class="logo">
                <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
                <img v-show="collapsed" :src="minLogo" key="min-logo" />
            </div>
            <side-menu theme="dark" mode="inline" :default-selected-keys="defaultSelectKeys" :SelectKeys="SelectKeys" :routePageList="routerPages" @on-side-menu="handleSideMenu"></side-menu>
        </a-layout-sider>
        <a-layout>
            <a-header class="header-con" :style="{height: heightBarStyle}">
                <header-bar :collapsed="collapsed" @on-coll-change="handleCollapsedChange" style="background: #fff; padding: 0"></header-bar>
            </a-header>
            <Content class="main-content-con">
                <a-layout-content class="main-layout-con">
                    <!-- <div class="tag-nav-wrapper">
                  <tags-nav :value="$route" :list="tagNavList" @input="handleClick"/>
                </div> -->
                    <router-view></router-view>
                </a-layout-content>
            </Content>
        </a-layout>
    </a-layout>
</div>
</template>

<script>
import store from '@/store'
import config from '@/config'
const {
    homeName,
    heightBar
} = config
import {
    getNewTagList,
    routeEqual
} from '@/libs/util'
import {
    mapMutations
} from 'vuex'
import routers from '@/router/routes'
import {
    Layout,
    Icon,
    Menu
} from 'ant-design-vue'
const {
    Header,
    Sider,
    Content
} = Layout;
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import TagsNav from './components/tags-nav'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import './main.less'

export default {
    name: 'Main',
    components: {
        'a-layout': Layout,
        'a-layout-sider': Sider,
        'a-layout-header': Header,
        'a-layout-content': Content,
        'a-header': Header,
        'a-icon': Icon,
        'a-menu': Menu,
        'a-menu-item': MenuItem,
        'a-sub-menu': SubMenu,
        'header-bar': HeaderBar,
        'side-menu': SideMenu,
        TagsNav
    },
    computed: {
        routerPages() {
            return store.state.user.routeList
        },
        defaultSelectKeys() {
            return [`${homeName}`]
        },
        tagNavList() {
            return this.$store.state.app.tagNavList
        },
        heightBarStyle() {
            return `${heightBar}px !important`
        }
    },
    data() {
        return {
            collapsed: false,
            minLogo,
            maxLogo,
            SelectKeys: []
        };
    },
    methods: {
        ...mapMutations([
            'setBreadCrumb',
            'setHomeRoute',
            'addTag',
        ]),
        turnToPage(route) {
            let {
                name,
                params,
                query
            } = {}
            if (typeof route === 'string') name = route
            else {
                name = route.name
                params = route.params
                query = route.query
            }
            if (name.indexOf('isTrunByHref_') > -1) {
                window.open(name.split('-')[1])
                return
            }
            this.$router.push({
                name,
                params,
                query
            })
        },
        handleCollapsedChange(state) {
            this.collapsed = state
        },
        handleSideMenu(state) {
            console.log(state)
            this.turnToPage(state)
        },
        // tags事件
        handleClick(item) {
            this.turnToPage(item)
        }
    },
    mounted() {
        /**
         * @description 初始化设置面包屑和标签导航
         */
        const {
            name,
            query,
            params,
            meta
        } = this.$route

        // tags
        this.addTag({
            route: {
                name,
                query,
                params,
                meta
            }
        })

        // 面包屑
        this.SelectKeys = [`${name}`]
        this.setHomeRoute(routers)
        this.setBreadCrumb(this.$route)

    },
    // 监听路由变化 进行tags标签渲染 和 面包屑设置
    watch: {
        '$route'(newRoute) {
            const {
                name,
                query,
                params,
                meta
            } = newRoute
            // tags
            this.addTag({
                route: {
                    name,
                    query,
                    params,
                    meta
                },
                type: 'push'
            })
            // 面包屑
            this.setBreadCrumb(newRoute)
            this.SelectKeys = [this.$route.name]

        }
    }
};
</script>
