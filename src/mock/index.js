import Mock from 'mockjs'

// 配置Ajax请求延时, 可以用来测试网络延迟大时项目中的一些效果
Mock.setup({
    timeout: 1000
})

export default Mock