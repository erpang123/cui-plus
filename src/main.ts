import { createApp } from 'vue'
import ElementPLus from 'element-plus'
import 'element-plus/dist/index.css'
// 高亮脚本的样式
import 'highlight.js/styles/github.css';

import demoView from '@/components/demoView.vue'
import CuiPlus from '~'
import router from './router'
import App from './App.vue'


const app = createApp(App)

app.component('demoView', demoView)

app.use(router)
app.use(ElementPLus)
app.use(CuiPlus)

app.mount('#app')
