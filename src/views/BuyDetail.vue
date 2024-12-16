<template>
  <div>
    <!--标题-->
    <el-row>
      <el-col :span="12">
        <h3>商户信息</h3>
      </el-col>
      <el-col :span="2" :offset="10">
        <el-button type="primary">返回</el-button>
      </el-col>
    </el-row>

    <!--描述列表-->
    <el-row>
      <el-col :span="24">
        <el-descriptions title="商户信息" :column="2" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">商户名称</div>
            </template>
            店小友
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">营业执照号码</div>
            </template>
            18100000000
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">负责人</div>
            </template>
            张三
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">负责人手机号</div>
            </template>
            16556165112
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">身份证号</div>
            </template>
            45165165789415
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">经营区域</div>
            </template>
            郑州高新区
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">注册时间</div>
            </template>
            2024-12-20
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">审核状态</div>
            </template>
            已通过
          </el-descriptions-item>
          <el-descriptions-item :span="2">
            <template #label>
              <div class="cell-item">详细地址</div>
            </template>
            郑州高新区莲花街孙一鸣小区
          </el-descriptions-item>
          <el-descriptions-item :span="2">
            <template #label>
              <div class="cell-item">商家介绍</div>
            </template>
            家有恶犬-->孙一鸣，请勿靠近
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
const url =
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
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
