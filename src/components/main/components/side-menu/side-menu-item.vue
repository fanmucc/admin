<template>
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
    <a-sub-menu :name="`${parentName}`">
        <template v-for="item in children">
            <template v-if="item.children && item.children.length === 1">
                <a-sub-menu v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></a-sub-menu>
                <a-menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><span>123</span></a-menu-item>
            </template>
            <template v-else>
                <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
                <a-menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><span>123</span></a-menu-item>
            </template>
        </template>
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