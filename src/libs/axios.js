import axios from 'axios'

const addErrorLog = errorInfo => {
    const { statusText, status, request: { responseURL } } = errorInfo
    let info = {
        type: 'ajax',
        code: status,
        mes: statusText,
        url: responseURL
    }
}


class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl      // 请求地址
        this.queue = {}             // 请求
    }

    getInsideConfig () {
        const config = {
            baseUrl: this.baseUrl,
            headers: {
                //
            }
        }
        return config
    }

    destroy (url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // 当请求为空时
        }
    }

    // 接口拦截
    interceptors (instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 可以在这里添加全局loading
            if(!Object.keys(this.queue).length) {
                // 
            }
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })

        // 相应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            const { data, status } = res
            return { data, status }
        }, error => {
            this.destroy(url)
            let errorInfo = error.response
            if (!errorInfo) {
                const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
                errorInfo = {
                    statusText,
                    status,
                    request: { responseURL: config.url }
                }
            }
            addErrorLog(errorInfo)
            return Promise.reject(error)
        })
    }

    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}