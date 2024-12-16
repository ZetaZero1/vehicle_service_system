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
          <el-table-column prop="date" label="排名" width="180" />
          <el-table-column prop="name" label="商户名称" width="180" />
          <el-table-column prop="address" label="门店地址" />
          <el-table-column prop="address" label="负责人" />
          <el-table-column prop="address" label="平均星级" />
        </el-table>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8" :offset="8">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
