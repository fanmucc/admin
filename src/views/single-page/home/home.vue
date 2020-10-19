<template>
<div class="home">
    <a-row :gutter="20">
        <a-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
            <info-card hoverable :color="infor.color" :icon="infor.icon" :icon-size="36">
                <p>{{ infor.title }}</p>
            </info-card>
        </a-col>
    </a-row>
    <a-button @click="handleClickToAbout">跳转</a-button>
</div>
</template>

<script>
import {
    Button,
    Row,
    Col
} from 'ant-design-vue'
import InfoCard from '@/components/info-card'
export default {
    name: 'Home',
    components: {
        'a-button': Button,
        'a-row': Row,
        'a-col': Col,
        InfoCard
    },
    data() {
        return {
            inforCardData: [{
                    title: '新增用户',
                    icon: 'md-person-add',
                    count: 803,
                    color: '#2d8cf0'
                },
                {
                    title: '累计点击',
                    icon: 'md-locate',
                    count: 232,
                    color: '#19be6b'
                },
                {
                    title: '新增问答',
                    icon: 'md-help-circle',
                    count: 142,
                    color: '#ff9900'
                },
                {
                    title: '分享统计',
                    icon: 'md-share',
                    count: 657,
                    color: '#ed3f14'
                },
                {
                    title: '新增互动',
                    icon: 'md-chatbubbles',
                    count: 12,
                    color: '#E46CBB'
                },
                {
                    title: '新增页面',
                    icon: 'md-map',
                    count: 14,
                    color: '#9A66E4'
                }
            ],
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
