import Home from '../views/Home.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  // umd 打包不支持懒加载的路由
  // { path: '/about', name: 'about', component: () => import('../views/About.vue') },
];
  
export default routes;