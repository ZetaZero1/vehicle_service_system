<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#304155"
          default-active="2"
          text-color="#fff"
          router
        >
          <el-menu-item index="/main/front">
            <el-icon><Search /></el-icon>
            <span>首页</span>
          </el-menu-item>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><HomeFilled /></el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/main/userlist">
              <el-icon><Pointer /></el-icon>
              <span>用户列表</span>
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><StarFilled /></el-icon>
              <span>商户管理</span>
            </template>
            <el-menu-item index="/main/buymanage">
              <el-icon><UserFilled /></el-icon>
              <span>商户管理</span>
            </el-menu-item>
            <el-menu-item index="/main/buyrank">
              <el-icon><UserFilled /></el-icon>
              <span>商户排名</span>
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><StarFilled /></el-icon>
              <span>服务管理</span>
            </template>
            <el-menu-item index="/main/servicemanage">
              <el-icon><UserFilled /></el-icon>
              <span>服务管理</span>
            </el-menu-item>
            <el-menu-item index="/main/servicecategory">
              <el-icon><UserFilled /></el-icon>
              <span>服务类别</span>
            </el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="5">
            <template #title>
              <el-icon><StarFilled /></el-icon>
              <span>订单管理</span>
            </template>
            <el-menu-item index="/main/washorder">
              <el-icon><UserFilled /></el-icon>
              <span>洗车订单</span>
            </el-menu-item>
            <el-menu-item index="/main/fixorder">
              <el-icon><UserFilled /></el-icon>
              <span>维修订单</span>
            </el-menu-item>
            <el-menu-item index="/main/maintainorder">
              <el-icon><UserFilled /></el-icon>
              <span>保养订单</span>
            </el-menu-item>
            <el-menu-item index="/main/remarkmanage">
              <el-icon><UserFilled /></el-icon>
              <span>评价管理</span>
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item index="/main/securitylist">
            <el-icon><UserFilled /></el-icon>
            <span>救援任务</span>
          </el-menu-item>

          <el-sub-menu index="7">
            <template #title>
              <el-icon><StarFilled /></el-icon>
              <span>信息发布</span>
            </template>
            <el-menu-item index="/main/messagepush">
              <el-icon><UserFilled /></el-icon>
              <span>信息发布</span>
            </el-menu-item>
            <el-menu-item index="/main/pendingreview">
              <el-icon><UserFilled /></el-icon>
              <span>待审核</span>
            </el-menu-item>
            <el-menu-item index="/main/solvedmessage">
              <el-icon><UserFilled /></el-icon>
              <span>已审核</span>
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item index="/main/orderstats">
            <el-icon><UserFilled /></el-icon>
            <span>订单统计</span>
          </el-menu-item>

          <el-sub-menu index="9">
            <template #title>
              <el-icon><StarFilled /></el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item index="9-1">
              <el-icon><UserFilled /></el-icon>
              <span>系统菜单</span>
            </el-menu-item>
            <el-menu-item index="9-2">
              <el-icon><UserFilled /></el-icon>
              <span>系统用户</span>
            </el-menu-item>
            <el-menu-item index="9-3">
              <el-icon><UserFilled /></el-icon>
              <span>系统角色</span>
            </el-menu-item>
            <el-menu-item index="9-4">
              <el-icon><UserFilled /></el-icon>
              <span>数据字典</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <el-row>
            <el-col :span="12">
              <div>用户管理</div>
            </el-col>
            <el-col :span="12">
              <div class="divright">
                <el-dropdown @command="commandHandler">
                  <span> 欢迎,{{ userName }} </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item command="center"
                        >个人中心</el-dropdown-item
                      >
                      <el-dropdown-item command="pwd"
                        >修改密码</el-dropdown-item
                      >
                      <el-dropdown-item command="logout"
                        >退出登录</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {
  Search,
  HomeFilled,
  Pointer,
  UserFilled,
  StarFilled,
} from "@element-plus/icons-vue";

//1.引入路由
import { useRouter } from "vue-router";

// 获取用户名
const userName = localStorage.getItem("userName");

//2.获取路由器
const router = useRouter();

// 下拉菜单事件(退出登录)
function commandHandler(val) {
  if (val == "logout") {
    //退出登录 使用路由器跳转到登录页面
    // 删除本地存储
    localStorage.removeItem('userName')
    router.replace("/login");
  }
}
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-aside {
  height: 100%;
  background-color: #304155;
}
.el-header {
  height: 60px;
  line-height: 60px;
  box-shadow: 3px 3px 3px grey;
}
.divright {
  float: right;
}
.el-dropdown {
  margin-top: 23px;
}
</style>
