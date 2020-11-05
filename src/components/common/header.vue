<template>
    <!-- 头 -->
      <el-row>
        <el-col :span="18">
          <h3 class="top-title">生态居家官方旗舰店</h3>
        </el-col>
        <el-col :span="6">
          <div style="width:400px">
            <a href="#">客服通知</a>
            <a href="#">系统管理</a>
            <a href="#">帮助指引</a>
            <a href=""><i class="el-icon-s-operation" style="font-size:16px"></i></a>
          </div>  
        </el-col>
      </el-row>
</template>

<script>
export default {
    
}
</script>

<style>
.el-header{
  line-height: 60px;
  border-bottom: 2px solid rosybrown;
  background-color: #fff;
}
.top-title{
  color:slategrey;
}
.top-icon {
  float :right
}
.el-col-6 a{
  margin:0px 6px;
  color: #324157;
}
</style>
</style>