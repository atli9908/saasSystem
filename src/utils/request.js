//axios封装
import axios from 'axios';
import router from '@/router'

import {getToken} from './auth'

const server = axios.create({
    baseURL:'http://localhost:8081/',  //自动加在url前面
    timeout:5000,    //请求超时时间
});

const getRequest = function(url){
    return server({
        method:'get',
        url:url
    })
}
const postRequest = function(url,data){
  return server({
      method:'post',
      url:url,
      data:data
  })
}
const putRequest = function(url,data){
  return server({
      method:'put',
      url:url,
      data:data
  })
}
const deleteRequest = function(url){
  return server({
      method:'delete',
      url:url
  })
}

//请求拦截
server.interceptors.request.use(
    config=>{
        if(getToken('user')){
            //每次请求携带token
            config.headers['user-token'] = getToken('user');
        }
        return config;
    },
    error=>{
        console.log(error);
    }
);
//响应拦截
server.interceptors.response.use(
    response => {
      if (response.status == 413) {
        console.log("token过期");
        router.replace('/');
      }
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

export {
  server,
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
}