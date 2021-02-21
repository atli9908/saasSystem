import {getRequest} from "@/utils/request";

import asyncRouter from "./asyncRouter";
import store from "@/store"

function hasPermission(router,role){ //判断权限
    if(router.mate && router.mate.role.includes(role)){
        return true;
    }else{
        return false;
    }
}

function getRouterMenu(){ //从后端获取路由菜单
    return getRequest('/routerMenu');
}

const filterEmun = function(role){
    const routers = [];
    getRouterMenu().then(res=>{
        res.data.routes.forEach(router=>{
            if(hasPermission(router,role)){
                if(router.children && router.children.length > 0){
                    router.children = router.children.filter(child=>{
                        if(hasPermission(child,role)){
                            return child;
                        }
                    })
                }
                routers.push(router);
            }
        })
    })
    return routers;
}

const filterAsyncRouter = function(role){
    return asyncRouter.filter(router=>{
        if(hasPermission(router,role)){
            if(router.children && router.children.length > 0){
                router.children = router.children.filter(child=>{
                    if(hasPermission(child,role)){
                        return child;
                    }
                })
            }
            return 'router';
        }else{
            return router;
        }
    })
}

export {
    filterEmun,
    filterAsyncRouter
}