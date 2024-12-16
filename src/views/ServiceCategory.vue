<template>
  <div>
    <el-row>
      <el-col>
        <el-form inline="true">
          <el-form-item>
            <el-icon><CirclePlus /></el-icon>
          </el-form-item>
          <el-form-item>
            <h3>添加</h3>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form inline="true">
          <el-form-item label="分类名称:">
            <el-input placeholder="请输入分类名称" clearable />
          </el-form-item>
          <el-form-item label="分类排序:">
            <el-input placeholder="请输入分类排序" clearable />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <hr />
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <h6>服务类别</h6>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="服务分类" />
          <el-table-column prop="name" label="排序" />
          <el-table-column fixed="right" label="操作" min-width="120">
            <template #default>
              <el-button link type="primary" size="small"> 编辑 </el-button>
              <el-button link type="primary" size="small"> 删除 </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { CirclePlus } from "@element-plus/icons-vue";

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
