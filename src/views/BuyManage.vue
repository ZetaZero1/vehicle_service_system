<template>
  <div>
    <!--标题-->
    <el-row>
      <el-col :span="24">
        <h3>会员列表</h3>
      </el-col>
    </el-row>

    <!--商户查询表单-->
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" :model="queryParams">
          <el-form-item label="商户名称">
            <el-input
              v-model="queryParams.buyName"
              placeholder="请输入商户名称"
              clearable
            />
          </el-form-item>
          <el-form-item label="门店地址">
            <el-input
              v-model="queryParams.buyAddress"
              placeholder="请输入门店地址"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">筛选</el-button>
            <el-button type="primary" @click="resetForm"
              >清空筛选条件</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <!--导出按钮-->
    <el-row>
      <el-col :span="24">
        <el-button type="primary  ">导出</el-button>
      </el-col>
    </el-row>

    <!--表格-->
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="buyName" label="商户名称" width="180" />
          <el-table-column prop="buyAddress" label="门店地址" width="180" />
          <el-table-column prop="header" label="负责人" />
          <el-table-column prop="createTime" label="注册时间" />
          <el-table-column
            prop="status"
            label="审核状态"
            :formatter="formatStatus"
          />
          <el-table-column prop="address" label="操作">
            <el-button type="primary">详情</el-button>
            <el-button type="primary" @click="showdialog">审核</el-button>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <!--分页-->
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

    <!-- 审查对话框 -->
    <el-dialog v-model="dialogVisible" title="审核" width="500">
      <el-form label-width="auto" style="max-width: 600px">
        <el-form-item label="审核结果">
          <el-radio-group>
            <el-radio value="0">审核通过</el-radio>
            <el-radio value="1">审核不通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="审核说明">
          <el-input type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确认</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, getCurrentInstance } from "vue";

/* 获取请求对象 */
const instance = getCurrentInstance();
//获取网络请求对象
const { $http } = instance.appContext.config.globalProperties;

//1.定义对话框是否显示变量
let dialogVisible = ref(false);

// 定义变量 记录总记录数
let total = ref(0);

/* 定义一个对象 封装查询商户的提交 */
const queryParams = ref({
  buyName: "",
  buyAddress: "",
  pageNum: 1,
  pageSize: 2,
});

/* 页面挂载时 发送请求 获取所有的商户信息 */
onMounted(() => {
  /* 查询所有的商户信息 */
  buyList();
});

function buyList() {
  axios
    .get("http://localhost:8888/buy/list", {
      params: queryParams.value,
    })
    .then((res) => {
      console.log(res);
      if (res.data.code === 200) {
        tableData.value = res.data.data.records;
        total.value = res.data.data.total;
      }
    });
}

// 分页查询
function changePageNum(num) {
  console.log(num);
  queryParams.value.pageNum = num;
  // 再次查询
  buyList();
}

const tableData = ref([]);

//2.点击审核按钮显示模态框
function showdialog() {
  dialogVisible.value = true;
}

// 清空筛选条件的方法
function resetForm() {
  queryParams.value = ""; // 清空商户名称
  // storeAddress.value = ""; // 清空门店地址
}

function formatStatus(row) {
  const statusMap = {
    0: "未审核",
    1: "已审核",
    2: "已拒绝",
  };
  return statusMap[row.status] || "未知状态";
}
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
