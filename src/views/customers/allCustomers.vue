<template>
    <div class="bg-purple">
        <div class="title-a">
            <h5>全部客户</h5>
            <a href="#"><i class="el-icon-s-operation"/> 设置显示字段</a>
        </div>
        <div class="content-wrap">
            <div class="bg-purple jianju form-box">
                <div>
                    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="手机号" value="1"></el-option>
                        </el-select>
                        <el-button slot="append">搜索</el-button>
                    </el-input>
                    <div class="right">
                        <el-button><i class="el-icon-refresh"></i> 客户更新</el-button>
                        <el-select v-model="select" class="moreSelect">
                            <el-option label="更多" value="1"></el-option>
                        </el-select>
                        <el-button>高级筛选</el-button>
                    </div>
                </div>
                <div class="centerBox">
                    <el-select v-model="select" style="width:100px; margin-right:10px">
                        <el-option label="归属区域" value="1"></el-option>
                    </el-select>
                    <el-button>不限</el-button>
                    <el-button>无归属</el-button>
                    <el-button>添加区域</el-button>
                </div>
                <div>
                    <span class="span-title">客户标签</span>
                    <el-button>不限</el-button>
                    <el-button>添加</el-button>
                </div>
                <el-divider></el-divider>
                <div>
                    <span class="span-title">批量操作</span>
                    <el-button>修改成长值</el-button>
                    <el-button>打标签</el-button>
                    <el-button>修改积分</el-button>
                    <el-button>送优惠卷</el-button>
                    <el-button>修改关系</el-button>
                    <el-select v-model="select" class="moreSelect">
                        <el-option label="更多" value="1"></el-option>
                    </el-select>
                </div>
            </div>
            <div class="bg-purple">
                <el-table
                class="my-table"
                :data="tableData"
                stripe
                style="width: 100%">
                    <el-table-column
                    type="selection"
                    width="30">
                    </el-table-column>
                    <el-table-column
                    fixed
                    label="客户信息"
                    width="180">
                    <template v-slot="scope">
                        <img src="/img/1.png" alt="">
                        <span>编号:{{scope.row.clientMsg}}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop="joinTime"
                    label="成为客户时间"
                    width="160">
                    </el-table-column>
                    <el-table-column
                    prop="consumptionTime"
                    label="最近消费时间"
                    width="160">
                    </el-table-column>
                    <el-table-column
                    prop="price"
                    label="消费金额">
                    </el-table-column>
                    <el-table-column
                    prop="consumCount"
                    label="消费次数">
                    </el-table-column>
                    <el-table-column
                    prop="capacity"
                    label="消费力">
                    </el-table-column>
                    <el-table-column
                    fixed="right"
                    prop="address"
                    width="220"
                    label="操作">
                    <template v-slot="scope" class="caoz">
                        <a href="#">详情</a>
                        <a href="#">冻结</a>
                        <a href="#">充值</a>
                        <a href="#">修改余额</a>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <my-page :data="{tableData,multipleSelection}"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            input:'',
            select:'1',
            multipleSelection:[],
            tableData:[
                {clientMsg:'0425520112',joinTime:'2020-5-20 20:20',consumptionTime:'2020-5-20 20:20',price:'2465.00',consumCount:'',capacity:'0.0'},
                {clientMsg:'0425520112',joinTime:'2020-5-20 20:20',consumptionTime:'2020-5-20 20:20',price:'2465.00',consumCount:'',capacity:'0.0'},
                {clientMsg:'0425520112',joinTime:'2020-5-20 20:20',consumptionTime:'2020-5-20 20:20',price:'2465.00',consumCount:'',capacity:'0.0'},
                {clientMsg:'0425520112',joinTime:'2020-5-20 20:20',consumptionTime:'2020-5-20 20:20',price:'2465.00',consumCount:'',capacity:'0.0'}
            ]
        }
    }
}
</script>

<style scoped lang="less">
.my-table img{
    width: 30px;
    margin-right: 5px;
    vertical-align: middle
}
.span-title{
    margin-right: 10px;
}
.right{
    float: right;
}
.centerBox{
    margin: 10px 0;
}
/deep/.input-with-select{
    width: 300px;
}
/deep/.moreSelect{
    width: 70px;
    margin: 0 10px;
}
.title-a{
    display: flex;
    justify-content:space-between;
    padding: 22px 0;
}
.title-a a{
    color:rgb(14, 132, 241);
}
.my-table a{
    margin: 0 5px;
    color:rgb(14, 132, 241);
}
/deep/.el-table__row{
    height: 50px;
}
</style>