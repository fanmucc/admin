<template>
  <div id="side-menu">
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @click="handleClick">
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
import { Icon, Menu } from 'ant-design-vue'
const MenuItem  = Menu.Item
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
      }
  },
  data () {
      return {
      }
  },
  created () {
  },
  methods: {
      handleClick (e) {
          console.log(e.key)
          this.$router.push({
              name: e.key
          })
      }
  }
}
</script>
