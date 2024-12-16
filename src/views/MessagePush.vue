<template>
  <div>
    <el-row>
      <el-col :span="12">
        <h3>发布列表</h3>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button type="primary">发布信息</el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-form inline="true">
          <el-form-item label="商店名称:">
            <el-input placeholder="请输入商店名称"></el-input>
          </el-form-item>
          <el-form-item label="门店地址:">
            <el-input placeholder="请输入门店地址"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col>
        <el-button type="primary">筛选</el-button>
        <el-button type="primary">导出</el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="content" label="发布内容"></el-table-column>
          <el-table-column prop="publisher" label="发布人"></el-table-column>
          <el-table-column prop="status" label="上/下架状态"></el-table-column>
          <el-table-column prop="time" label="发布时间"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template #default>
              <el-button type="primary">详情</el-button>
              <el-button type="primary">上架</el-button>
              <el-button type="primary">下架</el-button>
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
import { ref } from "vue";

const tableData = ref([
  {
    title: "特朗普胜选！",
    content: "特朗普赢的2024年美国大选",
    publisher: "admin",
    status: "上架",
    time: "2024-12-14",
  },
]);
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
