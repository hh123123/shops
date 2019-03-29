import axios from '../utils/request'

/**
 * 登录
 */
export function login(userName,password){

     return axios.post('/api/v1/auth/login',{
         userName,
         password
     })
}

/**
 * 注册
 */
export function reg(user){
    return axios.post('/api/v1/auth/reg',user)
}