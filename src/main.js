// 引入vue
import { createApp } from 'vue'
// 引入app.vue组件
import App from './App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
// 引入element-plus样式
import 'element-plus/dist/index.css'
// 引入网络请求对象
import axios from 'axios'
// 引入全局的样式文件
import '@/assets/global.css'

// 引入路由
import router from './router'

//创建应用对象
const app = createApp(App)

// 全局挂载
app.config.globalProperties.$http = axios

// 使用element-plus
app.use(ElementPlus)

// 使用路由
app.use(router)

//挂载应用对象到 #app这个元素上
app.mount('#app')
