<template>
  <div id="side-menu">
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <template v-for="item in routerList">
            <!-- 当路由信息有子路由是走这一步 -->
            <template v-if="item.children != undefined">
                <side-menu-item :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
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
console.log(Menu)
const MenuItem  = Menu.Item
const SubMenu = Menu.SubMenu

import SideMenuItem from './side-menu-item'
import mixin from './mixin'

// const SideMenuItem = {
//     name: 'SideMenuItem',
//     props: {
//         ParentItem: {
//             type: Object,
//             default: () => {}
//         }
//     },
//     components: {
//     },
//     data () {
//         return {

//         }
//     },
//     render () {
//         return (
//             <template functional>
//                     <a-sub-menu key="sub2">
//                     <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
//                     <a-menu-item key="5">
//                     Option 5
//                     </a-menu-item>
//                     <a-menu-item key="6">
//                     Option 6
//                     </a-menu-item>
//                     <a-sub-menu key="sub3" title="Submenu">
//                     <a-menu-item key="7">
//                         Option 7
//                     </a-menu-item>
//                     <a-menu-item key="8">
//                         Option 8
//                     </a-menu-item>
//                     </a-sub-menu>
//                 </a-sub-menu>
//             </template>
//         )
//     }
// }

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
                            name: 'namase7',
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
