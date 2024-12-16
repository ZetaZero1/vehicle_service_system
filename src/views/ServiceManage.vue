<template>
  <div>
    <!--发布服务按钮-->
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="PushTask">发布服务</el-button>
      </el-col>
    </el-row>

    <!--表单-->
    <el-row>
      <el-col>
        <el-form inline="true">
          <el-form-item label="服务项目">
            <el-input
              v-model="serviceName"
              placeholder="请输入服务项目"
            ></el-input>
          </el-form-item>

          <el-form-item label="服务分类">
            <el-select
              style="width: 150px"
              v-model="form.region"
              placeholder="全部"
            >
              <el-option label="全部" value="0" />
              <el-option label="车辆维修" value="1" />
              <el-option label="汽车保养" value="2" />
              <el-option label="专业洗车" value="3" />
              <el-option label="就近加油" value="4" />
            </el-select>
          </el-form-item>

          <el-form-item label="商家名称">
            <el-input
              v-model="serviceName"
              placeholder="请输入商家名称"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
          <el-button type="primary">清空</el-button>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="服务编号" />
          <el-table-column prop="name" label="服务项目" />
          <el-table-column prop="address" label="商家名称" />
          <el-table-column prop="date" label="服务分类" />
          <el-table-column prop="date" label="原价（元）" />
          <el-table-column prop="date" label="现价（元）" />
          <el-table-column prop="date" label="服务介绍" />
          <el-table-column prop="date" label="创建时间" />
          <el-table-column fixed="right" label="操作">
            <template #default>
              <el-button type="primary" @click="centerDialogVisible = true">
                删除
              </el-button>
              <el-button type="primary"> 修改 </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-dialog
      v-model="centerDialogVisible"
      title="提示"
      width="500"
      align-center
    >
      <span>删除后将无法回复，请确认是否删除？</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

//获取路由对象
const router = useRouter();

const form = ref({
  region: "",
});
const centerDialogVisible = ref(false);

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

function PushTask() {
  router.push("/main/pushtask");
}
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
