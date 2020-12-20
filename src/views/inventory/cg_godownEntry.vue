<template>
    <div class="bg-purple">
        <!-- 弹出框对话框 -->
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="800px">
            <div class="content-wrap dialog-wrap">
                <div>
                    <el-select v-model="value" placeholder="请选择" size="mini">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <div class="dialog-search">
                        <el-select v-model="value" placeholder="请选择" size="mini">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input placeholder='请输入' v-model="input" class="input-with-select" size="mini">
                            <el-button slot="append" style="padding:10px">搜索</el-button>
                        </el-input>
                    </div>
                </div>
                <div class="bg-purple">
                    <el-row :gutter="10">
                        <el-col :span="6">
                            <div class="goodsTag">
                                <img src="/img/1.png" alt="">
                                <span>KARCHER卡赫家用手持吸尘器</span><br>
                                <span>P0000001514144</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="goodsTag">
                                <img src="/img/1.png" alt="">
                                <span>KARCHER卡赫家用手持吸尘器</span><br>
                                <span>P0000001514144</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="goodsTag">
                                <img src="/img/1.png" alt="">
                                <span>KARCHER卡赫家用手持吸尘器</span><br>
                                <span>P0000001514144</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="goodsTag">
                                <img src="/img/1.png" alt="">
                                <span>KARCHER卡赫家用手持吸尘器</span><br>
                                <span>P0000001514144</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="goodsTag">
                                <img src="/img/1.png" alt="">
                                <span>KARCHER卡赫家用手持吸尘器</span><br>
                                <span>P0000001514144</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="goodsTag">
                                <img src="/img/1.png" alt="">
                                <span>KARCHER卡赫家用手持吸尘器</span><br>
                                <span>P0000001514144</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <el-pagination
                    class="my-pager"
                    layout="prev, pager, next"
                    :total="50">
                </el-pagination>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <h5 class="view_title">入库单 - {{$route.meta.title}}</h5>
        <div class="content-wrap wrap jianju">
            <h4>基本信息</h4>
            <div class="jbxx">
                <div>
                    <span>供应商名称</span>
                    <el-select v-model="value" placeholder="供应商名称" size="mini">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <span>备注</span>
                    <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入内容"
                    v-model="textarea">
                    </el-input>
                </div>
            </div>
        </div>

        <div class="content-wrap wrap">
            <div class="dpxx">
                <h4>单品信息</h4>
                <el-input placeholder='请输入' v-model="input" class="input-with-select" size="mini">
                    <el-select v-model="select" slot="prepend">
                        <el-option label="订单名称" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                    </el-select>
                    <el-button slot="append" style="padding:10px">搜索</el-button>
                </el-input>
                <el-button size="mini" @click="dialogFormVisible = true">选择单品</el-button>
                <el-button size="mini">批量导入</el-button>
            </div>
            <div class="my-table">
                <el-table
                :data="tableData"
                style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="单品名称"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="单品规格"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="单位">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="采购数量">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="操作">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        dialogFormVisible:false,
        value:"选项1",
        options: [{
          value: '选项1',
          label: '单品分类'
        }, {
          value: '选项2',
          label: '单品名称'
        }],
        textarea:"",
        input:"",
        select:"1",
        tableData: []
      }
    }
}
</script>

<style lang="less" scoped>
/deep/.el-dialog{
    border-radius: 10px;
}
.dialog-wrap{
    overflow: hidden;
}
.dialog-wrap .el-select{
    width: 100px;
}
.dialog-wrap .el-input{
    width: 280px;
}
.dialog-wrap .bg-purple{
    margin-top: 10px;
}
.dialog-wrap img{
    width: 50px;
    margin-right: 5px;
    float: left;
}
.dialog-search{
    float: right;
}
.dialog-wrap .goodsTag{
    box-shadow: 0 0 2px #888;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
}
.dialog-wrap .my-pager{
    margin-top: 10px;
    float: right;
}
/deep/.my-pager li{
    margin: 0 5px;
    min-width: 25px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ddd;
}
/deep/.el-pagination button{
    margin: 0 5px;
    min-width: 25px;
    padding: 0;
}
.wrap{
    padding: 20px;
}
.wrap h4{
    font-weight: 500;
    display: inline-block;
}

.jbxx span{
    display: inline-block;
    width: 200px;
    margin: 10px;
    text-align: right;
}
.el-textarea,.el-select{
   width: 300px;
}
.jbxx .el-textarea{
    vertical-align:text-top;
    margin-bottom: 30px;
}
.dpxx .el-input{
    width: 400px;
    margin: 0 10px;
}
.dpxx .el-select{
    width: 100px;
}
.right{
    display: inline-block;
    margin-left: 500px;
}
.my-table .el-table{
    margin-top: 20px;
    border-radius: 10px;
}
</style>