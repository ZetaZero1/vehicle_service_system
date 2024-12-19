<template>
  <div>
    <el-row>
      <el-col :span="24">
        <h3>商户排名</h3>
      </el-col>
    </el-row>

    <!--商户排名表格-->
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="rank" label="排名" width="180" align="center"/>
          <el-table-column prop="buyName" label="商户名称" width="180" align="center"/>
          <el-table-column prop="buyAddress" label="门店地址" align="center"/>
          <el-table-column prop="header" label="负责人" align="center"/>
          <el-table-column label="评分" align="center">
            <template #default="scope">
              <el-rate
                v-model="scope.row.score"
                disabled
                show-score
                text-color="#ff9900"
                size='large'
                :score-template="formatScore(scope.row.score)"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <!-- 分页条 -->
    <el-row>
      <el-col :span="8" :offset="8">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total - 2"
          :page-size="queryParams.pageSize"
          :current-page="queryParams.pageNum"
          @current-change="changePageNum"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
/* 引入axios */
import axios from "axios";
import { ref, onMounted, getCurrentInstance } from "vue";
import { ElMessage } from "element-plus";

/* 获取请求对象 */
const instance = getCurrentInstance();

let total = ref(0);

/* 定义分页条件 */
const queryParams = ref({
  pageNum: 1,
  pageSize: 3,
});

const tableData = ref([]);

onMounted(() => {
  /* 查询评分列表 */
  rankList();
});

function rankList() {
  axios
    .get("http://localhost:8888/rank/list", {
      params: queryParams.value,
    })
    .then((res) => {
      console.log(res);
      if (res.data.code === 200) {
        tableData.value = res.data.data.records;
        total.value = res.data.data.total;
      } else {
        ElMessage.error("数据加载失败");
      }
    });
}

function changePageNum(num) {
  queryParams.value.pageNum = num;
  rankList();
}

/* 分数格式化 保留一位小数*/
function formatScore(score) {
  if (score === undefined || score === null) return "0.0分";
  return `${score.toFixed(1)}分`;
}
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
