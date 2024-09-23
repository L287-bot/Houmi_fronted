import { createApp } from 'vue'
import App from './App.vue'
import {NavBar} from "vant";
import { createApp } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
/**
 * 项目入口 挂载  App from './App.vue'
 */
const  app=createApp(App)
app.use(NavBar)
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app')
