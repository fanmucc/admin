<template functional>
    <a-sub-menu key="sub2">
        <span slot="title">
            <a-icon
            :type="data.attrs.menuInfo.meta.icon"
            v-if="data.attrs.menuInfo.meta.icon" />
            {{data.attrs.menuInfo.meta.title}}
        </span>
        <template v-for="item in data.attrs.menuInfo.children">
            <a-menu-item v-if="!item.children" :key="item.path">
                <router-link :to="{ path: item.path }">
                <a-icon :type="item.meta.icon" v-if="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                </router-link>
            </a-menu-item>
            <side-menu-item v-else :menuInfo="item" :key="item.path" />
        </template>
    </a-sub-menu>
</template>
