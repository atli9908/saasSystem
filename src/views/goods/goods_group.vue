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
                        ref="upload"
                        class="upload-demo"
                        list-type="picture-card"
                        action=""
                        :auto-upload="false"
                        :show-file-list="false"
                        :http-request="httpRequest"
                        :on-change="onChange"
                        :on-success="onSuccess">
                            <img v-if="imgUrl" :src="imgUrl" alt="" class="uploadImg">
                            <i v-else class="el-icon-plus"></i>
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
                                @change="changeSwitch(item)"
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
                                <img :src="child.groupImg" alt="" style="width:36px;height:36px">
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
                                @change="changeSwitch(child)"
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
            disabled:false,
            imgUrl:'',
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
        }
    },
    mounted(){
        this.getGroupData();
    },
    methods:{   
        showTbody(){    
            this.isshow = !this.isshow
            this.sicon = this.isshow ? 'el-icon-caret-bottom' : 'el-icon-caret-right'
        },
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
            //使用Onject.assign拷贝不会造成数据联动
            Object.assign(this.formGroupData,data,{groupStatus:String(data.groupStatus)});
            this.imgUrl = data.groupImg;
            //this.formGroupData.groupStatus = String(data.groupStatus);
            this.disabled = true;
        },
        submitGroup(){ //新增分组
            this.$refs.formGroup.validate((valid) => {
                if (valid) {
                    //图片上传
                    this.$refs.upload.submit();
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
        httpRequest(){

        },
        onChange(file){
            this.imgUrl = URL.createObjectURL(file.raw);
            this.formGroupData.groupImg = file.url;
        },
        onSuccess(response, file, fileList){
            //console.log(response, file, fileList)
        },
        submiteUpGroup(){ //修改分组
            putRequest('/group/updata',this.formGroupData).then(res=>{
                if(this.formGroupData.groupClass==="1"){
                    getRequest(`/group/child/status?groupTitle=${this.formGroupData.groupTitle}&state=${this.formGroupData.groupStatus}`).then(res=>{
                        this.getGroupData();
                    })
                }
                this.getGroupData();
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
        changeSwitch(item){ //修改状态
            getRequest(`/group/status?id=${item.ID}&state=${item.groupStatus}`).then(res=>{
                this.$message({
                    showClose: true,
                    message: res.data.msg,
                    type: 'success'
                });
            })
            if(item.children&&item.children.length>0){ //判断是否有关联子分组               
                getRequest(`/group/child/status?groupTitle=${item.groupTitle}&state=${item.groupStatus}`).then(res=>{
                    this.getGroupData()     
                });               
            }
        },
        clickGroupRow(row){  //每类数据
            console.log(row)
        },
        removeRow(data,id){  //删除分组
            if(data.children&&data.children.length>0){
                this.$confirm('是否同步删除关联子分组?','警告', {
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
                this.$confirm(`是否删除 ${data.groupTitle} 分组?`,'警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(()=>{
                    deleteRequest(`/group/delete?id=${id}`).then(res=>{
                        this.$message({
                            showClose: true,
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.getGroupData();
                    })
                }).catch(()=>{
                    this.$message({
                        showClose: true,
                        message: '已取消',
                        type: 'success'
                    });    
                })
                
            }
        }
    }
}
</script>

<style scoped lang='less'>
.uploadImg{
    width: 145px;
    height: 145px;
    border-radius: 5px;
}
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