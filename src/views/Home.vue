<template>
  <el-container style="height:100%" >
    <!-- 侧边栏 -->
    <my-sidbar/>
    
    <!-- 主体 -->
    <el-container>
      <!-- 头 -->
      <el-header>
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
      </el-header>
      <!-- 内容 -->
      <el-main style="padding:8px">
        <div class="left-content">
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
                <h5>常用功能</h5>
                <el-row>
                  <el-col :span="3">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                    <p>发布商品</p>
                  </el-col>
                  <el-col :span="3">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                    <p>发布商品</p>
                  </el-col>
                  <el-col :span="3">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                    <p>发布商品</p>
                  </el-col>
                  <el-col :span="3">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                    <p>发布商品</p>
                  </el-col>
                  <el-col :span="3">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                    <p>发布商品</p>
                  </el-col>
                  <el-col :span="3">
                    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="">
                    <p>发布商品</p>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <div class="card-4 bg-purple">
            <el-row class="card-4-1">
              <el-col :span="6">
                <div>
                  <h5>营销活动</h5>
                </div>
              </el-col>
              <el-col :span="6" :offset="12">
                <div style="text-align:right">
                  <a href="#">营销中心</a>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="bg-purple">
                  <el-row :gutter="0">
                    <el-col :span="7">
                      <div><img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""></div>
                    </el-col>
                    <el-col :span="16">
                      <div>
                        <h6 class="card-4-t2">拼团</h6>
                        <p>拼单成团，裂变获客，促转化</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="bg-purple">
                  <el-row :gutter="0">
                    <el-col :span="7">
                      <div><img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""></div>
                    </el-col>
                    <el-col :span="16">
                      <div>
                        <h6 class="card-4-t2">拼团</h6>
                        <p>拼单成团，裂变获客，促转化</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="bg-purple">
                  <el-row :gutter="0">
                    <el-col :span="7">
                      <div><img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""></div>
                    </el-col>
                    <el-col :span="16">
                      <div>
                        <h6 class="card-4-t2">拼团</h6>
                        <p>拼单成团，裂变获客，促转化</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="bg-purple">
                  <el-row :gutter="0">
                    <el-col :span="7">
                      <div><img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""></div>
                    </el-col>
                    <el-col :span="16">
                      <div>
                        <h6 class="card-4-t2">拼团</h6>
                        <p>拼单成团，裂变获客，促转化</p>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="right-content">

        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import mySidbar from '../components/sidbar'
import myHeader from '../components/header'

export default {
  name: "home",
  components: {
    mySidbar,
    myHeader
  }
};
</script>

<style>

.el-header{
  line-height: 50px;
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

.bg-purple{
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgb(240, 240, 240);
  margin: 3px 0px;
  padding: 10px;
}

.left-content{
  width: 80%;
}
.card-1,.card-2{
  height: 160px;
}
.card-1 .el-row{
  text-align: center;
  padding: 40px 0;
}
.card-1 a{
  color: steelblue;
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
  color: steelblue;
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
.card-4 a{
  color: steelblue;
}
.card-4 h6{
  font-size: 16px;
  margin: 8px 0;
}
.card-4-1{
  margin-bottom: 10px;
}

.right-content{
  width: 18%;
  height: 500px;
  background-color: tan;
  float: right;
}
</style>
