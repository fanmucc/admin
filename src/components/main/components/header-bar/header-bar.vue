<template>
    <div class="header-bar">
        <sider-trigger :collapsed="collapsed" @on-change="handleCollpasedChange"></sider-trigger>
        <custom-bread-crumb :list="breadCrumbList"></custom-bread-crumb>
    </div>
</template>
<script>
import { Icon } from 'ant-design-vue'
import siderTrigger from './sider-trigger'
import customBreadCrumb from './custom-bread-crumb'
import './header-bar.less'
export default {
    name: 'HeaderBar',
    components: {
        'a-icon': Icon,
        siderTrigger,
        customBreadCrumb
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        breadCrumbList () {
            return this.$store.state.app.breadCrumbList
        }
    },
    methods: {
        handleCollpasedChange (state) {
            this.$emit('on-coll-change', state)
        }
    }
}
</script>