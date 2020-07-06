<template>
  <div id="side-menu">
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <template v-for="item in routerList">
            <!-- 当路由信息有子信息是走这一步 -->
            <template v-if="item.children && item.children.length === 1">
                <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
            </template>
            <!-- 没有走这里 -->
            <template v-else>
                <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
                <a-menu-item v-else :name="getNameOrHref(item)"  :key="`$menu-${item.name}`">
                    <a-icon :type="item.meta.icon" />
                    <span>{{item.meta.title}}</span>
                </a-menu-item> 
            </template>
        </template>
        <!-- <a-menu-item v-for="(item, index) in routerList" :key="index">
            <a-icon :type="item.meta.icon" />
            <span>{{item.meta.title}}</span>
        </a-menu-item> -->
        <!-- <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
            <a-menu-item key="9">
            Option 9
            </a-menu-item>
            <a-menu-item key="10">
            Option 10
            </a-menu-item>
            <a-menu-item key="11">
            Option 11
            </a-menu-item>
            <a-menu-item key="12">
            Option 12
            </a-menu-item>
        </a-sub-menu> -->
    </a-menu>
  </div>
</template>

<script>
import { Menu, Icon} from 'ant-design-vue'
const MenuItem  = Menu.Item
const SubMenu = Menu.SubMenu

import SideMenuItem from './side-menu-item'
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
                  path: '/name',
                  name: 'namase1',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  }
              },
              {
                  path: '/name',
                  name: 'namase2',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  }
              },
              {
                  path: '/name',
                  name: 'namase3',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  }
              },
              {
                  path: '/name',
                  name: 'namase4',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  }
              },
              {
                  path: '/name',
                  name: 'namase5',
                  meta: {
                      title: '姓名', 
                      icon: 'user'
                  },
                  children: [
                      {
                            path: '/name',
                            name: 'namase6',
                            meta: {
                                title: '姓名', 
                                icon: 'user'
                            }
                        },
                        {
                            path: '/name',
                            meta: {
                                title: '姓名', 
                                icon: 'user'
                            }
                        },
                  ]
              }
          ]
      }
  }
}
</script>
