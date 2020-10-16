<template>
<a-dropdown class="dropdown-user">
    <div>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <a-icon type="caret-down" />
    </div>
    <a-menu slot="overlay">
        <a-menu-item key="0" @click="signOut">
            退出登录
        </a-menu-item>
    </a-menu>
</a-dropdown>
</template>

<script>
import {
    Dropdown,
    Menu,
    Icon,
    Avatar
} from 'ant-design-vue'
import {
    mapMutations
} from 'vuex';
const MenuItem = Menu.Item
export default {
    name: 'DropdownUser',
    components: {
        'a-dropdown': Dropdown,
        'a-menu': Menu,
        'a-menu-item': MenuItem,
        'a-icon': Icon,
        'a-avatar': Avatar
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        ...mapMutations('user', [
            'setToken'
        ]),
        // 退出登录 清空cookie
        signOut() {
            this.setToken(''); // 清除token
            // 跳转
            this.$router.push({
                name: 'login'
            })
        }
    },
}
</script>
