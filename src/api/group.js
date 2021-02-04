//商品分组
import request from '@/utils/request'

let addGroup = function(data){
    return new Promise((resolve,reject)=>{
        request({
            method:'post',
            url:'/addGroup',
            data:data
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        });
    })
}

let getGroup = function(url){
    return new Promise((resolve,reject)=>{
        request({
            method:'get',
            url:url,
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        });
    })
}

export{
    addGroup,
    getGroup
}