<template>
  <div id="side-menu">
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <template v-for="item in routerList">
            <!-- 当路由信息有子路由是走这一步 -->
            <template v-if="item.children != undefined">
                <side-menu-item :key="`menu-${item.name}`" :menuInfo="item"></side-menu-item>
            </template>
            <!-- 没有走这里 -->
            <template v-else>
                <a-menu-item :name="item.name" :key="`$menu-${item.name}`">
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
import mixin from './mixin'

export default {
  name: 'SideMenu',
  components: {
      'a-menu': Menu,
      'a-menu-item': MenuItem,
      'a-sub-menu': SubMenu,
      'a-icon': Icon,
      SideMenuItem
  },
  mixins: [ mixin],
  data () {
      return {
          routerList : [
              {
                  path: '/name1',
                  name: 'namase1',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  }
              },
              {
                  path: '/name2',
                  name: 'namase2',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  }
              },
              {
                  path: '/name3',
                  name: 'namase3',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  }
              },
              {
                  path: '/name4',
                  name: 'namase4',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  }
              },
              {
                  path: '/name5',
                  name: 'namase5',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  },
                  children: [
                      {
                            path: '/name6',
                            name: 'namase6',
                            meta: {
                                title: '姓名', 
                                icon: 'user'
                            }
                        },
                        {
                            path: '/name7',
                            name: 'namase7',
                            meta: {
                                title: '姓名', 
                                icon: 'user'
                            },
                            children: [{
                                 path: '/name8',
                                    name: 'namase8',
                                    meta: {
                                        title: '姓名', 
                                        icon: 'user'
                                    },
                            }]
                        },
                  ]
              }
          ]
      }
  },
  created () {
        console.log(123, '====')
  },
}
</script>
