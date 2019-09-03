import Vue from 'vue';

import VueRouter from 'vue-router';


Vue.use(VueRouter);

import home from './components/tabbar/home.vue';
import my from './components/tabbar/my.vue';
import shopping from './components/tabbar/shopping.vue';
import vip from './components/tabbar/vip.vue';
import newsList from './components/news/newsList.vue';
import newsInfo from './components/news/newsInfo.vue';
import photolist from './components/photo/photolist.vue'


var router = new VueRouter({
 
    routes:[
      {path:'/',redirect:'/home'},
      {path:'/home',component:home},
      {path:'/my',component:my},
      {path:'/shopping',component:shopping},
      {path:'/vip',component:vip},
      {path:'/home/newsList',component:newsList},
      {path:'/home/newsInfo/:id',component:newsInfo},
      {path:'/home/photolist',component:photolist}
    ],
    linkActiveClass:'active'
  })
  export default router;