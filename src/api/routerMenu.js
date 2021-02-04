import request from '@/utils/request'

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