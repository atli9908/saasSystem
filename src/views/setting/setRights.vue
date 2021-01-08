<template>
    <div class="bg-purple">
        <h4>岗位管理 - 新建商家权限</h4>
        <div class="content-wrap main">
            <el-row :gutter="20">
                <el-col :span="4">
                    <span>岗位名称</span>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="text"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <span>岗位权限</span>
                </el-col>
                <el-col :span="18">
                    <div class="treeGroup">
                        <el-tree 
                            :data="data" 
                            :props="defaultProps" 
                            ref="tree"
                            show-checkbox>
                        </el-tree>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="footer">
            <button @click="handTrees">保存</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text:'门店',
            data:[
                {
                    label:'概况',
                    children:[
                        {label:'公告列表页',children:null},
                        {label:'套餐对比页',children:null},
                        {label:'公告详情',children:null}
                    ]
                },
                {
                label:'店铺',
                children:[
                    {
                        label:'个性装修',
                        children:[
                            {label:'店铺页面',children:null},
                            {label:'店铺导航',children:null},
                        ]
                    },
                    {
                        label:'系统页面',
                        children:[
                            {label:'用户中心',children:null},
                            {label:'列表模板',children:null},
                            {label:'分类模板',children:null},
                            {label:'搜索页',children:null}
                        ]
                    },
                    {
                        label:'店铺风格',
                        children:[
                            {label:'店铺页面',children:null},
                            {label:'店铺导航',children:null}
                        ]
                    }
                ]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        handTrees() {
            //获取目前被选中的节点所组成的数组
            let trees = this.$refs.tree.getCheckedNodes();
            console.log(trees)
        }
    }
}
</script>

<style scoped lang="less">
h4{
    margin: 20px 0;
    font-size: 13px;
    font-weight: 500;
}
.main{
    padding-bottom: 50px;
    .el-row{
        padding: 10px 0;
    }
    .el-col-4{
        padding-top: 2px;
        text-align: right;
    }
    .treeGroup{
        font-size: 12px;
        margin: 2px 0;
        padding: 6px 0;
        box-shadow: 0 0 2px #999;
        border-radius: 5px;
        /deep/.el-tree-node__children .el-tree-node__content{
            background-color: white;
        }
        /deep/.el-tree-node__content{
            background-color: rgb(245, 245, 245);
            height: 40px;
            span{
                font-size: 12px;
            }
        }
    }
}
.footer{
    z-index: 1000;
    height: 50px;
    width: 84%;
    box-shadow: 0 0 10px #ddd;
    border-radius: 10px;
    text-align: center;
    position: fixed;
    bottom: 0;
    background-color: white;
}
.footer button{
    margin-top: 10px;
    padding: 6px 20px;
    color: white;
    border: none;
    background-color: rgb(39, 118, 236);
    border-radius: 6px;
}
</style>