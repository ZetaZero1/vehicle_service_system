<template>
  <div>
    <el-form inline="true">
      <el-row :gutter="20" style="display: flex; align-items: center">
        <el-col :span="18">
          <el-form-item>
            <el-icon><CirclePlus /></el-icon>
          </el-form-item>
          <el-form-item>
            <h3>添加</h3>
          </el-form-item>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-plus"
              @click="showServiceManage"
              >返回</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <hr />

    <el-row>
      <el-col>
        <el-form>
          <el-form-item label="商家名称:">
            <el-col :span="9">
              <el-select placeholder="请输入商家名称"></el-select>
            </el-col>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <!-- 新增的表格部分 -->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="serviceCategory" label="服务分类" width="180">
            <template #default="scope">
              <el-select
                v-model="scope.row.serviceCategory"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in serviceCategories"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="serviceItem" label="服务项目" width="180">
            <template #default="scope">
              <el-input
                v-model="scope.row.serviceItem"
                placeholder="服务项目"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="originalPrice" label="原价（元）" width="180">
            <template #default="scope">
              <el-input
                v-model="scope.row.originalPrice"
                placeholder="原价"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="currentPrice" label="现价（元）" width="180">
            <template #default="scope">
              <el-input
                v-model="scope.row.currentPrice"
                placeholder="现价"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="serviceIntroduction" label="服务介绍">
            <template #default="scope">
              <el-input
                v-model="scope.row.serviceIntroduction"
                type="textarea"
                placeholder="服务介绍"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="operations" label="操作">
            <el-button type="danger">删除</el-button>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6" :offset="10">
        <el-button type="primary">取消</el-button>
        <el-button type="primary">保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { CirclePlus } from "@element-plus/icons-vue";

const router = useRouter();

function showServiceManage() {
  router.push("/main/servicemanage");
}

const tableData = ref([
  {
    serviceCategory: "",
    serviceItem: "",
    originalPrice: "",
    currentPrice: "",
    serviceIntroduction: "",
  },
  {
    serviceCategory: "",
    serviceItem: "",
    originalPrice: "",
    currentPrice: "",
    serviceIntroduction: "",
  },
]);

const serviceCategories = ref([
  { value: "category1", label: "车辆维修" },
  { value: "category2", label: "汽车保养" },
  { value: "category3", label: "专业洗车" },
  { value: "category4", label: "就近加油" },
]);
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
