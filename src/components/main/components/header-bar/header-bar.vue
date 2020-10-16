<template>
<div class="header-bar">
    <sider-trigger class="custom-content-con sider-icon" :collapsed="collapsed" @on-change="handleCollpasedChange"></sider-trigger>
    <!-- <custom-bread-crumb :list="breadCrumbList"></custom-bread-crumb> -->
    <custom-bread-crumb class="custom-content-con" :list="breadCrumbList"></custom-bread-crumb>
    <dropdown-user class="custom-content-con-right"></dropdown-user>
</div>
</template>

<script>
import {
    Icon
} from 'ant-design-vue'
import siderTrigger from './sider-trigger'
import customBreadCrumb from './custom-bread-crumb'
import DropdownUser from './dropdown-user/dropdown-user'
import './header-bar.less'
export default {
    name: 'HeaderBar',
    components: {
        'a-icon': Icon,
        siderTrigger,
        customBreadCrumb,
        DropdownUser
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        breadCrumbList() {
            return this.$store.state.app.breadCrumbList
        }
    },
    methods: {
        handleCollpasedChange(state) {
            this.$emit('on-coll-change', state)
        }
    }
}
</script>
