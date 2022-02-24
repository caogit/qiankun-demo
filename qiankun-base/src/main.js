import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 
import {registerMicroApps,start} from 'qiankun'

const apps =[
  {
    name:'vueApp', // 微应用的名称，唯一
    entry:'//localhost:10001', // 默认会加载这个html，解析里面的js 动态的执行 （子应用必须支持跨域）
    container:'#vue',  // 微应用的容器的节点，告诉他我要挂载到哪个节点
    activeRule:'/vue',     // 激活规则
  },
  {
    name:'viteApp', // 微应用的名称，唯一
    entry:'//localhost:3000', // 默认会加载这个html，解析里面的js 动态的执行 （子应用必须支持跨域）
    container:'#vue',  // 微应用的容器的节点，告诉他我要挂载到哪个节点
    activeRule:'/vite',     // 激活规则
  }
]

registerMicroApps(apps) // 注册应用
start() // 开启


Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
