<template>
    <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="handleChange"
    />
</template>
<script>
import { Icon } from 'ant-design-vue'
export default {
    name: 'siderTrigger',
    components: {
        'a-icon': Icon
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleChange () {
            this.$emit('on-change', !this.collapsed)
        }
    }
}
</script>