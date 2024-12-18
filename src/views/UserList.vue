<template>
  <div>
    <el-row>
      <el-col :span="24"> 会员列表 </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" :model="queryParams">
          <el-form-item label="用户名">
            <el-input
              placeholder="请输入用户名"
              v-model="queryParams.userName"
              clearable
            />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input
              placeholder="请输入手机号"
              v-model="queryParams.phone"
              clearable
            />
          </el-form-item>
          <el-form-item label="注册时间">
            <el-date-picker
              v-model="time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              :size="size"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="userList">筛选</el-button>
            <el-button type="primary">清空</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <!--导出-->
    <el-row>
      <el-col :span="24">
        <el-button type="primary">导出</el-button>
      </el-col>
    </el-row>

    <!--表格-->
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="userId" label="用户ID" width="180" />
          <el-table-column prop="userName" label="用户名" width="180" />
          <el-table-column prop="phone" label="手机号" />
          <el-table-column prop="createTime" label="注册时间" :formatter="(row) => formatDate(row.createTime)"/>
        </el-table>
      </el-col>
    </el-row>

    <!--分页条并且居中-->
    <el-row>
      <el-col :span="8" :offset="8">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="queryParams.pageSize"
          @change="changePageNum"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, watchEffect } from "vue";
// 获取当前实例对象
const instance = getCurrentInstance();
//获取网络请求对象
// const { $http } = instance.appContext.config.globalProperties;

/* 改用axios请求 （更主流一点）*/
import axios from 'axios';

//定义请求参数对象 （包含表单数据（筛选条件））
const queryParams = ref({
  pageNum: 1,
  pageSize: 3,
  userName: "",
  phone: "",
  startTime: "",
  endTime: "",
});

//定义一个时间范围变量time
const time = ref("");

// 定义变量 记录总记录数
let total = ref(0);

const tableData = ref([]);

onMounted(() => {
  //查询用户列表
  userList();
});
// 获取用户列表的函数
function userList() {
  axios
    .get("http://localhost:8888/user/list", {
      params: queryParams.value, // GET 参数
    })
    .then((res) => {
      if (res.data.code === 200) {
        tableData.value = res.data.data.records;
        total.value = res.data.data.total;
      }
    })
    .catch((error) => {
      console.error("请求失败：", error);
    });
}
// 分页查询
function changePageNum(num) {
  console.log(num);
  queryParams.value.pageNum = num;
  // 再次查询
  userList();
}

//通过侦听器 完成开始时间和结束时间的赋值
watchEffect(() => {
  console.log(time.value);
  queryParams.value.startTime = time.value[0];
  queryParams.value.endTime = time.value[1];
});

/* 时间格式转换方法  */
function formatDate(dateStr) {
  if (!dateStr) return "无数据"; // 如果日期为空，显示默认值
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
