<template>
    <div class="bg-purple">
        <!-- 新增分组对话框 -->
        <el-dialog title="新增分组" :visible.sync="dialogFormVisible" width='40%'>
            <el-form :model="formGroupData" label-width="120px" :rules="rules" ref="formGroup">
                <el-form-item label="级别">
                    <el-radio-group v-model="formGroupData.groupClass" :disabled='disabled'>
                    <el-radio label="1">一级</el-radio>
                    <el-radio label="2">二级</el-radio>
                    </el-radio-group>
                </el-form-item>

                <div class="one" v-if="formGroupData.groupClass=='1'">
                    <el-form-item label="一级分组名称" prop="groupTitle">
                        <el-input
                        type="text"
                        placeholder="请输入内容"
                        v-model="formGroupData.groupTitle"
                        maxlength="5"
                        show-word-limit
                        >
                        </el-input>
                    </el-form-item>
                    <el-form-item label="分组状态">
                        <el-radio-group v-model="formGroupData.groupStatus">
                        <el-radio label='true'>显示</el-radio>
                        <el-radio label='false'>隐藏</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>

                <div class="two" v-else>
                    <el-form-item label="上级分组" prop="groupParent">
                        <el-select v-model="formGroupData.groupParent" placeholder="请选择">
                        <el-option v-for="(item,index) in groupDatas" :value='item.groupClass == 1 ? item.groupTitle : ""' :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="二级分组名称" prop="groupTitle">
                        <el-input 
                        type="text"
                        placeholder="请输入内容"
                        v-model="formGroupData.groupTitle"
                        maxlength="15"
                        show-word-limit>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="二级分组图片">
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :limit="1"
                        :file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="分组状态">
                        <el-radio-group v-model="formGroupData.groupStatus">
                        <el-radio label="true">显示</el-radio>
                        <el-radio label="false">隐藏</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button v-if="dialogStatus === 'create'" type="primary" @click="submitGroup()">确 定</el-button>
                    <el-button  v-else type="primary" @click="submiteUpGroup()">确 定</el-button>
                </div>
        </el-dialog>

        <h5 class="view_title">商品分组</h5>
        <div class="content-wrap">
            <div class="bg-purple jianju">
                <el-button plain size="small" class="zhed-btn"><i class="el-icon-caret-bottom"></i> 折叠全部</el-button>
                <el-button plain size="small" style="float:right" @click="createOneGroup()">新增一级分组</el-button>
            </div>
            <div class="bg-purple jianju my-table">
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
                                <span>显示分组 </span>
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

            <div class="bg-purple jianju" v-for="(item,index) in groupDatas" :key="item.ID">
                <div class="thead" ref="theads" @click="clickGroupRow(item)">
                    <el-row>
                        <el-col :span="14">
                            <div>
                                <i :class="sicon"></i>
                                <span>{{item.groupTitle}}</span>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div @click.stop="">
                                <span>{{item.groupStatus?'显示分组':'隐藏分组'}} </span>
                                <el-switch
                                v-model="item.groupStatus"
                                @change="changeSwitch(index)"
                                active-color="#13ce66"
                                inactive-color="#ccc">
                                </el-switch>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div @click.stop="" class="caoz-a">
                                <a href="#" @click="createTwoGroup(item)">新增二级分组</a>
                                <a href="#" @click="showUpDialog(item)">编辑</a>
                                <a href="#" @click="removeRow(item,item.ID)">删除</a>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="tbody">
                    <el-row v-for="child in item.children" :key="child.ID">
                        <el-col :span="7">
                            <div class="imgTitle">
                                <img src="/img/1.png" alt="">
                                <span> {{child.groupTitle}}</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div>
                                <span>商品数量：<a href="#">5</a> </span>
                            </div>
                        </el-col>      
                        <el-col :span="5">
                            <div>
                                <span>{{child.groupStatus?'显示分组 ':'隐藏分组 '}} </span>
                                <el-switch
                                @change="changeChildSwitch(child.ID,child.groupStatus)"
                                v-model="child.groupStatus"
                                active-color="#13ce66"
                                inactive-color="#ccc">
                                </el-switch>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="caoz-a">
                                <a href="#" @click="showUpDialog(child)">编辑</a>
                                <a href="#" @click="removeRow(child,child.ID)">删除</a>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
import {getRequest,postRequest,putRequest,deleteRequest} from '@/utils/request';
export default {
    data(){
        return {
            dialogStatus:'',
            dialogFormVisible:false,
            fileList: [],
            disabled:false,
            formGroupData:{
                groupTitle:'',
                groupClass:'',
                groupStatus:'true',
                groupParent:'',
                groupImg:''
            },
            groupDatas:[],
            rules: {
                groupTitle: [
                    { required: true, message: '请输入分组名称', trigger: 'blur' },
                    { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ],
                groupParent: [
                    { required: true, message: '请选择父级分组', trigger: 'change' }
                ]
            },
            value:true,
            isshow:true,
            sicon:'el-icon-caret-bottom',
            primaryGroup:[
                {
                    id:'1',
                    label:'洗家电器',
                    value:'xjdq',
                    status:true,
                    showTbody:true,
                    sicon:'el-icon-caret-bottom',
                    children:[
                        {id:'1',imgsrc:'/img/1.png',label:'擦地机',value:'cdj',status:true},
                        {id:'2',imgsrc:'/img/1.png',label:'吸尘器',value:'xcq',status:true},
                        {id:'3',imgsrc:'/img/1.png',label:'蒸汽清洗机',value:'zqqxj',status:false},
                        {id:'4',imgsrc:'/img/1.png',label:'配件',value:'xjpj',status:false},
                    ]
                },
                {
                    id:'2',
                    label:'美容清洗',
                    value:'mrqx',
                    status:true,
                    showTbody:true,
                    sicon:'el-icon-caret-bottom',
                    children:[
                        {id:'1',imgsrc:'/img/1.png',label:'高压清洗机',value:'gyqxj',status:false},
                        {id:'2',imgsrc:'/img/1.png',label:'清洁剂',value:'qjj',status:false},
                        {id:'3',imgsrc:'/img/1.png',label:'配件',value:'mrpj',status:false}
                    ]
                },
            ]
        }
    },
    mounted(){
        this.getGroupData();
    },
    methods:{   
        getGroupData(){  //初始化数据
            getRequest('/getGroup').then(res=>{
                console.log(res.data);
                this.groupDatas = res.data;
            })
        },
        createOneGroup(){
            this.formGroupData = {
                groupTitle:'',
                groupClass:'',
                groupStatus:'true',
                groupParent:'',
                groupImg:''
            };
            this.formGroupData.groupClass = "1";
            this.dialogFormVisible = true;
            this.dialogStatus = 'create';
            this.disabled = false;
        },
        createTwoGroup(data){
            this.formGroupData = {
                groupTitle:'',
                groupClass:'',
                groupStatus:'true',
                groupParent:'',
                groupImg:''
            };
            this.formGroupData.groupClass = "2";
            this.formGroupData.groupParent = data.groupTitle;
            this.dialogFormVisible = true;
            this.dialogStatus = 'create';
            this.disabled = false;
        },
        showUpDialog(data){
            this.dialogFormVisible = true;
            this.dialogStatus = 'updata';
            this.formGroupData = data;
            this.formGroupData.groupStatus = String(data.groupStatus);
            this.disabled = true;
        },
        submitGroup(){ //新增分组
            this.$refs.formGroup.validate((valid) => {
                if (valid) {
                    postRequest('/addGroup',this.formGroupData).then(res=>{
                        this.getGroupData();
                        console.log(res.statusText)
                    }).catch(err=>{
                        console.log(err)
                    });
                    this.dialogFormVisible = false;
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        submiteUpGroup(){ //修改分组
            console.log('bianji');
            putRequest('/group/updata',this.formGroupData).then(res=>{
                this.dialogFormVisible = false;
                this.$message({
                    showClose: true,
                    message: res.data.msg,
                    type: 'success'
                });
            }).catch(err=>{
                this.$message({
                    showClose: true,
                    message: err,
                    type: 'error'
                });
                this.getGroupData();
            })
        },
        changeChildSwitch(id,state){ //修改状态
            getRequest(`/group/status?id=${id}&state=${state}`).then(res=>{
                this.$message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success'
                });
            })
        },
        showTbody(){    
            this.isshow = !this.isshow
            this.sicon = this.isshow ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
        },
        clickGroupRow(row){
            console.log(row)
        },
        clickShow(row){
            this.primaryGroup[row].showTbody = !this.primaryGroup[row].showTbody
            this.primaryGroup[row].sicon = this.primaryGroup[row].showTbody ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
        },
        changeSwitch(index){      
            if(this.groupDatas[index].groupStatus){
                this.groupDatas[index].children.forEach(item=>{
                    item.groupStatus=true;
                })
            }else{
                this.groupDatas[index].children.forEach(item=>{
                    item.groupStatus=false;
                })
            }      
        },
        removeRow(data,id){  //删除分组
            if(data.children&&data.children.length>0){
                this.$confirm('存在子分组, 是否继续删除?','警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteRequest(`/group/delete?id=${id}`).then(res=>{
                        deleteRequest(`/group/deleteChildren?parent=${data.groupTitle}`).then(res=>{
                            this.$message({
                                showClose: true,
                                message: res.data.msg,
                                type: 'success'
                            });
                        })
                        this.$message({
                            showClose: true,
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.getGroupData();
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            }else{
                deleteRequest(`/group/delete?id=${id}`).then(res=>{
                    this.getGroupData();
                    this.$message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'success'
                    });
                })
            }
        }
    }
}
</script>

<style scoped lang='less'>
.jianju{
    margin-bottom: 10px;
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