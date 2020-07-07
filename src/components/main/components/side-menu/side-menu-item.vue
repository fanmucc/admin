<template functional>
    <a-sub-menu key="sub2">
        <!-- <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <template v-for="item in parentItem.children">
            <template v-if="item.children != undefined">
                <side-menu-item :key="`menu-${item.name}`" :parent-item="item.children"></side-menu-item>
            </template>
            <template v-else>
                <a-menu-item :key="`menu-${item.name}`"><span>123</span></a-menu-item>
            </template>
        </template> -->
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
    </a-sub-menu>
</template>
<script>
import { Menu, Icon} from 'ant-design-vue'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

import mixin from './mixin'
import itemMixin from './item-mixin'
export default {
    name: 'SideMenuItem',
    mixins: [ mixin, itemMixin ],
    components: {
        'a-sub-menu': SubMenu,
        'a-menu-item': MenuItem,
        'a-icon': Icon
    }
}
</script>