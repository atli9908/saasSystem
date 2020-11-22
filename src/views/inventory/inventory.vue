<template>
    <div class="bg-purple">
        <h5 class="view_title">门店库存</h5>
        <div class="content-wrap">
            <div class="bg-purple box1 jianju">
                <div class="left">
                    <el-select v-model="value" placeholder="单品分类" size="mini" class="selects">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="right">
                    <el-select v-model="value" placeholder="单品名称" size="mini" class="selects" style="margin-right:20px">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" style="width:200px" size="mini">
                        <el-button slot="append" style="padding:10px">搜索</el-button>
                    </el-input>
                </div>
                <div class="buttom">
                    <el-button plain size="mini">导出</el-button>
                    <el-button plain size="mini">导入成本</el-button>
                </div>
            </div>

            <div class="bg-purple box2 my-table">
                <el-table
                :data="tableData"
                style="width: 100%">
                    <el-table-column
                        label="单品名称"
                        width="280"
                        show-overflow-tooltip>
                        <template>
                            <div>
                                <img src="/img/1.png" alt="">
                                <span>德国卡赫家用手持式强力除螨便携式吸尘器</span><br>
                                <span>P000078154615</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="50">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="单位"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="实物库存">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="占用库存">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="可用库存">
                    </el-table-column>
                    <el-table-column
                        label="成本">
                        <template>
                            <div>
                                <input type="text" value=0>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作">
                        <template>
                            <a href="#">出入库明细</a>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <my-page :data="{tableData,multipleSelection}"/>
    </div>
</template>

<script>
import myPage from '../../components/common/myPage';
export default {
    components: { myPage },
    data(){
         return {
            multipleSelection:[],
            setPrice:true,
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }],
            value: '',
            searchText:'',
            tableData: [{
                date: '0',
                name: '0',
                address: '0'
            }, {
                date: '0',
                name: '0',
                address: '0'
            }]
        }
    }
}
</script>

<style scoped>
.box1{
    overflow: hidden;
    padding: 20px;
}
.box1 .left{
    float: left;
}
.box1 .right{
    float: right;
}
.box1 .buttom{
    margin-top: 40px;
}
.box2{
    padding: 10px 0;
}
.my-table img{
    width: 50px;
    float: left;
    margin-right: 5px;
}
.my-table span{
    line-height: 1em;
}
</style>