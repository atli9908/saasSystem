<template>
    <div class="bg-purple">
        <h5>客户属性分布</h5>
        <div class="content-wrap">
            <div class="bg-purple box1 jianju">
                <el-row>
                    <el-col :span="2">
                        <span>数据解读</span>
                    </el-col>
                    <el-col :span="20">
                        <span>该数据为您显示：具体的客户画像、区域分布、了解客户构成，有针对性进行客户营销，提高店铺活跃度。</span>
                        <ol>
                            <li>关注客户构成比例，知道会员、粉丝分布情况；</li>
                            <li>依据消费等级情况，清楚店铺收入来源主要群体，针对性做客户营销；</li>
                            <li>通过会员、粉丝新增情况，及时反馈客户经营变化。</li>
                        </ol>
                    </el-col>
                </el-row>
            </div>
            <div class="bg-purple box2">
                <h5>客户属性 <i class="el-icon-question"></i></h5>
                <el-divider></el-divider>
                <div class="rwo-group">
                    <el-row>
                        <el-col :span="12">
                            <span class="child-title">性别比例 <i class="el-icon-question"></i></span>
                            <div class="child-row">
                                <el-row>
                                    <el-col :span="8">
                                        <img src="/img/icon/boy.png" alt="">
                                        <p>12%</p>
                                    </el-col>
                                    <el-col :span="8">
                                        <img src="/img/icon/girl.png" alt="">
                                        <p>48%</p>
                                    </el-col>
                                    <el-col :span="8">
                                        <img src="/img/icon/sex.png" alt="">
                                        <p>40%</p>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <span class="child-title">会员比例 <i class="el-icon-question"></i></span>
                            <div class="child-row">
                                <el-row>
                                    <el-col :span="12">
                                        <img src="/img/icon/vip.png" alt="">
                                        <p>12%</p>
                                    </el-col>
                                    <el-col :span="12">
                                        <img src="/img/icon/user.png" alt="">
                                        <p>48%</p>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                        <!-- 第二行 -->
                        <el-col :span="12">
                            <span class="child-title">粉丝比例 <i class="el-icon-question"></i></span>
                            <div class="child-row">
                                <div ref="showEchart" style="height:300px;width:100%"></div>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="支付" name="zhifu">
                                    <div class="child-row">
                                        <div ref="showEchart2" style="height:300px;width:100%"></div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="充值" name="chongzhi">配置管理</el-tab-pane>
                                <el-tab-pane disabled>
                                    <span slot="label"><i class="el-icon-question"></i></span>
                                </el-tab-pane>
                            </el-tabs>
                        </el-col>

                        <!-- 第三行 -->
                        <el-col :span="12">
                            <span class="child-title">年龄分布 <i class="el-icon-question"></i></span>
                            <div class="child-row">
                               <div ref="showEchart3" style="width:100%;height:300px"></div>
                            </div>
                        </el-col>

                        <el-col :span="12">
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="存量积分" name="zhifu">
                                    <div class="child-row">
                                        
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="存量余额" name="chongzhi">配置管理</el-tab-pane>
                                <el-tab-pane disabled>
                                    <span slot="label"><i class="el-icon-question"></i></span>
                                </el-tab-pane>
                            </el-tabs>
                        </el-col>
                        <!-- 第四行 -->

                        <el-col :span="24">
                            <span class="child-title">客户注册区域分布</span>
                            <span class="child-title">收货区域分布</span>
                            <i class="el-icon-question"></i>
                            <div ref="echartMap" style="width:100% height:500px"></div>
                            <div>暂无数据</div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import china from '../../../public/js/echarts/china';
export default {
    data(){
        return {
            activeName:'zhifu'
        }
    },
    methods:{
        handleClick(){}, //el-tab
        handEcharts(){
            //初始化echarts实例
            var myChart = this.$echarts.init(this.$refs.showEchart);
            // 指定图表的配置项和数据
            let option = {
                color: ['#6495ed','#7b68ee','#ff69b4','#ffa500','#40e0d0'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    //orient: 'vertical',
                    icon: "circle", //图例图形形状[circle，rect ，roundRect，triangle，diamond，pin，arrow，none]
                    bottom: 10,
                    left: 'center',
                    data: ['公众号粉丝', '非粉丝'],
                },
                series: [
                    {
                        name: '占比',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: ['50%', '40%'],
                        data: [
                            {value: 118, name: '公众号粉丝'},
                            {value: 30, name: '非粉丝'},
                        ],
                        label: {
                            formatter: '{b}:{d}%'
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            //自适应
            myChart.setOption(option, true);
                window.addEventListener('resize', function() {
                    myChart.resize(); 
                }
            );
        },
        handEcharts2(){
            //初始化echarts实例
            var myChart = this.$echarts.init(this.$refs.showEchart2);
            // 指定图表的配置项和数据
            let option = {
                color: ['#6495ed','#7b68ee','#ff69b4','#ffa500','#40e0d0'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    //orient: 'vertical',
                    icon: "circle", //图例图形形状[circle，rect ，roundRect，triangle，diamond，pin，arrow，none]
                    bottom: 10,
                    left: 'center',
                    data: ['支付0次', '支付1-3次','支付4-10次','支付11次及以上'],
                },
                series: [
                    {
                        name: '占比',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: ['50%', '40%'],
                        data: [
                            {value: 118, name: '支付0次'},
                            {value: 30, name: '支付1-3次'},
                            {value: 18, name: '支付4-10次'},
                            {value: 5, name: '支付11次及以上'},
                        ],
                        label: {
                            formatter: '{b}:{d}%'
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            // 使用指定的配置项和数据显示图表。
            myChart.setOption(option);
            //自适应
            myChart.setOption(option, true);
                window.addEventListener('resize', function() {
                    myChart.resize(); 
                }
            );
        },
        handEcharts3(){
            //初始化echarts实例
            var myChart = this.$echarts.init(this.$refs.showEchart3);
            // 指定图表的配置项和数据
            let option = {
                color: ['#6495ed'],
                xAxis: {
                    type: 'category',
                    data: ['19岁及以下', '20-29岁', '30-39岁', '40-49岁', '50岁及以上']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70],
                    type: 'bar'
                }]
            };

            // 使用指定的配置项和数据显示图表。
            myChart.setOption(option);
            //自适应
            myChart.setOption(option, true);
                window.addEventListener('resize', function() {
                    myChart.resize(); 
                }
            );
        },
        handEchartMap(){
            //初始化echarts实例
            var myChart = this.$echarts.init(this.$refs.echartMap);
            // 指定图表的配置项和数据
            
            //生成随机值
            function randomData() {  
                return Math.round(Math.random()*500);  
            }

            let option = { }

            // 使用指定的配置项和数据显示图表。
            myChart.setOption(option);
            //自适应
            myChart.setOption(option, true);
                window.addEventListener('resize', function() {
                    myChart.resize(); 
                }
            );          
        }
    },
    mounted(){
        this.handEcharts();
        this.handEcharts2();
        this.handEcharts3();
        this.handEchartMap();
    }
}
</script>

<style lang="less" scope>
.el-icon-question{
    color: #bbb;
}
.content-wrap {
    .bg-purple{
        padding-left: 20px;
    }
    h5{
        font-size: 12px;
    }
}
.box1{
    span,li{
        line-height: 18px;
    }
    ol{
        margin: 0;
        padding-left: 15px;
    }
}
.box2{
    .child-title{
        margin: 18px;
        display: inline-block;
    }
    .child-row{
        margin: 40px 0;
        .el-col{
            text-align: center;
        }
        img{
            width: 40px;
            margin-bottom: 10px;
        }
    }
    .el-tabs__nav-wrap{
        &:after{
            height: 0;
        }
        .el-tabs__item{
            font-size: 12px;
            padding: 0 10px;
        }
    }
}
</style>