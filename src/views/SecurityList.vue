<template>
    <div>
      <!--标题-->
      <el-row>
        <el-col :span="24">
          <h3>救援任务</h3>
        </el-col>
      </el-row>
  
      <!--救援任务表单-->
      <el-row justify="center">
        <el-col :span="24">
          <el-form :inline="true">
            <el-form-item label="订单编号">
              <el-input placeholder="请输入订单编号" clearable/>
            </el-form-item>
            <el-form-item label="服务内容">
              <el-input placeholder="请输入服务内容" clearable/>
            </el-form-item>
            <el-form-item>
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
      </el-row>
  
      <el-row>
        <el-col :span="24">
          <el-form :inline="true">
          <el-form-item label="评价星级">
            <el-select  style="width: 150px" v-model="form.region" placeholder="全部">
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
        <el-col :span="24">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="求助人" />
            <el-table-column prop="name" label="救援类型" />
            <el-table-column prop="address" label="车牌"/>
            <el-table-column prop="address" label="救援位置"/>
            <el-table-column prop="address" label="终点位置"/>
            <el-table-column prop="address" label="申请时间"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
  
      <!--分页-->
      <el-row>
        <el-col :span="8" :offset="16">
          <el-pagination background layout="prev, pager, next" :total="1000"/>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script setup>
      import { ref } from 'vue'
      const form = ref({
        region: '',
      })
  
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
  </script>
  
  <style scoped>
      .el-row{
         margin-top: 20px;
       }
  </style>
  