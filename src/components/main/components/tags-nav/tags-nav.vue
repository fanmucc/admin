<template>
    <div class="tags-nav">
        <div class="close-con">
            <a-dropdown placement="bottomCenter">
                <a-button class="close-btn">
                    <a-icon type="close-circle" />
                </a-button>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <span>关闭其他</span>
                    </a-menu-item>
                    <a-menu-item>
                        <span>关闭所有</span>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
        <ul v-show="visible" :style="{left: contextMenuLeft + 'px', top: contextMenuTop + 'px'}" class="contextmenu">
            <li v-for="(item, key) of menuList" :key="key">{{item}}</li>
        </ul>
        <div class="btn-con left-btn">
            <a-button style="border: none">
                <a-icon :size="18" type="left" />
            </a-button>
        </div>
        <div class="btn-con right-btn">
            <a-button style="border: none">
                <a-icon :size="18" type="right" />
            </a-button>
        </div>
        <div class="scroll-outer" ref="scrollOuter">
            <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
                <transition-group name="taglist-moving-animation">
                    <a-tag 
                        closable 
                        v-for="(item, index) in list"
                        :key="`tag-nav-${index}`"
                        :name="item.name"
                        :data-route-item="item"
                        @click.native="handleClick(item)"
                        style="padding: 4px 10px;">
                    {{showTitleInside(item)}}</a-tag>
                </transition-group>
            </div>
        </div>
    </div>
</template>
<script>
import { Dropdown, Button, Icon, Menu, Tag, List } from 'ant-design-vue';
import { showTitle, routeEqual } from '@/libs/util'
import './tags-nav.less'
const MenuItem = Menu.Item
export default {
    name: 'TagsNav',
    props: {
        value: Object,
        list: {
            type: Array,
            default () {
                return []
            }
        }
    },
    components: {
        'a-dropdown': Dropdown,
        'a-button': Button,
        'a-icon': Icon,
        'a-menu': Menu,
        'a-menu-item': MenuItem,
        'a-tag': Tag
    },
    data () {
        return {
            visible: false,
            contextMenuLeft: 0,
            contextMenuTop: 0,
            tagBodyLeft: 0,
            menuList: {
                others: '关闭其他',
                all: '关闭所有'
            }
        }
    },
    computed: {

    },
    mounted () {

    },
    methods: {
        showTitleInside (item) {
            return showTitle(item, this)
        },
        handleClick(item) {
            this.$emit('input', item)
        }
    }
}
</script>