<template>
  <div>
    <el-row>
      <el-col :span="24">
        会员列表
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form :inline="true">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" clearable />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input placeholder="请输入手机号" clearable />
          </el-form-item>
          <el-form-item label="注册时间">
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始时间"
              end-placeholder="结束时间" :size="size" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">筛选</el-button>
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
          <el-table-column prop="date" label="用户ID" width="180" />
          <el-table-column prop="name" label="用户名" width="180" />
          <el-table-column prop="address" label="手机号" />
          <el-table-column prop="address" label="注册时间" />
        </el-table>
      </el-col>
    </el-row>

    <!--分页条并且居中-->
    <el-row>
      <el-col :span="8" :offset="8">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>