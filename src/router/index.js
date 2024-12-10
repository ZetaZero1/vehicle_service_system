//引入两个函数
import{createRouter,createWebHashHistory} from "vue-router";

//定义路由规则
const routes =[
    {
      path:'/',
        redirect:'/login',
        component:()=>import('@/views/Login.vue')
    },
    {
        path:'/login',
        component:()=>import('@/views/Login.vue')
    },
    {
        path:'/main',
        name:'main',
        component:()=>import('@/components/Main.vue')
    }
]

//创建路由器
const router = createRouter({
    history:createWebHashHistory(),//路由方式
    routes
})

// 暴露路由器
export default router
