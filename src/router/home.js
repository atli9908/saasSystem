import Home from "../views/Home.vue"

export default {  
  path: "/",
  // name: "home", 当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性
  component: Home,
  children: [
    {
      path: "/",
      name: "overview",
      component: ()=> import("../components/overview.vue")
    },
    {
      path: "/goodslist",
      name: "goodsList",
      component: ()=> import("../components/goods_list.vue")
    } 
  ]   
}