<template>
    <a-layout-header>
        <sider-trigger :collapsed="collapsed" @on-change="handleCollpasedChange"></sider-trigger>
    </a-layout-header>
</template>
<script>
import { Layout, Icon } from 'ant-design-vue'
import siderTrigger from './sider-trigger'
const Header = Layout.Header
export default {
    name: 'HeaderBar',
    components: {
        'a-layout-header': Header,
        'a-icon': Icon,
        siderTrigger
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleCollpasedChange (state) {
            this.$emit('on-coll-change', state)
        }
    }
}
</script>