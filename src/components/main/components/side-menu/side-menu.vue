<template>
<div id="side-menu">
    <a-menu :theme="theme" :mode="mode" :open-keys="openKeys" :defaultSelectedKeys="[`${this.$route.name}`]" :selectedKeys="[`${this.$route.name}`]" @click="handleClick" @openChange="sideMenu">
        <template v-for="item in routePageList">
            <!-- 当路由信息有子路由是走这一步 -->
            <template v-if="item.children != undefined">
                <side-menu-item :key="`${item.name}`" :menuInfo="item"></side-menu-item>
            </template>
            <!-- 没有走这里 -->
            <template v-else>
                <a-menu-item :name="item.name" :key="`${item.name}`">
                    <a-icon :type="item.meta.icon" />
                    <span>{{item.meta.title}}</span>
                </a-menu-item>
            </template>
        </template>
    </a-menu>
</div>
</template>

<script>
import {
    Icon,
    Menu
} from 'ant-design-vue'
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

import SideMenuItem from './side-menu-item.vue'

export default {
    name: 'SideMenu',
    components: {
        'a-menu': Menu,
        'a-menu-item': MenuItem,
        'a-sub-menu': SubMenu,
        'a-icon': Icon,
        SideMenuItem
    },
    props: {
        routePageList: {
            type: Array,
            default: () => []
        },
        theme: {
            type: String,
            default: 'dark'
        },
        mode: {
            type: String,
            default: 'inline'
        }
    },
    data() {
        return {
            openKeys: window.sessionStorage.getItem('openKeys') !== " " ? JSON.parse(window.sessionStorage.getItem('openKeys')) : []
        }
    },
    created() {},
    methods: {
        handleClick(e) {
            if (e.keyPath[e.keyPath.length - 1] !== this.openKeys[0]) this.openKeys = []
            window.sessionStorage.setItem('openKeys', JSON.stringify(this.openKeys))
            this.$emit('on-side-menu', e.key)
        },
        sideMenu(e) {
            console.log(e, '====')
            if (this.openKeys.length === 0) {
                // openKeys 为空时直接进行展开
                this.openKeys = e
            } else {
                // 不为空时
                const lastOpenKey = e.find(key => this.openKeys.indexOf(key) === -1);
                if (this.$route.path === lastOpenKey) {
                    // 如果当前路由 === 
                    this.openKeys = e
                } else {
                    this.openKeys = lastOpenKey ? [lastOpenKey] : []
                }
            }
            window.sessionStorage.setItem('openKeys', JSON.stringify(this.openKeys))
        }
    }
}
</script>
