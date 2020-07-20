<template functional>
    <a-sub-menu :key="data.attrs.menuInfo.name">
        <span slot="title">
            <a-icon
            :type="data.attrs.menuInfo.meta.icon"
            v-if="data.attrs.menuInfo.meta.icon" />
            <span>{{data.attrs.menuInfo.meta.title}}</span>
        </span>
        <template v-for="item in data.attrs.menuInfo.children">
            <a-menu-item v-if="!item.children" :key="item.name">
                <a-icon :type="item.meta.icon" v-if="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
            </a-menu-item>
            <side-menu-item v-else :menuInfo="item" :key="item.name" />
        </template>
    </a-sub-menu>
</template>
