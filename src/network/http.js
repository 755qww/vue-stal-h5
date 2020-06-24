import axios from 'axios'
import apiContent from './api'

// 新建一个实例来使用axios
let instance = axios.create({
  baseURL:  'http://localhost:8080',
  timeout: 10000
})




// 添加请求拦截器  ==>  对请求参数进行处理
instance.interceptors.request.use(config => {
  // 在发送http请求之前做什么
  let token = localStorage.getItem('token')
  if(token){
    config.headers['X-Access-Token'] = token
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    
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

// export default Http

