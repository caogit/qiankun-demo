import { createApp } from 'vue'
import { createRouter, createWebHistory, RouterHistory, Router } from 'vue-router';
import App from './App.vue'
import routes from './router/index'

let instance:any
let history: any;
let router: Router;

function render(props:any){
  const { container } = props;
    history = createWebHistory((window as any).__POWERED_BY_QIANKUN__ ? '/vite' : '/');
    router = createRouter({
        history,
        routes,
      });
    instance = createApp(App)
  instance.use(router);
  instance.mount(typeof(container) === 'string' ? container : (container.querySelector("#app") as Element));

}

if (!(window as any).__POWERED_BY_QIANKUN__) {
    render({ container: '#app' });
  }


export async function bootstrap() {
    console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
  }
  
  export async function mount(props: any) {
    render(props);
  }
  
  export async function unmount() {
    instance.unmount();
    if(instance._container){
      instance._container.innerHTML = '';
    }
    history.destroy();
  }