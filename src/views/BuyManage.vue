<template>
    <div>
      <!--标题-->
      <el-row>
        <el-col :span="24">
          <h3>会员列表</h3>
        </el-col>
      </el-row>
  
      <!--表单-->
      <el-row>
        <el-col :span="24">
          <el-form :inline="true">
            <el-form-item label="商户名称">
              <el-input placeholder="请输入商户名称" clearable/>
            </el-form-item>
            <el-form-item label="门店地址">
              <el-input placeholder="请输入门店地址" clearable/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">筛选</el-button>
              <el-button type="warning">清空筛选条件</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
  
      <!--导出按钮-->
      <el-row>
        <el-col :span="24">
          <el-button type="warning">导出</el-button>
        </el-col>
      </el-row>
  
      <!--表格-->
      <el-row>
        <el-col :span="24">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="商户名称" width="180"/>
            <el-table-column prop="name" label="门店地址" width="180"/>
            <el-table-column prop="address" label="负责人"/>
            <el-table-column prop="address" label="注册时间"/>
            <el-table-column prop="address" label="审核状态"/>
            <el-table-column prop="address" label="操作">
              <el-button type="primary">详情</el-button>
              <el-button type="primary" @click="showdialog">审核</el-button>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
  
      <!--分页-->
      <el-row>
        <el-col :span="8" :offset="8">
          <el-pagination background layout="prev, pager, next" :total="1000"/>
        </el-col>
      </el-row>
  
      <el-dialog
          v-model="dialogVisible"
          title="审核"
          width="500"
      >
        <el-form label-width="auto" style="max-width: 600px">
          <el-form-item label="审核结果">
            <el-radio-group>
              <el-radio value="0">审核通过</el-radio>
              <el-radio value="1">审核不通过</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="审核说明">
            <el-input type="textarea"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">确认</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
  
      </el-dialog>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  
  //1.定义对话框是否显示变量
  let dialogVisible = ref(false)
  
  
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
  
  //2.点击审核按钮显示模态框
  function showdialog() {
    dialogVisible.value = true
  }
  </script>
  
  <style scoped>
  .el-row {
    margin-top: 20px;
  }
  </style>
  