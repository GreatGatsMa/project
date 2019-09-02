import Vue from 'vue';
import app from './App.vue';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
import { Tabbar, TabItem } from 'mint-ui';
import './fonts/iconfont.css';
import { Swipe, SwipeItem } from 'mint-ui';
import router from './router.js';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import VueResource from 'vue-resource';
Vue.use(VueResource);
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.http.options.root = 'http://www.liulongbin.top:3005'
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router,
  
})