<template>
    <div class="content-wrap">
        <div class="bg-purple box1 jianju">
            <h4>数据概览</h4>
            <el-divider></el-divider>
            <span>日期粒度</span>
            <el-select v-model="timeSelect" style="width:60px" @change="handTime()">
                <el-option value="ri" label="日"></el-option>
                <el-option value="yue" label="月"></el-option>
                <el-option value="nian" label="年"></el-option>
            </el-select>
            <el-date-picker
                v-model="time"
                type="datetimerange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
            </el-date-picker>
            <el-select v-model="select">
                <el-option value="1" label="全部区域"></el-option>
            </el-select>
            <el-select v-model="select">
                <el-option value="1" label="全部门店"></el-option>
            </el-select>
        </div>
        <div class="bg-purple box2 jianju">
            <h5>整体情况<span style="background:#ddd; padding:0 2px ;border-radius:50%">?</span></h5>
            <el-divider></el-divider>
            <el-row :gutter="20">
                <el-col :span="4" v-for="(item,index) in informmation" :key="index">
                    <span>{{item.title}}</span>
                    <h6 style="fontSize:26px">{{item.data}}</h6>
                    <span>环比 : {{item.percent}}%</span>
                </el-col>
            </el-row>
        </div>
        <div class="bg-purple box3">
            <h5>趋势分析</h5>
            <el-divider></el-divider>
            <div ref="showEchart" style="height:300px;width:100%"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            time:[new Date().setTime(new Date().getTime() - 3600 * 1000 * 24 * 1),new Date()],
            timeSelect:'ri',
            select:'1',
            informmation:[
                {title:'实收金额',data:'0',percent:'0.00'},
                {title:'浏览量',data:'0',percent:'0.00'},
                {title:'访客量',data:'0',percent:'0.00'},
                {title:'访问支付转化率',data:'0',percent:'0.00'},
                {title:'客单价',data:'0',percent:'0.00'},
                {title:'支付单数',data:'0',percent:'0.00'},
                {title:'支付人数',data:'0',percent:'0.00'},
                {title:'复购客户数',data:'0',percent:'0.00'},
                {title:'支付会员数',data:'0',percent:'0.00'},
                {title:'售后退款金额',data:'0',percent:'0.00'},
                {title:'新增客户数',data:'0',percent:'0.00'},
                {title:'新增会员数',data:'0',percent:'0.00'}
            ]
        }
    },
    methods:{
        handTime(){
            let start = new Date();
            let end = new Date();
            if(this.timeSelect==='ri'){
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
                this.time = [start,end]
            }else if(this.timeSelect==='yue'){
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                this.time = [start,end]
            }else if(this.timeSelect==='nian'){
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
                this.time = [start,end]
            }
        },
        handEcharts(){
            //初始化echarts实例
            var myChart = this.$echarts.init(this.$refs.showEchart);
            // 指定图表的配置项和数据
            let option = {
                title: {
                    text: null
                },
                // 提示框
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(255,255,255,0.8)'

                },
                //图例
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'], 
                    itemWidth: 8,  
                    itemHeight: 8,  
                },
                //网格
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: [
                    {
                        name:null,
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ],
            };

            // 使用刚指定的配置项和数据显示图表。
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
    }
}
</script>

<style scoped lang="less">
h5{
    margin-top: 10px;
    border-left: 2px solid rgb(51, 151, 245);
    padding-left: 10px;
}
.box1{
    span,.el-select,.el-date-editor{
        margin-right: 10px;
    }
}
.box2{
    span{
        margin-left: 5px;
    }
    h6{
        margin-bottom: 5px;
    }
    .el-row{
        padding-left: 20px;
    }
    .el-col{
        margin: 20px 0;
    }
}
</style>