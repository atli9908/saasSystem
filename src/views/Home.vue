<template>
  <el-container>
    <!-- 侧边栏 -->
    <div class="my-sidbar">
    <el-aside width="180px">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-aside>
    </div>
    

    <!-- 主体 -->
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="16"><h3 class="top-title">生态居家官方旗舰店</h3></el-col>
          <el-col :span="2"><p>客服通知</p></el-col>
          <el-col :span="2"><p>系统管理</p></el-col>
          <el-col :span="2"><p>帮助指引</p></el-col>
          <el-col :span="2"><p class="top-icon"><i class="el-icon-s-fold" style="font-size:26px"></i></p></el-col>
        </el-row>
        <el-main>Main</el-main>
      </el-header>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: "home",
  components: {
    
  }
};
</script>

<style>
.my-sidbar{
  width: 180px;
 
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
.el-col{
  height: 100%;
  overflow-x: hidden;
}

.el-menu{
  height: 100%;
  border: 0 !important;
}
.top-title{
  color: royalblue;
}
.top-icon {
  float :right
}
</style>
