<template>
  <div>
    <el-row>
      <el-col>
        <el-form-item label="维修订单"> </el-form-item>
      </el-col>
    </el-row>

    <!--表单-->
    <el-row justify="center">
      <el-col :span="24">
        <el-form
          :inline="true"
          style="background-color: #f0f9eb; padding: 16px"
        >
          <el-form-item label="订单编号">
            <el-input placeholder="请输入订单编号" clearable />
          </el-form-item>
          <el-form-item label="服务内容">
            <el-input placeholder="请输入服务内容" clearable />
          </el-form-item>
          <el-form-item label="订单时间">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              :size="size"
            />
          </el-form-item>
        </el-form>
      </el-col>

      <el-col :span="24">
        <el-form
          :inline="true"
          style="background-color: #f0f9eb; padding: 16px"
        >
          <el-form-item label="评价星级">
            <el-select
              style="width: 150px"
              v-model="form.region"
              placeholder="全部"
            >
              <el-option label="全部" value="0" />
              <el-option label="一星" value="1" />
              <el-option label="二星" value="2" />
              <el-option label="三星" value="3" />
              <el-option label="四星" value="4" />
              <el-option label="五星" value="5" />
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">筛选</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <!--表格-->
    <el-row>
      <el-col>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="订单编号" />
          <el-table-column prop="name" label="服务内容" />
          <el-table-column prop="state" label="评价者" />
          <el-table-column prop="city" label="星级" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-image
                style="width: 200px; height: 200px"
                :src="scope.row.url"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                fit="cover"
              />
            </template>
          </el-table-column>
          <el-table-column prop="address" label="评价内容" />
          <el-table-column prop="zip" label="评价时间" />
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
import { ref } from "vue";

const form = ref({
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
    url: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    url: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    url: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    url: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
  },
]);
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
