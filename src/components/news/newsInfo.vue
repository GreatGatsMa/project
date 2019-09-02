<template>
    <div>
        <div class="news-con">
            <h1>{{msg.title}}</h1>
            <div class="detail">
            <div>{{msg.add_time}}</div>
            <div><span>点击:</span>{{msg.click}}</div> 
            </div>
        </div>
        <div class="content" v-html="msg.content"></div>
        <commet :id=this.id></commet>
    </div>
</template>
<script>
import commet from '../subcom/commet.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,
            msg:{},
        }
    },
    methods:{
        getNewsinfo(){
            this.$http.get('api/getnew/'+this.id).then(res=>{
                // console.log(res.body.message[0])
                this.msg=res.body.message[0];
            })
        }
    },
    created(){
        this.getNewsinfo();
    },
    components:{
        commet
    }
}
</script>
<style scoped>
h1{
    text-align: center;
    font-size:20px;
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