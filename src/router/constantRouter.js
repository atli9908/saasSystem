import login from "../views/login.vue";

export default [
    {
        path:'/login',
        name:'login',
        component: login,
    },
    {
        path:'/404',
        name:'404',
        component: ()=>import('../views/400/404.vue')
    }
]