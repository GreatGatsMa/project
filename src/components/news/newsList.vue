<template>
<div>
    <router-link :to="'/home/newsInfo/'+item.id" class="news-wrap" v-for="item in newsList" :key="item.id">
            <div class="img-wrap">
                <img :src="item.img_url">
            </div>
            
            <div class="news-con">
            <div>{{item.title}}</div>
            <div class="detail">
            <div>{{item.add_time}}</div>
            <div><span>点击:</span>{{item.click}}</div> 
            </div>
            
            </div>
            
    </router-link>
</div>
    
</template>
<script>
export default {
    data(){
        return {
            newsList:[]
        }
    },
     methods:{
         getNewsList(){
             this.$http.get('api/getnewslist').then(res=>{
                //  console.log(res.body.message);
                 this.newsList=res.body.message;
                
             })
         }
     },
     created(){
        this.getNewsList();
     }
}
</script>
<style scoped>
.news-wrap{
    width: 100%;
    height: 80px;
    display: flex;
    overflow: hidden;
    margin-bottom: 10px;
    text-decoration: none;
}
.img-wrap{
    /* display: block; */
    flex:1;
}
.img-wrap img{
    width: 100%;
    height: auto;
}
.news-con{
    flex:3;
}
.detail{
    display: flex;
    justify-content: space-between;
}
.detail div:nth-child(1){
    flex: 70%;
}
.detail div:nth-child(2){
    flex: 20%;
}
</style>