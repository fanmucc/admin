import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'

// 配置Ajax请求延时, 可以用来测试网络延迟大时项目中的一些效果
Mock.setup({
    timeout: 1000
})

// 登录相关和获取用户数据
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)

export default Mock