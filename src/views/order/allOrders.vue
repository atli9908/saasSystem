<template>
    <div class="bg-purple">
        <h5 class="view_title">订单管理 - 订单列表</h5>
        <div class="content-wrap">
            <div class="bg-purple box1">
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
                    666
                </div>
            </div>

            <div class="bg-purple my-table">
                <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                empty-text="暂无订单信息">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    prop="goodsMsg"
                    label="商品信息"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="实收金额"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="客户信息"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="配送及支付方式"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="订单状态"
                    show-overflow-tooltip>
                    </el-table-column>
                </el-table>
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
            tableData:[]
        }
    }
}
</script>

<style scoped>
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
.box1 .row3{
    margin-bottom: 20px;
}
.row2 .el-select{
    margin-right: 10px;
}
</style>