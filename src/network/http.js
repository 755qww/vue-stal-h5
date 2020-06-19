import axios from 'axios'
import apiContent from './api'
import { is } from 'core-js/fn/object'

// 新建一个实例来使用axios
let instance = axios.create({
  baseURL:  'http://localhost:8080',
  timeout: 10000
})

const Http = {}
for (let key in apiContent){
  let api = apiContent[key]  // 遍历出所有定义的 api（url，method）
  /**
   *  @params:  请求参数 get post 等
   *  @isFormDate: 标识是否为form-date请求
   *  @config: 配置参数
   */
  Http[key] = async function(params, isFormDate = false, config = {}){
    let newParams = {}
    if(params&& is){
      
    }
  }
}

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送http请求之前做什么
  let token = localStorage.getItem('token')
  if(token){
    config.headers['X-Access-Token'] = token
  }
  return config
},error => {
  // 对请求错误做什么
  console.log(error)
})


//添加响应拦截器
instance.interceptors.response.use(response => {
  // 这里应该添加一步判断token是否失效，如果失效，将 localStorage 中的token清空
  return response
},err => {
  console.log(err)
})


