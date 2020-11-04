<template>
  <el-container style="height:100%" >
    <!-- 侧边栏 -->
    <my-sidbar/>
    
    <!-- 主体 -->
    <el-container>
      <!-- 头 -->
      <el-header>
        <my-header/>
      </el-header>

      <!-- 内容 -->
      <el-main style="padding: 8px">
        <el-row :gutter="10">
          <!-- 左侧内容 -->
          <el-col :span="19" class="left-content hidden-sm-and-down">
            <el-row :gutter="10">
              <el-col :span="15">
                <div class="bg-purple card-1">
                  <h5>上午好，管理员！</h5>
                    <el-row :gutter="50">
                      <el-col :span="8">
                        <a href="#">0</a>
                        <h6>待付款订单</h6>
                      </el-col>
                      <el-col :span="8">
                        <a href="#">0</a>
                        <h6>待发货订单</h6>
                      </el-col>
                      <el-col :span="8">
                        <a href="#">0</a>
                        <h6>待处理售后</h6>
                      </el-col>
                    </el-row>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="card-2 bg-purple">
                  <a href="#">获取页面地址</a>
                  <el-row>
                    <el-col :span="12">
                      <div>
                        <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                        <p>— 小程序 —</p>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div>
                        <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                        <p>— 公众号 —</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="card-3 bg-purple">
                  <h5>{{this.home_cygn.title}}</h5>
                  <el-row>
                    <el-col :span="3" v-for="(item,index) in home_cygn.msg" :key="index">
                      <img :src="item.imgsrc" alt="">
                      <p>{{item.des}}</p>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <div class="card-4 bg-purple">
              <el-row class="card-4-1">
                <el-col :span="6">
                  <div>
                    <h5>{{this.home_yxhd.title}}</h5>
                  </div>
                </el-col>
                <el-col :span="6" :offset="12">
                  <div style="text-align:right">
                    <a href="#">{{this.home_yxhd.childTitle}}</a>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8" v-for="(item,index) in home_yxhd.msg" :key="index">
                  <div class="bg-purple">
                    <el-row :gutter="0">
                      <el-col :span="7">
                        <div><img :src="item.imgsrc" alt=""></div>
                      </el-col>
                      <el-col :span="16">
                        <div>
                          <h6 class="card-4-t2">{{item.msg_title}}</h6>
                          <p>{{item.des}}</p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>

          <!-- 右侧内容 -->
          <el-col :span="5" class="right-content">
            <div class="bg-purple right-card">
              <el-row :gutter="20" class="right-card-title">
                <el-col :span="12">
                  <h5>公告</h5>
                </el-col>
                <el-col :span="12" style="text-align:right">
                  <a href="#" style="color:#bbb">更多</a>
                </el-col>
              </el-row>
              <el-row :gutter="10" class="right-card-msg">
                <el-col :span="18" class="my-ellipsis">
                  <a href="#">【通知】小程序登陆访问设置aaaaaaaaaa</a>
                </el-col>
                <el-col :span="6">
                  <span>16/05</span>
                </el-col>
              </el-row>
            </div> 
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import mySidbar from '../components/sidbar'
import myHeader from '../components/header'

export default {
  name: "home",
  data(){
    return {
      home_cygn:{
        title:'常用功能',
        msg:[
          {
            imgsrc:'/img/1.png',
            des:'发布商品'
          },
          {
            imgsrc:'/img/2.png',
            des:'库存管理'
          },
          {
            imgsrc:'/img/4.png',
            des:'消息通知'
          },
          {
            imgsrc:'/img/5.png',
            des:'营销概况'
          },
          {
            imgsrc:'/img/6.png',
            des:'微客服'
          }
        ]
      },
      home_yxhd:{
        title:'营销活动',
        childTitle:'营销中心',
        msg:[
          {imgsrc:'/img/yxhd/1.png',msg_title:'拼团',des:'拼单成团，裂变获客，促转化'},
          {imgsrc:'/img/yxhd/2.png',msg_title:'砍价',des:'邀请朋友砍价，裂变促销量'},
          {imgsrc:'/img/yxhd/3.png',msg_title:'限时折扣',des:'商品限时打折促销'},
          {imgsrc:'/img/yxhd/4.png',msg_title:'满减满折',des:'拼单成团，裂变获客，促转化'},
          {imgsrc:'/img/yxhd/5.png',msg_title:'满减邮',des:'拼单成团，裂变获客，促转化'},
          {imgsrc:'/img/yxhd/6.png',msg_title:'优惠券',des:'拼单成团，裂变获客，促转化'},
        ]
      }
    }
  },
  components: {
    mySidbar,
    myHeader
  }
};
</script>

<style>

@media screen and (max-width: 100px) {
    .hidden-sm-and-down{
      display: none;
    }
}

.bg-purple{
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgb(240, 240, 240);
  margin: 3px 0px;
  padding: 10px;
}


.left-content a{
  color: steelblue;
}
.card-1,.card-2{
  height: 160px;
  overflow: hidden;
}
.card-1 .el-row{
  text-align: center;
  padding: 40px 0;
}
.card-1 a{
  font-size: 26px !important;
  font-weight: 600;
}
.card-1 h6{
  margin-top: 20px;
}
.card-2{
  text-align: center;
}
.card-2 img{
  width: 130px;
  height: 130px;
}
.card-2 a{
  padding-left: 100px;
}
.card-3 .el-row{
  text-align: center;
  margin-top: 20px;
}
.card-3 img,.card-4 img{
  height: 60px;
  width: 60px;
  border-radius: 5px;
}
.card-4 h6{
  font-size: 16px;
  margin: 8px 0;
}
.card-4-1{
  margin-bottom: 10px;
}
.right-card-title{
  margin-bottom: 10px;
}
.right-card-msg{
  margin-top: 5px;
}
.right-card-msg a ,.right-card-msg span{
  color: #5a5c5f;
}
</style>
