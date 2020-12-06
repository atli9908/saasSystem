<template>
    <div class="bg-purple">
        <h5 class="view_title">订单管理 - 订单列表</h5>
        <div class="content-wrap">
            <div class="bg-purple box1 jianju">
                <span>筛选条件</span>
                <el-switch
                v-model="switchValue"
                active-color="#13ce66"
                inactive-color="#ccc">
                </el-switch>

                <el-select v-model="dataSelect" placeholder="请选择" size="mini">
                    <el-option
                    label="下单时间"
                    value="选项1">
                    </el-option>
                </el-select>
                <el-date-picker
                size="mini"
                v-model="dataValue"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator=" - "
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right">
                </el-date-picker>
                <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select" size="mini">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <div class="row2">
                    <el-select v-model="dataSelect" placeholder="请选择" size="mini">
                        <el-option
                        label="全部门店"
                        value="选项1">
                        </el-option>
                    </el-select>
                    <el-select v-model="dataSelect" placeholder="请选择" size="mini">
                        <el-option
                        label="全部仓库"
                        value="选项1">
                        </el-option>
                    </el-select>
                </div>
                <div class="row3">
                    <el-button plain size="mini" disabled>批量标记</el-button>
                    <el-button plain size="mini">订单导出</el-button>
                </div>

                <div class="condition" v-show="switchValue">
                    <div v-for="(items,i) in conditionData" :key="i">
                        <el-row>
                            <el-col :span="1.5" class="title">
                                <span>{{items.title}}</span>
                            </el-col>
                            <el-col :span="22" class="contentBtn">
                                <el-button plain size="mini">不限</el-button>
                                <el-button plain v-for="(item,a) in items.value" :key="a" size="mini">{{item}}</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <div>
                        <el-row>
                            <el-col :span="1.5" class="title">
                                <span>标记筛选</span>
                            </el-col>
                            <el-col :span="22" class="contentBtn">
                                <el-button plain size="mini">不限</el-button>
                                <el-button plain size="mini" style="color:red"><i class="el-icon-collection-tag"></i></el-button>
                                <el-button plain size="mini" style="color:blue"><i class="el-icon-collection-tag"></i></el-button>
                                <el-button plain size="mini" style="color:yellow"><i class="el-icon-collection-tag"></i></el-button>
                                <el-button plain size="mini" style="color:pink"><i class="el-icon-collection-tag"></i></el-button>
                                <el-button plain size="mini" style="color:purple"><i class="el-icon-collection-tag"></i></el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
            <!-- 表格 -->
            <div class="bg-purple jianju">
                <thead class="my-thead">
                    <tr>
                        <th width="40px">
                            <el-checkbox :indeterminate="isIndeterminate" @change="handleCheckAllChange" v-model="checkAll"/>
                        </th>
                        <th width="350px">商品信息</th>
                        <th width="160px">实收金额</th>
                        <th width="180px">客户信息</th>
                        <th width="200px">配送及支付方式</th>
                        <th width="100px">订单状态</th>
                    </tr>
                </thead>
            </div>
            <div class="bg-purple jianju" v-for="(item,index) in orderForm" :key="index">
                <div class="selectRow">
                    <td width="40px"> 
                        <el-checkbox-group v-model="checkedItem" @change="handleCheckedCitiesChange">
                            <el-checkbox :label="item.ID"/>
                        </el-checkbox-group>
                    </td>
                    <td><span>订单编号 : {{item.ID}}</span></td>
                    <td><span>下单时间 : {{item.date}}</span></td>
                    <td><span>渠道类型 : {{item.channel}}</span></td>
                    <td><span>服务门店 : {{item.shop}}</span></td>
                    <td class="right"><router-link :to="{name:'orderDetail',params:{id:item.ID}}" href="#">订单详情<i class="el-icon-collection-tag"></i></router-link></td>
                </div>
                <div class="t-border"></div>
                <tbody class="my-tbody">
                    <tr>
                        <td width="40px"></td>
                        <td width="350px">
                            <div>
                                <img :src="item.imgSrc" alt="">
                            </div>
                            <div>
                                <p><el-tag type="danger" effect="plain" size="mini">{{item.tag}}</el-tag><b>{{item.title}}</b></p>                            
                                <p>数量：{{item.count}}</p>                             
                                <p>单价：￥{{item.price}}</p>               
                                <p>商家编码：{{item.shopId}}</p>
                                <p>仓库：{{item.store}}</p>   
                            </div>
                        </td>
                        <td width="160px">￥{{item.income}}</td>
                        <td width="180px">{{item.clientMsg}}</td>
                        <td width="200px">
                            <p>{{item.delivery}}</p>
                            <p>{{item.pay}}</p>
                        </td>
                        <td width="100px">{{item.state}}</td>
                    </tr>
                </tbody>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            switchValue:false,
            dataSelect:'选项1',
            dataValue:'',
            pickerOptions:{
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            searchInput:'',
            select:'',
            tableData:[{
                id:1,
                goodsMsg:'商品1',
                price: '452',
                clientMsg: 'atli',
                pattern:'商家配送',
                state:'已完成'
            }, {
                id:2,
                goodsMsg:'商品2',
                price: '6666',
                clientMsg: '王小虎',
                apattern:'商家配送',
                state:'已取消'
            }],
            conditionData:[
                {title:'渠道类型',value:['公众号','小程序','H5','商户助手APP','收银台','自有APP','分销商','企业微信']},
                {title:'订单类型',value:['普通订单','充值订单','消费订单','虚拟订单']},
                {title:'营销类型',value:['拼团','砍价','限时折扣','周期购','分销','积分兑换','限量抢购','社区团购','定金膨胀','阶梯价','渠道追踪','渠道追踪']},
                {title:'商品类型',value:['实物商品','预售商品','付费卷']},
                {title:'订单状态',value:['已取消','待支付','待发货','已发货','已完成']},
                {title:'支付方式',value:['微信支付','线下付款','信用卡支付']},
                {title:'配送方式',value:['商家配送','同城限时达','到店自提','门店交易']}
            ],
            checkAll:false,
            isIndeterminate:false,
            checkedItems:[],
            checkedItem:[],
            isCheck:false,
            orderForm:[
                {ID:100001568463,date:'2020-5-20 16:58',channel:'公众号',shop:'生态居家旗舰店',imgSrc:'/img/1.png',tag:'限时',title:'卡赫高压清洗机 WV1',count:1,price:256,shopId:115589,store:'智慧零售_20145852',income:256,clientMsg:'挽',delivery:'商家配送',pay:'微信付款',state:'已签收'},
                {ID:100001568464,date:'2020-5-20 16:58',channel:'公众号',shop:'生态居家旗舰店',imgSrc:'/img/1.png',tag:'限时',title:'卡赫高压清洗机 WV1',count:1,price:256,shopId:115589,store:'智慧零售_20145852',income:256,clientMsg:'挽',delivery:'商家配送',pay:'微信付款',state:'已签收'}
            ] 
        }
    },
    created(){
        this.orderForm.forEach(item=>{
            this.checkedItems.push(item.ID)
        })  
    },
    methods:{
        handleCheckAllChange(val){  
            this.checkedItem = val ? this.checkedItems : []
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value){
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.checkedItems.length;
            this.isIndeterminate = checkedCount>0 && checkedCount<this.checkedItems.length
        }
    }
}
</script>

<style scoped lang="less">
/deep/.el-checkbox__label{
    display: none;
}
.box1{
    padding: 10px 20px;
}
.box1 .input-with-select{
    float: right;
    width: 300px;
}
.box1 .el-switch{
    margin: 0 15px 0 5px;
}
.box1 .el-select{
    width: 100px;
}
.box1 .row2{
    margin: 10px 0;
}
.row2 .el-select{
    margin-right: 10px;
}
.condition{
    margin-top: 15px;
}
.condition .el-button{
    margin:8px 10px 8px 0;
}
.condition .title{
    margin-right: 10px;
    line-height: 44px;
}
.contentBtn button:first-child{
    border: 1px solid cornflowerblue;
    color: cornflowerblue;
}

.my-thead th,.my-tbody td{
    font-size: 12px;
    text-align: left;
}
.selectRow td{
    font-size: 12px;
}
.selectRow span{
    margin-right: 40px;
}
.right{
    padding-left: 240px;
}
.right a{
    color: #333;
}
.right a:hover{
    color: rgb(97, 119, 245);
}
.right i{
    font-size: 14px;
}
.t-border{
    border-bottom: 1px solid #ddd;
    margin: 10px 0 5px 40px;
}
.my-tbody div{
    float: left;
}
.my-tbody td{
    /* 垂直对齐方式 */
    vertical-align: top;
}
.my-tbody p{
    margin-bottom: 3px;
}
.my-tbody img{
    width: 50px;
    margin-right: 10px;
}
</style>