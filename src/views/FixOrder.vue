<template>
  <div>
    <el-row>
      <el-col>
        <el-form-item label="维修订单"> </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-form inline="true" style="background-color: #f0f9eb; padding: 16px">
          <el-form-item label="订单信息">
            <el-input v-model="sizeForm.name" />
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select
              style="width: 150px"
              v-model="sizeForm.region"
              placeholder="请输入订单状态"
            >
              <el-option label="全部" value="0" />
              <el-option label="待支付" value="1" />
              <el-option label="待核销" value="2" />
              <el-option label="已完成" value="3" />
              <el-option label="已退款" value="4" />
              <el-option label="已取消" value="5" />
            </el-select>
          </el-form-item>
          <el-form-item label="订单时间">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              :size="size"
            />
          </el-form-item>
        </el-form>
        <el-col>
          <el-form-item style="background-color: #f0f9eb; padding: 16px">
            <el-button type="primary">筛选</el-button>
            <el-button type="primary">导出订单</el-button>
          </el-form-item>
        </el-col>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="订单编号" />
          <el-table-column prop="name" label="服务编号" />
          <el-table-column prop="state" label="服务名称" />
          <el-table-column prop="city" label="买家" />
          <el-table-column prop="address" label="商家" />
          <el-table-column prop="zip" label="价格" />
          <el-table-column prop="status" label="订单状态" />
          <el-table-column prop="appointtime" label="预约时间" />
          <el-table-column prop="ordertime" label="下单时间" />
          <el-table-column fixed="right" label="操作">
            <template #default>
              <el-button type="primary"> 详情 </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <!--分页-->
    <el-row>
      <el-col :span="8" :offset="8">
        <el-pagination background layout="prev, pager, next" :total="345" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const sizeForm = reactive({
  name: "手机号、订单号",
  region: "",
});

const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    status: "待支付",
    appointtime: "2022-01-01 12:00:00",
    ordertime: "2022-01-01 12:00:00",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    status: "待支付",
    appointtime: "2022-01-01 12:00:00",
    ordertime: "2022-01-01 12:00:00",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    status: "待支付",
    appointtime: "2022-01-01 12:00:00",
    ordertime: "2022-01-01 12:00:00",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    status: "待支付",
    appointtime: "2022-01-01 12:00:00",
    ordertime: "2022-01-01 12:00:00",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    status: "待支付",
    appointtime: "2022-01-01 12:00:00",
    ordertime: "2022-01-01 12:00:00",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    status: "待支付",
    appointtime: "2022-01-01 12:00:00",
    ordertime: "2022-01-01 12:00:00",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    status: "待支付",
    appointtime: "2022-01-01 12:00:00",
    ordertime: "2022-01-01 12:00:00",
  },
]);
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
