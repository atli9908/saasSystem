import Vue from "vue";
import Router from "vue-router";

import constantRouter from "./constantRouter";
import {filterAsyncRouter} from "./permission";

import store from "@/store";

import {getToken} from "@/utils/auth";

Vue.use(Router);

//使用ElementUi时第二次点击同一个路由报错,解决路由导航冗余（路由重复）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouter
});

//前置路由守卫
let initRouters;
router.beforeEach((to,form,next)=>{
  if(!initRouters){
    if(getToken("user")){
      store.dispatch('generateRouter').then(()=>{
        initRouters = filterAsyncRouter(store.state.role);
        console.log(filterAsyncRouter(store.state.role));
        //添加路由
        router.addRoutes(initRouters);
        next({...to,replace:true})
      });
      next()
    }else{
      if(to.path === '/login'){
        next()
      }else{
        next({path:'/login'})
      }
    }
  }else{
    next();
  }
})

export default router;