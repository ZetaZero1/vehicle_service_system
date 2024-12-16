<template>
  <div class="container">
    <el-form
      ref="loginForm"
      label-width="auto"
      :model="loginFormData"
      :rules="rules"
    >
      <h3>车服管理系统登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginFormData.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginFormData.password" />
      </el-form-item>

      <el-form-item style="display: flex; justify-content: center">
        <el-button type="primary" @click="submitLoginForm"> 登录 </el-button>
        <el-button @click="reset">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
//1.引入响应式函数
import { ref } from "vue";

//1.2 引入路由器
import { useRouter } from "vue-router";

//引入消息提示组件
import { ElMessage } from "element-plus";

//获取路由器对象
const router = useRouter();

//获取表单对象
const loginForm = ref();

//2.定义表单数据对象
const loginFormData = ref({
  username: "admins",
  password: "123456",
});

//3.定义校验规则
const rules = ref({
  username: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    { min: 6, max: 20, message: "用户名必须是6到20个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, message: "密码最少6个字符", trigger: "blur" },
  ],
});

//4.定义取消按钮的重置方法
function reset() {
  //重置表单 1.获取表单对象调用resetfields()方法
  loginForm.value.resetFields();
}

//5.登录
function submitLoginForm() {
  //1.只有表单通过验证才能进行表单提交
  loginForm.value.validate((valide) => {
    if (valide) {
      //校验通过：发送请求到后端服务器
      //todo
      //跳转主页
      ElMessage.success("登录成功！");
      router.replace("/main");
    } else {
      //校验不通过
      ElMessage.error("你的用户名或者密码不符合规则，请重新输入！");
      return false;
    }
  });
}
</script>

<style scoped>
.container {
  height: 100vh;
  background-image: url(@/assets/sunfudeju.jpg);
  background-size: 100% 100%;
  /*设置背景图片的大小*/
  overflow: hidden;
}

.el-form {
  width: 450px;
  margin: 150px auto;
  /*居中，必须设置宽度才有效果*/
  background-color: rgba(255, 255, 255, 0.6);
  padding: 50px;
  /*设置内边距，让内容和内边框的距离远一些*/
  border-radius: 10px;
}

h3 {
  text-align: center;
  margin-bottom: 30px;
}
</style>
