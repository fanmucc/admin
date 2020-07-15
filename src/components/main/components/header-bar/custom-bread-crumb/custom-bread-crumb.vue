<template>
    <div class="custom-bread-crumb">
        <a-breadcrumb class="a-custom-bread-crumb">
            <a-breadcrumb-item v-for="item in list" :key="`bread-crumb-${item.name}`">Home</a-breadcrumb-item>
                {{ showTitle(item) }}
            <BreadcrumbItem >
      </BreadcrumbItem>
        </a-breadcrumb>
    </div>
</template>
<script>
import './custom-bread-crumb.less'
import { Breadcrumb } from 'ant-design-vue'
import { showTitle } from '@/libs/util'
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
        showTitle (item) {
            return showTitle(item, this)
        },
    }
}
</script>