<template>
<a-card :hoverable="hoverable" class="info-card-wrapper">
    <div class="content-con">
        <div class="left-area" :style="{background: color, width: leftWidth}">
            <common-icon class="icon" :type="icon" :size="iconSize" color="#fff" />
        </div>
        <div class="right-area" :style="{width: rightWidth}">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</a-card>
</template>

<script>
import {
    Card,
} from 'ant-design-vue'
import CommonIcon from '@/components/common-icon'
export default {
    name: 'InfoCard',
    components: {
        'a-card': Card,
        CommonIcon
    },
    props: {
        left: {
            type: Number,
            default: 36
        },
        color: {
            type: String,
            default: '#2d8cf0'
        },
        icon: {
            type: String,
            default: ''
        },
        iconSize: {
            type: Number,
            default: 20
        },
        hoverable: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        leftWidth() {
            return `${this.left}%`
        },
        rightWidth() {
            return `${100 - this.left}%`
        }
    },
    methods: {
        handleClickToAbout() {
            this.$router.push({
                name: 'about'
            })
        }
    }
}
</script>

<style lang="less">
.common {
    float: left;
    height: 100%;
    display: table;
    text-align: center;
}

.size {
    width: 100%;
    height: 100%;
}

.middle-center {
    display: table-cell;
    vertical-align: middle;
}

.info-card-wrapper {
    .size;
    overflow: hidden;
    border-radius: 5px;

    .ant-card-body {
        .size;
        padding: 0;
    }

    .content-con {
        .size;
        position: relative;

        .left-area {
            .common;

            &>.icon {
                .middle-center;
            }
        }

        .right-area {
            .common;

            &>div {
                .middle-center;
            }
        }
    }
}
</style>
