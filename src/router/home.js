import Home from "../views/Home.vue"

export default {  
  path: "/",
  // name: "home", 当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性
  component: Home,
  children: [
    {
      path: "/",
      name: "overview",
      component: ()=> import("../views/overview.vue")
    },
    {
      path: "/goodsList",
      name: "goodsList",
      component: ()=> import("../views/goods/goods_list.vue")
    },
    {
      path: "/goodsGroup",
      name: "goodsGroup",
      component: ()=> import("../views/goods/goods_group.vue")
    },
    {
      path: '/goodsTag',
      name: 'goodsTag',
      component: ()=> import("../views/goods/goods_tag.vue")
    },
    {
      path:'/goodsComment',
      name:'goodsComment',
      component: ()=> import("../views/goods/goods_comment.vue")
    },
    {
      path:"/inventory",
      name:"inventory",
      component: ()=> import("../views/inventory/inventory.vue")
    },
    {
      path:"/godownEntry",
      name:"godownEntry",
      component: ()=> import("../views/inventory/godownEntry.vue")
    }
  ]   
}