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
                <p>[ 管理员 ]</p>
                <ul>
                  <a href="#">个人中心</a>
                  <a href="#">|</a>
                  <a href="#">退出</a>
                </ul>   
              </div>
            </div>

            <!-- 功能导航 -->
            <div>
              <el-menu-item index="/">
                <i class="el-icon-s-shop"></i>
                <span slot="title">概览</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-goods"></i>
                  <span>商品</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/goodslist">商品库列表</el-menu-item>
                  <el-menu-item index="/goodsgroup">商品分组</el-menu-item>
                  <el-menu-item index="/goodstag">商品标签</el-menu-item>
                  <el-menu-item index="/goodscomment">商品评论</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>订单</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">发货管理</el-menu-item>
                  <el-menu-item index="3-2">售后订单</el-menu-item>
                  <el-menu-item index="3-3">历史订单</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-news"></i>
                  <span>库存</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/inventory">门店库存</el-menu-item>
                  <el-menu-item index="4-2">入库单</el-menu-item>
                  <el-menu-item index="4-3">出库单</el-menu-item>
                  <el-menu-item index="4-4">库存查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-user-solid"></i>
                  <span>客户</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">全部客户</el-menu-item>
                  <el-menu-item-group title="权益管理">
                    <el-menu-item index="5-2">会员设置</el-menu-item>
                    <el-menu-item index="5-3">会员权益</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="资产管理">
                    <el-menu-item index="5-4">积分管理</el-menu-item>
                    <el-menu-item index="5-5">储值管理</el-menu-item>
                  </el-menu-item-group>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-present"></i>
                  <span>营销</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">营销中心</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-pie-chart"></i>
                  <span>数据</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item-group title="店铺概况">
                    <el-menu-item index="7-1">数据概览</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="商品分析">
                    <el-menu-item index="7-2">商品概览</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="客群分析">
                    <el-menu-item index="7-3">属性分析</el-menu-item>
                  </el-menu-item-group>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>设置</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="8-1">商户信息</el-menu-item>
                  <el-menu-item-group title="系统设置">
                    <el-menu-item index="8-2">网店设置</el-menu-item>
                    <el-menu-item index="8-3">账号权限</el-menu-item>
                    <el-menu-item index="8-4">操作日志</el-menu-item>
                  </el-menu-item-group>
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
           openeds:['']
        }
    },
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