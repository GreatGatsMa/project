import Vue from 'vue';

import VueRouter from 'vue-router';


Vue.use(VueRouter);

import com1 from './components/tabbar/com1.vue';
import com2 from './components/tabbar/com2.vue';
import com3 from './components/tabbar/com3.vue';
import com4 from './components/tabbar/com4.vue';
import newsList from './components/news/newsList.vue';
import newsInfo from './components/news/newsInfo.vue'


var router = new VueRouter({
 
    routes:[
      {path:'/',redirect:'/com1'},
      {path:'/com1',component:com1},
      {path:'/com2',component:com2},
      {path:'/com3',component:com3},
      {path:'/com4',component:com4},
      {path:'/com1/newsList',component:newsList},
      {path:'/com1/newsInfo/:id',component:newsInfo}
    ],
    linkActiveClass:'active'
  })
  export default router;