<template>
    <div>
        <h1>发表评论</h1>
        <div class="text-wrap">
            <textarea name="" maxlength="140" placeholder="随便说两句吧"></textarea>
        </div>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt" v-for="(item,i) in comments" :key="item.add_time">
            <div class="user"><span>第{{i+1}}楼&nbsp;</span><span>用户:{{item.user_name}}&nbsp;</span><span>发表时间:{{item.add_time}}</span></div>
            <div class="content">{{item.content==='undefind'?'111':item.content}}</div>
        </div>
        <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageIndex:1,
            comments:[],
        }
    },
    created(){
        this.getCmt();
    },
    methods:{
        getCmt(){
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(res=>{
                // console.log(res.body.message)
                this.comments=res.body.message;
            })
        }
    },
    props:['id']
}
</script>
<style scoped>
.text-wrap{
    width: 100%;
    height: 80px;
    margin:5px 0;
    overflow:hidden;
    
}
textarea{
        width:100%;
        height:100%;
        border:1px solid red;
        box-sizing:border-box;
        
    }
.user{
    font-size:12px;
    background-color:#ccc;
}
</style>