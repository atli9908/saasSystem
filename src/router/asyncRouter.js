import Home from "../views/Home.vue"

export default [
  {  
    path: "/",
    // name: "home", 当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性
    component: Home,
    mate:{role: ['admin','staff'] },
    children: [
      {
        path: "",
        name: "index",
        component: ()=> import("../views/index.vue"),
        mate:{ title:'概览',role: ['admin','staff'] }
      },
      {//商品
        path: "/goodsList",
        name: "goodsList",
        component: ()=> import("../views/goods/goods_list.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path: "/goodsGroup",
        name: "goodsGroup",
        component: ()=> import("../views/goods/goods_group.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path: '/goodsTag',
        name: 'goodsTag',
        component: ()=> import("../views/goods/goods_tag.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path:'/goodsList/addGoods',
        name:'addGoods',
        component:()=> import('../views/goods/addGoods.vue'),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path:'/goodsComment',
        name:'goodsComment',
        component: ()=> import("../views/goods/goods_comment.vue"),
        mate:{ title:'',icon:'',role: ['admin','staff'] }
      },
      {//订单
        path:'/allOrders',
        name:'allOrders',
        component: ()=> import("../views/order/allOrders.vue"),
        mate:{ title:'',icon:'',role: ['admin','staff'] }
      },
      {
        path:'/allOrders/orderDetail/:id',
        name:'orderDetail',
        component:()=> import("../views/order/orderDetail.vue"),
        mate:{ title:'',icon:'',role: ['admin','staff'] }
      },
      {//库存
        path:"/inventory",
        name:"inventory",
        component: ()=> import("../views/inventory/inventory.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path:"/godownEntry",
        name:"godownEntry",
        component: ()=> import("../views/inventory/godownEntry.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path:"/cg_godownEntry",
        name:"cg_godownEntry",
        component: ()=> import("../views/inventory/cg_godownEntry.vue"),
        mate:{ title:'',icon:'',role: ['admin'], title:"采购入库"}
      },
      {
        path:"/godownOut",
        name:'godownOut',
        component: ()=> import("../views/inventory/godownOut.vue"),
        mate:{ title:'',icon:'',role: ['admin']}
      },
      //客户
      {
        path:'/allCustomers',
        name:'allCustomers',
        component:()=> import("../views/customers/allCustomers.vue"),
        mate:{ title:'',icon:'',role: ['admin','staff'] }
      },
      //设置
      {
        path:'/shopMsg',
        name:'shopMsg',
        component:()=> import("../views/setting/shopMsg.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path:'/account',
        name:'account',
        component:()=> import("../views/setting/account.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path:'/account/addAccount',
        name:'addAccount',
        component:()=>import("../views/setting/addAccount.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      {
        path:'/account/setRights',
        name:'setRights',
        component:()=> import("../views/setting/setRights.vue"),
        mate:{ title:'',icon:'',role: ['admin'] }
      },
      //数据
      {
        path:'/overview',
        name:'overview',
        component:()=> import("../views/information/overview.vue"),
        mate:{ title:'',icon:'',role: ['admin','staff'] }
      },
      {
        path:'/property',
        name:'property',
        component:()=> import("../views/information/property .vue"),
        mate:{ title:'',icon:'',role: ['admin','staff'] }
      }
    ]   
  },
  {
    path:'*',
    redirect:'/404'
  }
]