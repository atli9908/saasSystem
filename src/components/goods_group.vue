<template>
    <div class="bg-purple">
        <!-- 新增分组对话框 -->
        <el-dialog title="新增分组" :visible.sync="dialogFormVisible" width='30%'>
            <el-form :model="form" label-width="120px" :rules="rules">
                <el-form-item label="级别">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="一级"></el-radio>
                    <el-radio label="二级"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <div>
                    <el-form-item label="一级分组名称" prop="name">
                        <el-input
                        type="text"
                        placeholder="请输入内容"
                        v-model="form.name"
                        maxlength="5"
                        show-word-limit
                        >
                        </el-input>
                    </el-form-item>
                    <el-form-item label="分组状态">
                        <el-radio-group v-model="form.resource">
                        <el-radio label="显示"></el-radio>
                        <el-radio label="隐藏"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <h5 class="view_title">商品分组</h5>
        <div class="content-wrap">
            <div class="bg-purple jianju">
                <el-button plain size="small" class="zhed-btn"><i class="el-icon-caret-bottom"></i> 折叠全部</el-button>
                <el-button plain size="small" style="float:right" @click="dialogFormVisible = true">新增一级分组</el-button>
            </div>
            <div class="bg-purple jianju">
                <div class="thead" @click="showTbody">
                    <el-row>
                        <el-col :span="14">
                            <div>
                                <i :class="sicon"></i>
                                <span>系统分组</span>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <div @click.stop="">
                                <span>分组显示 </span>
                                <el-switch
                                v-model="value"
                                active-color="#13ce66"
                                inactive-color="#ccc">
                                </el-switch>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="tbody" v-if="isshow">
                    <el-row>
                        <el-col :span="13">
                            <div>
                                <a href="#">*新 品 上 架</a>
                                <span> （系统自动读取最新上架的20个商品）</span>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <div>
                                <span>不显示</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="13">
                            <div>
                                <a href="#">*热 销 排 行</a>
                                <span> （系统自动读取最新上架的20个商品）</span>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <div>
                                <span>不显示</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="13">
                            <div>
                                <a href="#">*列 表 中 隐 藏</a>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <div>
                                <span>该分组默认不会展示在买家页面</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <div class="bg-purple jianju" v-for="(item,index) in primaryGroup" :key="item.title">
                <div class="thead" ref="theads" @click="clickShow(index)">
                    <el-row>
                        <el-col :span="14">
                            <div>
                                <i :class="item.sicon"></i>
                                <span>{{item.title}}</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div @click.stop="">
                                <span>分组显示 </span>
                                <el-switch
                                v-model="item.status"
                                @change="changeSwitch(index)"
                                active-color="#13ce66"
                                inactive-color="#ccc">
                                </el-switch>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div @click.stop="" class="caoz-a">
                                <a href="#">新增二级分组</a>
                                <a href="#">编辑</a>
                                <a href="#">删除</a>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="tbody" v-if="item.showTbody">
                    <el-row v-for="subItem in item.subGroup">
                        <el-col :span="7">
                            <div class="imgTitle">
                                <img :src="subItem.imgsrc" alt="">
                                <span> {{subItem.subTitle}}</span>
                            </div>
                        </el-col>

                        <el-col :span="6">
                            <div>
                                <span>商品数量：<a href="#">5</a> </span>
                            </div>
                        </el-col>
                        
                        <el-col :span="5">
                            <div>
                                <span>显示分组 </span>
                                <el-switch
                                v-model="subItem.status"
                                active-color="#13ce66"
                                inactive-color="#ccc">
                                </el-switch>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="caoz-a">
                                <a href="#">编辑</a>
                                <a href="#">删除</a>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogFormVisible:false,
            form:{
                resource:'',
                name:''
            },
            rules: {
                name: [
                    { required: true, message: '请输入分组名称', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ]
            },
            value:true,
            isshow:true,
            sicon:'el-icon-caret-bottom',
            primaryGroup:[
                {
                    title:'洗家电器',
                    status:true,
                    showTbody:true,
                    sicon:'el-icon-caret-bottom',
                    subGroup:[
                        {imgsrc:'/img/1.png',subTitle:'擦地机',status:true},
                        {imgsrc:'/img/1.png',subTitle:'吸尘器',status:true},
                        {imgsrc:'/img/1.png',subTitle:'蒸汽清洗机',status:false},
                        {imgsrc:'/img/1.png',subTitle:'配件',status:false},
                    ]
                },
                {
                    title:'美容清洗',
                    status:true,
                    showTbody:true,
                    sicon:'el-icon-caret-bottom',
                    subGroup:[
                        {imgsrc:'/img/1.png',subTitle:'高压清洗机',status:false},
                        {imgsrc:'/img/1.png',subTitle:'吸尘器',status:false},
                        {imgsrc:'/img/1.png',subTitle:'配件',status:false}
                    ]
                },
            ]
        }
    },
    methods:{   
        showTbody(){    
            this.isshow = !this.isshow
            this.sicon = this.isshow ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
        },
        clickShow(row){
            this.primaryGroup[row].showTbody = !this.primaryGroup[row].showTbody
            this.primaryGroup[row].sicon = this.primaryGroup[row].showTbody ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
        },
        changeSwitch(row){
           
                if(this.primaryGroup[row].status){
                    this.primaryGroup[row].subGroup.forEach(item=>{
                        item.status=true;
                    })
                }else{
                    this.primaryGroup[row].subGroup.forEach(item=>{
                        item.status=false;
                    })
                }
            
        } 
    },
}
</script>

<style>
.jianju{
    margin-bottom: 10px;
}
/* 弹框*/
.el-dialog__body{
    padding: 0 20px;
}
.el-dialog__title{
    font-size: 14px;
    font-weight: 600;
}
.el-form-item__label{
    padding-right: 20px;
}
.thead{
    border-bottom: 1px solid #eee;
    padding: 10px 20px;
}
.thead span{
    font-weight: 600;
}
.caoz-a{
    text-align: right;
    width: 100%;
}
.caoz-a a{
    color:cornflowerblue;
    margin-right: 20px;
    margin-left: 0px;
}

.tbody{
    margin-left: 100px;
}
.tbody .el-row{
    border-bottom: 1px solid #eee;
    padding-right: 20px;
    height: 50px;
}
.tbody .el-row .el-col{
    display: flex;
}
.tbody .el-row .el-col div{
    align-self: center;
}
.tbody img{
    width: 40px;
}
.imgTitle *{
    vertical-align:middle
}
</style>