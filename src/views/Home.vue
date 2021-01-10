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
        <transition>
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import mySidbar from '../components/common/sidbar'
import myHeader from '../components/common/header'

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

<style scoped>
.v-enter-active {
  transition: all .5s ease;
}
.v-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.v-enter, .v-leave-to {
  
  opacity: 0;
}
</style>