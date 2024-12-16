//引入两个函数
import{createRouter,createWebHistory} from "vue-router";

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
            },
            {
                path:'/main/buydetail' ,
                name:'buydetail',
                component:()=>import('@/views/BuyDetail.vue')
            },
            {
                path:'/main/servicemanage' ,
                name:'servicemanage',
                component:()=>import('@/views/ServiceManage.vue')
            },
            {
                path:'/main/servicecategory' ,
                name:'servicecategory',
                component:()=>import('@/views/ServiceCategory.vue')
            },
            {
                path:'/main/washorder' ,
                name:'washorder',
                component:()=>import('@/views/WashOrder.vue')
            },
            {
                path:'/main/fixorder' ,
                name:'fixorder',
                component:()=>import('@/views/FixOrder.vue')
            },
            {
                path:'/main/maintainorder' ,
                name:'maintainorder',
                component:()=>import('@/views/MaintainOrder.vue')
            },
            {
                path:'/main/remarkmanage' ,
                name:'remarkmanage',
                component:()=>import('@/views/RemarkManage.vue')
            },
            {
                path:'/main/pushtask' ,
                name:'pushtask',
                component:()=>import('@/views/PushTask.vue')
            }
            ,
            {
                path:'/main/messagepush' ,
                name:'messagepush',
                component:()=>import('@/views/MessagePush.vue')
            },
            {
                path:'/main/pendingreview' ,
                name:'pendingreview',
                component:()=>import('@/views/PendingReview.vue')
            },
            {
                path:'/main/solvedmessage' ,
                name:'solvedmessage',
                component:()=>import('@/views/SolvedMessage.vue')
            },
            {
                path:'/main/orderstats' ,
                name:'orderstats',
                component:()=>import('@/views/OrderStats.vue')
            }
        ]
    }
]

//创建路由器
const router = createRouter({
    history:createWebHistory(),//路由方式
    routes
})

// 暴露路由器
export default router
