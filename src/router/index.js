import Vue from "vue";
import Router from "vue-router";
import home from "./home";
import login from "./login"

Vue.use(Router);

//使用ElementUi时第二次点击同一个路由报错,解决路由导航冗余（路由重复）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [home,login]
});
