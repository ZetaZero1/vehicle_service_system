<template>
  <div>
    <!--标题-->
    <el-row>
      <el-col :span="12">
        <h3>商户信息</h3>
      </el-col>
      <el-col :span="2" :offset="10">
        <el-button type="primary" @click="goBack">返回</el-button>
      </el-col>
    </el-row>

    <!--描述列表-->
    <el-row>
      <el-col :span="24">
        <el-descriptions title="商户信息" :column="2" border>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">商户名称</div>
            </template>
            {{ route.query.buyName }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">营业执照号码</div>
            </template>
            {{ route.query.buyLicenseNumber }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">负责人</div>
            </template>
            {{ route.query.header }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">负责人手机号</div>
            </template>
            {{ route.query.phone }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">身份证号</div>
            </template>
            {{ route.query.headerIdCard }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">经营区域</div>
            </template>
            {{ route.query.area }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">注册时间</div>
            </template>
            {{ formatDate(route.query.createTime) }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">审核状态</div>
            </template>
            {{
              route.query.status === 0
                ? "未审核"
                : route.query.status === 1
                ? "已通过"
                : "已拒绝"
            }}
          </el-descriptions-item>
          <el-descriptions-item :span="2" align="center">
            <template #label>
              <div class="cell-item">详细地址</div>
            </template>
            {{ route.query.buyAddress }}
          </el-descriptions-item>
          <el-descriptions-item :span="2" align="center">
            <template #label>
              <div class="cell-item">商户介绍</div>
            </template>
            {{ route.query.introduction }}
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>

    <!--商家图片-->
    <el-row>
      <el-col :span="24">
        <h3>商家图片</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <span class="sp">门面照片</span>
        <el-image
          style="width: 200px; height: 200px"
          :src="url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </el-col>
      <el-col :span="6">
        <span class="sp">营业执照</span>
        <el-image
          style="width: 200px; height: 200px"
          :src="url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </el-col>
      <el-col :span="6">
        <span class="sp">身份证正反面照片</span>
        <el-image
          style="width: 200px; height: 200px"
          :src="url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </el-col>
      <el-col :span="6">
        <el-image
          style="width: 200px; height: 200px"
          :src="url"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          fit="cover"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
/* 获取当前路由对象 */
const route = useRoute();

const router = useRouter();
console.log(route.query);

const url =
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";

function goBack() {
  router.replace("/main/buymanage"); // 返回上一页
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
.sp {
  vertical-align: top;
  margin: 10px;
}
.el-row {
  margin-top: 20px;
}
</style>
