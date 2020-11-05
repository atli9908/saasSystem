import Vue from "vue";
import Router from "vue-router";
import Home from "./home";

Vue.use(Router);

//解决路由导航冗余报错（路由重复）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [Home]
});
