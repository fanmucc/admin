<template>
<div class="home">
    <a-row :gutter="20">
        <a-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
            <info-card hoverable :color="infor.color" :icon="infor.icon" :icon-size="36">
                <count-to :end="infor.count" count-class="count-style" />
                <p style="margin-top: -5px;">{{ infor.title }}</p>
            </info-card>
        </a-col>
    </a-row>
    <a-row :gutter="20">
        <a-col :md="24" :lg="8" style="padding-bottom: 10px;">
            <a-card hoverable>
                <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>
            </a-card>
        </a-col>
        <a-col :md="24" :lg="16" style="padding-bottom: 10px;">
            <a-card hoverable>
                <chart-bar style="height: 300px;" :value="barData" text="每周用户活跃量" />
            </a-card>
        </a-col>
    </a-row>
    <a-row>
        <a-card hoverable>
            <example style="height: 310px;" />
        </a-card>
    </a-row>
</div>
</template>

<script>
import {
    Button,
    Row,
    Col,
    Card
} from 'ant-design-vue'
import CountTo from '../../../components/count-to';
import InfoCard from '@/components/info-card'
import {
    ChartPie,
    ChartBar
} from '@/components/charts'
import Example from './example.vue'
export default {
    name: 'Home',
    components: {
        'a-button': Button,
        'a-row': Row,
        'a-col': Col,
        'a-card': Card,
        InfoCard,
        CountTo,
        ChartPie,
        ChartBar,
        Example
    },
    data() {
        return {
            inforCardData: [{
                    title: '新增用户',
                    icon: 'user-add',
                    count: 803,
                    color: '#2d8cf0'
                },
                {
                    title: '累计点击',
                    icon: 'like',
                    count: 232,
                    color: '#19be6b'
                },
                {
                    title: '新增问答',
                    icon: 'question',
                    count: 142,
                    color: '#ff9900'
                },
                {
                    title: '分享统计',
                    icon: 'container',
                    count: 657,
                    color: '#ed3f14'
                },
                {
                    title: '新增互动',
                    icon: 'message',
                    count: 12,
                    color: '#E46CBB'
                },
                {
                    title: '新增页面',
                    icon: 'read',
                    count: 14,
                    color: '#9A66E4'
                }
            ],
            pieData: [{
                    value: 335,
                    name: '直接访问'
                },
                {
                    value: 310,
                    name: '邮件营销'
                },
                {
                    value: 234,
                    name: '联盟广告'
                },
                {
                    value: 135,
                    name: '视频广告'
                },
                {
                    value: 1548,
                    name: '搜索引擎'
                }
            ],
            barData: {
                Mon: 13253,
                Tue: 34235,
                Wed: 26321,
                Thu: 12340,
                Fri: 24643,
                Sat: 1322,
                Sun: 1324
            }
        }
    },
    methods: {
        handleClickToAbout() {
            console.log(111)
            this.$router.push({
                name: 'about'
            })
        }
    }
}
</script>

<style lang="less">
.count-style {
    font-size: 50px;
}
</style>
