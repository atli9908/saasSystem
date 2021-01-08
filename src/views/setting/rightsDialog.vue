<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(list,index) in listData" :label="list.title" :name="list.value" :key="index">
                <div class="main">
                    <h4>概况</h4>
                    <el-tree :data="list.data" :props="defaultProps" @node-click="handleNodeClick" default-expand-all></el-tree>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeName:'merchant',
            listData:[
                {
                    title:'商家后台权限',
                    value:'merchant',
                    data:[{
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
                },
                {
                    title:'区域后台权限',
                    value:'region',
                    data:[{
                        label:'区域',
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
                            }
                        ]
                    }],
                },
                {
                    title:'门店后台权限',
                    value:'shop',
                    data:[]
                },
                {
                    title:'客服后台权限',
                    value:'staff',
                    data:[]
                }
                
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods:{
        handleClick(){

        },
        handleNodeClick(data) {
            console.log(data);
        }
    }
}
</script>

<style scoped lang="less">
/deep/.el-tabs__nav-wrap::after{
    height: 0;
}
/deep/.el-tabs__item{
    padding: 0 10px;
    font-size: 12px;
}
.main{
    padding: 20px;
    border: 1px solid #eee;
    height: 400px;
    border-radius: 5px;
    overflow: auto;
    h4{
        margin-left: 25px;
        margin-bottom: 10px;
        font-size: 13px;
        font-weight: 500;
    }
    .el-tree{
        /deep/.el-tree-node__label{
            font-size: 12px;
        }
    }
}
</style>