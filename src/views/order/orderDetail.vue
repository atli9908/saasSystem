<template>
    <div class="bg-purple">
        <h5 class="view_title">订单管理 - 订单详情</h5>
        <div class="content-wrap">
            <div class="bg-purple jianju">
                <el-steps :space="200" :active="1" finish-status="success" space="100%" align-center>
                    <el-step title="买家下单" description="2020-12-20 18:22:56"></el-step>
                    <el-step title="配送中"></el-step>
                </el-steps>
            </div>
            <div class="bg-purple box2">
                <el-row :gutter="20">
                    <el-col :span="14">
                        <h5>配送信息</h5>
                        <p>配送方式：商家配送</p>
                        <p>配送时间：等待配送</p>
                        <p>买家昵称：挽 <a href="#">联系客户</a><a href="#">客户详情</a></p>
                        <p>收货信息：里小子,1388888888,湖南省,长沙市,岳麓区,麓谷企业广场1002号</p>
                        <p>备注信息：</p>
                    </el-col>
                    <el-col :span="10">
                        <h5>订单状态：已取消</h5>
                        <el-tag type="info" effect="plain" size="small"><i class="el-icon-collection-tag"></i> 标记</el-tag>
                        <p>标记内容：</p>
                    </el-col>
                </el-row>
            </div>
            <div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="订单信息" name="first">
                        <div class="bg-purple">
                            <el-row :gutter="20">
                                <el-col :span="14">
                                    <p>订单编号：10000845157</p>
                                    <p>渠道类型：微信公众号</p>
                                    <p>订单类型：普通订单</p>
                                    <p>订单来源：微信公众号</p>
                                </el-col>
                                <el-col :span="10">
                                    <p>支付方式：已取消</p>
                                    <p>服务门店：</p>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="商品" name="second">
                        <div class="bg-purple">
                            <el-table
                            class="my-table"
                            :data="tableData"
                            :summary-method="getSummaries"
                            show-summary
                            style="width: 100%">
                                <el-table-column
                                    label="商品"
                                    width="350">
                                    <template>
                                        <div class="img">
                                            <img src="/img/1.png" alt="">
                                        </div>
                                        <div class="msg">
                                            <p><el-tag size="mini">限时</el-tag><b>卡赫擦窗机 wv1</b></p>
                                            <p>数量：1</p>
                                            <p>单价：￥380</p>
                                            <p>商家编码：100008435186</p>
                                            <p>仓库：智慧零售_18611984</p>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    prop="subtotal"
                                    label="小计(元)">
                                </el-table-column>
                                <el-table-column
                                    prop="discounts"
                                    label="优惠减免金额(元)">
                                </el-table-column>
                                <el-table-column
                                    prop="receivable"
                                    label="应收金额(元)">
                                </el-table-column>
                                <el-table-column
                                    prop="deduction"
                                    label="加价/减价(元)">
                                </el-table-column>
                                <el-table-column
                                    prop="freight"
                                    label="运费(元)">
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeName:'first',
            tableData:[
                {
                    goods:'好东西',subtotal:380,discounts:30,receivable:108,deduction:0,freight:0
                }
            ]
        }
    },
    methods:{
        handleClick(tab,event){
            //console.log(tab,event)
        },
        getSummaries(param){
            const { columns, data } = param;
            const sums = [];  
            let total = 0;
            columns.forEach((column,index)=>{
                if(index===columns.length-2){
                    sums[index] = '合计金额';
                    return;
                }
                let values = data.map( item => Number(item[column.property]));
                if(!values.every(value=>isNaN(value))){
                    sums[columns.length-1] = total += Number(values);
                } 
            })
            return sums;
        }
    }
}
</script>

<style scoped lang="less">
/deep/.el-row{
    padding: 10px 50px;
}
.box2 a{
    margin: 0 10px;
    color: cornflowerblue;
}
.el-row p,.el-row h5{
    margin: 10px 0;
}
/deep/.el-tabs__header{
    margin: 5px 30px;
}
/deep/.el-tabs__nav-wrap::after{
    height:0
}
/deep/.my-table .cell{
    padding-left: 20px;
}
.my-table img{
    width: 50px;
}
.img,.msg{
    float: left;
    padding-right: 10px;
}
/deep/.el-table__footer-wrapper .cell{
    font-weight: 600;
}
</style>