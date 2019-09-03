<template>
    <div>
        <mt-swipe :auto="3000000">
        <mt-swipe-item v-for="item in msg" :key="item.id"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="grid-con">
            <div class="grid-1">
            <div class="grid"><router-link to="home/newsList">新闻资讯</router-link></div>
            <div class="grid"><router-link to="home/photolist">美图分享</router-link></div>
            <div class="grid">3</div>
            </div>
            <div class="grid-2">
            <div class="grid">4</div>
            <div class="grid">5</div>
            <div class="grid">6</div>
            </div>
            <div class="grid-3">
            <div class="grid">7</div>
            <div class="grid">8</div>
            <div class="grid">9</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        this.getSwiper();
    },
    data(){
        return {
            msg:[],
        }
    },
    methods:{
        getSwiper(){
            this.$http.get('api/getlunbo').then(res=>{
                this.msg=res.body.message;
            })
        }
    },

    
}
</script>
<style>
body{
    margin: 0 0;
    padding: 0;
}
.mint-swipe{
    width: 100%;
    height: 160px;
}
.mint-swipe-item img{
height: 100%;
width: auto;
}
.grid-con{
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 300px;

}
.grid-1{
    display: flex;
    flex: 1;
}
.grid-2{
    display: flex;
    flex: 1;
}
.grid-3{
    display: flex;
    flex: 1;
}
.grid{
    /* display: flex; */
    flex: 1;
}

</style>