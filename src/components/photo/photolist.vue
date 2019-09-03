<template>
    <div>
        <div class="box1">
            <div class="wrap">
                <ul>
                <li><a href="">1111</a></li>
                <li><router-link to="/">2可滑动</router-link></li>
                <li><router-link to="/">2可滑动</router-link></li>
                <li><router-link to="/">2可滑动</router-link></li>
                <li><router-link to="/">2可滑动</router-link></li>
                <li><router-link to="/">2可滑动</router-link></li>
                <li><router-link to="/">2可滑动</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    /* .active{
        background-color: skyblue;
    } */
    .box1{
        width: 100%;
        height: 40px;
        overflow: hidden;
        /* background-color: skyblue; */
    }
    .wrap{
        width: 100%;
        height: 50px;
        overflow-x: scroll;
    }
    ul{
        display: flex;
        width: 200%;
    }
    li{
        list-style: none;
        /* width: 30%; */
        flex: 1;
        box-sizing: border-box;
        font-size: 15px;
        line-height: 30px;
        text-decoration: none;
    }
    *{
        margin: 0;
        padding: 0;
    }
</style>