import request from '@/utils/request'
import { resolve } from 'core-js/fn/promise'

const getRouterMenu = function(){
    
    return new Promise((resolve,reject)=>{
        request({
            method:'get',
            url:"/routerMenu"
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}

export {
    getRouterMenu
}