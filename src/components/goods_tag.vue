<template>
    <div class="bg-purple">
        <h5 class="view_title">商品标签</h5>
        <div class="content-wrap">
            <div class="bg-purple div1 jianju">
                <div class="btn">
                    <el-button plain size="small">新增标签</el-button>
                    <el-button plain size="small">批量删除</el-button>
                </div>
                <div class="search">
                     <el-input placeholder="请输入内容" v-model="searchText" size="small" style="width:220px">
                        <el-button slot="append" icon="el-icon-search" style="padding: 12px;"></el-button>
                    </el-input>
                </div>
            </div>

            <div class="bg-purple div2 my-table">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="title"
                    label="标签名称"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="count"
                    label="标签绑定商品数"
                    >
                    </el-table-column>
                    <el-table-column
                    label="操作"
                    show-overflow-tooltip>
                    <template slot-scope="scope">
                        <div class="caoz">
                            <a href="#">编辑</a>
                            <a href="#">删除</a>
                        </div>
                    </template>
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
            searchText:'',
            tableData: [{
                title: '最新',
                count: '5',
                }, {
                title: '最热',
                count: '7',
            }],
        }
    },
    methods: {
        handleSelectionChange(val) {
           this.multipleSelection = val;
      }
    }
}
</script>

<style scoped>
.jianju{
    margin-bottom: 10px;
}
.div1{
    padding: 8px 20px;
    overflow: hidden;
}
.div1 .btn{
    float: left;
}
.div1 .search{
    float: right;
}

</style>