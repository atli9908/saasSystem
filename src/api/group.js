import require from "@/utils/require";

let addGroup = function(data){
    return new Promise((resolve,reject)=>{
        require.post({
            url:'/goodsGroup',
            data:data
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        });
    })
}

export default {
    addGroup
}