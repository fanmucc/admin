<template>
<component :is="iconType" :type="iconName" :color="iconColor" :size="iconSize" :style="antdIcon"></component>
</template>

<script>
import Icons from '@/components/icons'
import {
    Icon
} from 'ant-design-vue'
export default {
    name: 'CommonIcon',
    components: {
        Icons,
        'a-icon': Icon
    },
    props: {
        type: {
            type: String,
            required: true
        },
        color: String,
        size: Number
    },
    computed: {
        iconType() {
            return this.type.indexOf('_') === 0 ? 'Icons' : 'a-icon'
        },
        iconName() {
            return this.iconType === 'Icons' ? this.getCustomIconName(this.type) : this.type
        },
        iconSize() {
            return this.size || (this.iconType === 'Icons' ? 12 : undefined)
        },
        iconColor() {
            console.log(this.iconSize, 'common-icon颜色')
            return this.color || ''
        },
        antdIcon() {
            return this.iconType === 'Icons' ? {} : {
                fontSize: `${this.size}px`,
                color: this.color
            }
        }
    },
    methods: {
        getCustomIconName(iconName) {
            return iconName.slice(1)
        }
    }
}
</script>
