<template>
    <div class="main">
        <a-layout id="components-layout-demo-custom-trigger">
            <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
              <div class="logo">
                  <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
                  <img v-show="collapsed" :src="minLogo" key="min-logo" />
              </div>
              <side-menu :routePageList="routerPages"></side-menu>
            </a-layout-sider>
        <a-layout>
          <a-layout-header style="background: #fff; padding: 0">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
          </a-layout-header>
          <a-layout-content
              :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
              <router-view></router-view>
            </a-layout-content>
          </a-layout>
      </a-layout>
    </div>
</template>
<script>
import store from '@/store'
import { Layout, Icon, Menu } from 'ant-design-vue'
const { Header, Sider, Content } = Layout;
const MenuItem  = Menu.Item
const SubMenu = Menu.SubMenu

import SideMenu from './components/side-menu'

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
    'a-icon': Icon,
    'a-menu': Menu,
    'a-menu-item': MenuItem,
    'a-sub-menu': SubMenu,
    'side-menu': SideMenu
  },
  computed: {
    routerPages () {
      return store.state.user.routeList
    }
  },
  data() {
    return {
      collapsed: false,
      minLogo,
      maxLogo
    };
  },
};
</script>
