<template>
<div class="custom-bread-crumb">
    <a-breadcrumb class="a-custom-bread-crumb">
        <a-breadcrumb-item class="breadcrumb-hover" v-for="item in list" :key="`bread-crumb-${item.name}`" @click.native="routerToHome(item.name)">{{ showTitle(item) }}</a-breadcrumb-item>
    </a-breadcrumb>
</div>
</template>

<script>
import './custom-bread-crumb.less'
import {
    Breadcrumb
} from 'ant-design-vue'
import {
    showTitle
} from '@/libs/util'
const BreadcrumbItem = Breadcrumb.Item
export default {
    name: 'customBreadCrumb',
    components: {
        'a-breadcrumb': Breadcrumb,
        'a-breadcrumb-item': BreadcrumbItem
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        showTitle(item) {
            return showTitle(item, this)
        },
        routerToHome(event) {
            if (event === 'home') this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>
