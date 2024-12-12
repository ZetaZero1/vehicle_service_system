//引入两个函数
import{createRouter,createMemoryHistory} from "vue-router";

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
        component:()=>import('@/components/Main.vue'),
        children:[
            {
                path:'/main/userlist' ,
                name:'userlist',
                component:()=>import('@/views/UserList.vue')
            },
            {
                path:'/main/buymanage' ,
                name:'buymanage',
                component:()=>import('@/views/BuyManage.vue')
            },
            {
                path:'/main/buyrank' ,
                name:'buyrank',
                component:()=>import('@/views/BuyRank.vue')
            },
            {
                path:'/main/securitylist' ,
                name:'securitylist',
                component:()=>import('@/views/SecurityList.vue')
            }

        ]
    }
]

//创建路由器
const router = createRouter({
    history:createMemoryHistory(),//路由方式
    routes
})

// 暴露路由器
export default router
