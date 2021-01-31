<template>
  <div> 
    <div class="my-sidbar">
      <el-aside width="160px">
        <el-col>
          <el-menu
            router
            :default-active="activeIndex"
            :default-openeds="openeds"
            class="el-menu-vertical-demo"
            background-color="#324157"
            text-color="#fff"
            active-text-color="#ffd04b">

            <!-- 头像 -->
            <div class="my-head" style="height:140px">
              <div class="block">
                <el-avatar class="headicon" :size="60" :src="circleUrl">
                </el-avatar>
              </div>
              <div class="mymsg">
                <h4 style="font-weight:normal;">{{adminName}}</h4>
                <p>【 {{userJob}} 】</p>
                <ul>
                  <a href="#">个人中心</a>
                  <a href="#">|</a>
                  <a href="#" @click="logout()">退出</a>
                </ul>   
              </div>
            </div>

            <!-- 功能导航 -->
            <div>
              <el-menu-item index="/">
                <i class="el-icon-s-shop"></i>
                <span slot="title">概览</span>
              </el-menu-item>
              <el-submenu :index="router.index" v-for="(router,index) in $store.state.routers" v-if="router.path!=='/'">
                <template slot="title">
                  <i :class="router.icon"></i>
                  <span>{{router.title}}</span>
                </template>
                <el-menu-item-group v-if="router.children&&router.children.length>0">
                  <el-menu-item v-for="(child,index) in router.children" :index="child.path">{{child.title}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </div>
          </el-menu>
        </el-col>
      </el-aside>
    </div>
  </div>
</template>

<script>
export default {
    name:'sidbar',
    data(){
        return {
           adminName:'atli',
           circleUrl:'/img/timg.jpg' ,
           activeIndex:this.$route.path,
           openeds:[]
        }
    },
    computed:{
      userJob(){
        return this.$store.state.role==='staff'?'公司职员 ':'管理员 '
      }
    },
    methods:{
      logout(){
        localStorage.removeItem('user');
        this.$router.replace({path:'/login'});
      }
    }
}
</script>

<style>
.my-sidbar{
  width: 160px;
  overflow: hidden;
 
}
.my-head{
  background-color: #2e314e;
  text-align: center;
  padding-top: 20px;
}

.mymsg{
  padding-top: 2px;
  text-align: center;
  color: aliceblue;
}
.mymsg ul{
  overflow: hidden;
  padding-left: 0;
  padding-top: 5px;
  
}
.mymsg a{
  list-style: none;
  padding: 5px;
  color: cadetblue;
  display: inline;
}

.el-aside{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  height: 100%;
  min-height: calc(100vh);
  background-color: #324157 !important;
}

.el-submenu__title{
  height: 40px !important;
  line-height: 40px !important;
}
.el-col{
  height: 100%;
  overflow-x: hidden;
}

.el-menu{
  height: 100%;
  border: 0 !important;
}

</style>