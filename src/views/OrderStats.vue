<template>
  <div>
    <el-row>
      <el-col>
        <el-form inline="true">
          <el-form-item label="日期:">
            <el-input placeholder="请输入日期"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="district" label="区县"></el-table-column>
          <el-table-column
            prop="repairOrders"
            label="维修订单"
          ></el-table-column>
          <el-table-column
            prop="maintenanceOrders"
            label="保养订单"
          ></el-table-column>
          <el-table-column
            prop="carWashOrders"
            label="洗车订单"
          ></el-table-column>
          <el-table-column prop="total" label="总计"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tableData = ref([
  {
    district: "合计",
    repairOrders: 10,
    maintenanceOrders: 20,
    carWashOrders: 30,
    total: 60,
  },
  {
    district: "解放区",
    repairOrders: 10,
    maintenanceOrders: 20,
    carWashOrders: 30,
    total: 60,
  },
  {
    district: "山阳区",
    repairOrders: 10,
    maintenanceOrders: 20,
    carWashOrders: 30,
    total: 60,
  },
]);
</script>

<style lang="scss" scoped></style>
