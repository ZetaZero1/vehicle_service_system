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
            <el-button type="primary" @click="buyList">筛选</el-button>
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
        <el-button type="primary">导出</el-button>
      </el-col>
    </el-row>

    <!--表格-->
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="buyName" label="商户名称" width="180" />
          <el-table-column prop="buyAddress" label="门店地址" width="180" />
          <el-table-column prop="header" label="负责人" />
          <el-table-column
            prop="createTime"
            label="注册时间"
            :formatter="(row) => formatDate(row.createTime)"
          />
          <el-table-column label="审核状态">
            <template #default="scope">
              <span :class="getStatusClass(scope.row.status)">
                {{ formatStatus(scope.row) }}
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="primary">详情</el-button>
              <el-button
                v-if="scope.row.status === 0"
                type="primary"
                @click="showdialog(scope.row.buyId)"
              >
                审核
              </el-button>
            </template>
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
          :current-page="queryParams.pageNum"
          @current-change="changePageNum"
        />
      </el-col>
    </el-row>

    <!-- 审查对话框 -->
    <el-dialog v-model="dialogVisible" title="审核" width="500">
      <el-form :model="review" label-width="auto" style="max-width: 600px">
        <el-form-item label="审核结果">
          <el-radio-group v-model="review.status">
            <el-radio :label="1">审核通过</el-radio>
            <el-radio :label="0">审核不通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="审核说明">
          <el-input v-model="review.auditInstructions" type="textarea" />
        </el-form-item>
        <el-form-item style="margin-left: 150px">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitAudit">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
/* 引入axios */
import axios from "axios";
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";

// 对话框显示状态
let dialogVisible = ref(false);

// 总记录数
let total = ref(0);

// 查询参数
const queryParams = ref({
  buyName: "",
  buyAddress: "",
  pageNum: 1,
  pageSize: 2,
});

// 表格数据
const tableData = ref([]);

/* 定义审核表单的数据对象 */
const review = ref({
  buyId: 0,
  status: 0,
  auditInstructions: "",
});

// 页面挂载时获取数据
onMounted(() => {
  buyList();
});

// 查询方法
function buyList() {
  axios
    .get("http://localhost:8888/buy/list", {
      params: queryParams.value,
    })
    .then((res) => {
      if (res.data.code === 200) {
        tableData.value = res.data.data.records;
        total.value = res.data.data.total;
      } else {
        ElMessage.error("数据加载失败");
      }
    });
}

// 分页
function changePageNum(num) {
  queryParams.value.pageNum = num;
  buyList();
}

// 清空筛选条件
function resetForm() {
  queryParams.value = {
    buyName: "",
    buyAddress: "",
    pageNum: 1,
    pageSize: 5,
  };
  buyList();
}

// 审核对话框显示方法
function showdialog(id) {
  dialogVisible.value = true;
  console.log(id);
  /* 把id给审核的对象 */
  review.value.buyId = id;
}

/* 审核的提交 */
function submitAudit() {
  // console.log("审核结果:", auditResult.value);
  // console.log("审核说明:", auditDescription.value);
  // dialogVisible.value = false;
  // ElMessage.success("审核提交成功");
  axios
    .put("http://localhost:8888/buy/update", null, {
      params: review.value, // 将参数拼接到 URL 查询字符串
    })
    .then((res) => {
      console.log(res);
      /* 数据改变 重新发送请求 */
      if (res.data.code === 200) {
        buyList();
      }
      /* 隐藏模态框 */
      dialogVisible.value=false;
    });
}

// 审核状态格式化
function formatStatus(row) {
  const statusMap = {
    0: "未审核",
    1: "已通过",
    2: "已拒绝",
  };
  return statusMap[row.status] || "未知状态";
}

function getStatusClass(status) {
  return {
    0: "status-pending",
    1: "status-approved",
    2: "status-rejected",
  }[status];
}

/* 时间格式转换方法 */
function formatDate(dateStr) {
  if (!dateStr) return "无数据";
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

.status-pending {
  color: #f39c12; /* 黄色 */
}

.status-approved {
  color: #3498db; /* 蓝色 */
}

.status-rejected {
  color: #e74c3c; /* 红色 */
}
</style>
