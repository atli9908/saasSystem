<template>
    <div class="bg-purple">
        <h5 class="view_title">商品分组</h5>
        <div class="content-wrap">
            <div class="bg-purple jianju">
                <el-button plain size="small" class="zhed-btn"><i class="el-icon-caret-bottom"></i> 折叠全部</el-button>
                <el-button plain size="small" style="float:right">新增一级分组</el-button>
            </div>
            
            <div class="bg-purple jianju">
                <el-table
                    :show-header="false"
                    :data="tableData5"
                    style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="商品名称">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="所属店铺">
                                <span>{{ props.row.shop }}</span>
                            </el-form-item>
                            <el-form-item label="商品 ID">
                                <span>{{ props.row.id }}</span>
                            </el-form-item>
                            <el-form-item label="店铺 ID">
                                <span>{{ props.row.shopId }}</span>
                            </el-form-item>
                            <el-form-item label="商品分类">
                                <span>{{ props.row.category }}</span>
                            </el-form-item>
                            <el-form-item label="店铺地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="商品描述">
                                <span>{{ props.row.desc }}</span>
                            </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column prop="id">
                        <span style="color:#333">系统分组</span>
                    </el-table-column>
                    <el-table-column prop="desc">
                        <div style="color:#333">
                            <span style="margin-right:5px">分组显示 </span>
                            <el-switch
                                v-model="value"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                            </el-switch>
                        </div> 
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
            value: true,

            tableData5: [{
              id: '12987122',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }, {
              id: '12987123',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而66',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }]
        }
    },
    methods: {
        
    }
}
</script>

<style>
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;    
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
.zhed-btn{
    border: 1px solid rgb(83, 163, 255);
    color:rgb(83, 163, 255);
}
</style>