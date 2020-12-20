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
    {//商品
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
      path:'/goodsList/addGoods',
      name:'addGoods',
      component:()=> import('../views/goods/addGoods.vue')
    },
    {
      path:'/goodsComment',
      name:'goodsComment',
      component: ()=> import("../views/goods/goods_comment.vue")
    },
    {//订单
      path:'/allOrders',
      name:'allOrders',
      component: ()=> import("../views/order/allOrders.vue"),
    },
    {
      path:'/allOrders/orderDetail/:id',
      name:'orderDetail',
      component:()=> import("../views/order/orderDetail.vue")
    },
    {//库存
      path:"/inventory",
      name:"inventory",
      component: ()=> import("../views/inventory/inventory.vue")
    },
    {
      path:"/godownEntry",
      name:"godownEntry",
      component: ()=> import("../views/inventory/godownEntry.vue")
    },
    {
      path:"/cg_godownEntry",
      name:"cg_godownEntry",
      component: ()=> import("../views/inventory/cg_godownEntry.vue"),
      meta:{
        title:"采购入库"
      }
    },
    {
      path:"/godownOut",
      name:'godownOut',
      component: ()=> import("../views/inventory/godownOut.vue")
    },
    //客户
    {
      path:'/allCustomers',
      name:'allCustomers',
      component:()=> import("../views/customers/allCustomers.vue")
    },
    //设置
    {
      path:'/shopMsg',
      name:'shopMsg',
      component:()=> import("../views/setting/shopMsg.vue")
    },
    {
      path:'/account',
      name:'account',
      component:()=> import("../views/setting/account.vue")
    }
  ]   
}