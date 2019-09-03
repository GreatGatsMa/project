<template>
    <div class="app-container">
        <mt-header fixed title="我的项目"></mt-header>
        <transition>
        <router-view></router-view>
        </transition>
        <div class="tabbar-wrap">
           <mt-tabbar>
        <router-link class="mint-tab-item" id="tab1" to="/home"><img slot="icon" src="./images/timg.jpg"><div><i class="iconfont icon-wodedangxuan"></i></div><div>111</div></router-link>
        <router-link class="mint-tab-item" id="tab2" to="/my"><img slot="icon" src="./images/timg.jpg"><div><i class="iconfont icon-icon_gouwuchemi"></i></div><div>222</div></router-link>
        <router-link class="mint-tab-item" id="tab3" to="/shopping"><img slot="icon" src="./images/timg.jpg"><div><i class="iconfont icon-shangdian-"></i></div><div>333</div></router-link>
        <router-link class="mint-tab-item" id="tab4" to="/vip"><img slot="icon" src="./images/timg.jpg"><div><i class="iconfont icon-iconfonticon-shebei"></i></div><div>444</div></router-link>
        </mt-tabbar> 
        </div>
        <!-- <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1"><img slot="icon" src="./images/timg.jpg">tab1</mt-tab-item>
        <mt-tab-item id="tab2"><img slot="icon" src="./images/timg.jpg">tab2</mt-tab-item>
        <mt-tab-item id="tab3"><img slot="icon" src="./images/timg.jpg">tab3</mt-tab-item>
        <mt-tab-item id="tab4"><img slot="icon" src="./images/timg.jpg">tab4</mt-tab-item>
        </mt-tabbar> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.app-container{
    padding-top: 40px;
    padding-bottom: 40px;
    overflow-x: hidden;
    position: relative;
}
.active{
    background-color: green;
}
.mint-tab-item{
    height: 30px;
}
.v-enter{
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
     position: absolute;
}
.v-enter-active,
.v-leave-active{
    opacity: 1;
    transition: all .5s;
   
}
.mint-tabbar{
    position: fixed
}
</style>