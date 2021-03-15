<template>
    <div  class='wrap'>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <van-tabs v-model="active" color='#0AA7F4' title-active-color='#0AA7F4'>
            <van-tab title="专家列表">
                <div class="content">
                    <van-row class="list" type='flex' align='center'>
                        <van-col span="14">
                            <img src="../../../public/img/1.png" alt="">
                            <div class="info">
                                <h5 class="name">吴小雅</h5>
                                <p class="job">副主任医生 心理主任</p>
                                <p class="sex">女姓 36岁</p>
                            </div>
                        </van-col>
                        <van-col span="10">
                            <button class="btn">预约/咨询</button>
                        </van-col>
                    </van-row>
                    <van-row class="list" type='flex' align='center'>
                        <van-col span="14">
                            <img src="../../../public/img/1.png" alt="">
                            <div class="info">
                                <h5 class="name">吴小雅</h5>
                                <p class="job">副主任医生 心理主任</p>
                                <p class="sex">女姓 36岁</p>
                            </div>
                        </van-col>
                        <van-col span="10">
                            <button class="btn">预约/咨询</button>
                        </van-col>
                    </van-row>
                </div>
            </van-tab>
            <van-tab title="咨询记录">
                <div class="content">
                    <div class="log">
                        <img src="../../../public/img/1.png" alt="">
                        <div class="info">
                            <h5 class="name"><span class="tag">咨询</span>吴小雅<span class="status">已回复</span></h5>
                            <p class="msg">专家您好，有些问题想请教您，请问什么...</p>
                            <p class="time">2020-05-16</p>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:'',
            active:0
        }
    }
}
</script>

<style lang="less" scoped>
img{
    height: 49px;
    width: 49px;
    line-height: 50px;
    border-radius: 50%;
    margin-right: 12px;
}
p{
    font-weight: 400;
    color: #999999;
}
.wrap{
    background-color: #FFFFFF;
}
/deep/.van-tabs__wrap{
    border-bottom: 1px solid #eee;
}
.content{
    padding: 0 15px;
}
.list,.log{
    border-bottom: 1px solid #eee;
    margin-top: 20px;
    padding-bottom: 15px;
    .name{
        font-size: 17px;
        font-weight: 400;
        color: #333333;
    }
    .info{
        display: inline-block;
    }
    p{
        font-size: 13px;
    }
    .job,.msg{
        margin: 10px 0;
    }
    button{
        border: 0;
        background-color: #0AA7F4;
        width: 76px;
        height: 35px;
        border-radius: 3px;
        font-size: 14px;
        color: #FFFFFF;
        float: right;
    }
    .tag{
        padding:5px;
        color: #fff;
        background-color:#0AA7F4 ;
        border-radius: 5px;
        margin-right:10px ;
    }
    .status{
        font-size: 13px;
        font-weight: 400;
        color: #999999;
        margin-left: 10px;
    }
    .msg{
        font-size: 14px;
    }
}
</style>