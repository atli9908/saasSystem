<template>
    <div class="bg-purple">
        <div class="tab_div">
            <button :class="accountTab" value="account" @click="handleClick">账号管理</button>
            <button :class="postTab" value="post" @click="handleClick">岗位管理</button>
        </div>
        <!-- 权限管理对话框 -->
        <el-dialog title="权限明细" :visible.sync="dialogTableVisible" width="500px">
            <my-dialog/>
        </el-dialog>
        <!-- 新增岗位对话框 -->
        <el-dialog title="新增岗位" :visible.sync="postDialog">
            <el-form :model="addPost" :rules="rules" label-width="100px">
                <el-form-item label="岗位名称" prop="name">
                    <el-input v-model="addPost.name"></el-input>
                </el-form-item>
                 <el-form-item label="权限选择" prop="auth">
                    <el-checkbox-group v-model="addPost.auth">
                        <el-checkbox label="商家权限" name="type"></el-checkbox>
                        <el-checkbox label="门店权限" name="type"></el-checkbox>
                        <el-checkbox label="区域权限" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div class="tips">说明：岗位支持同时拥有三种权限。</div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="postDialog = false">取 消</el-button>
                <el-button type="primary" @click="postDialog = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 账号管理 -->
        <div class="content-wrap" v-if="viewShow">
            <div class="bg-purple jianju">
                <el-button @click="$router.push({name:'addAccount'})">新增子账号</el-button>
                <el-button>导入账号</el-button>
                <el-button>导出账号</el-button>
                <el-button>批量编辑账号</el-button>
                <el-select v-model="select" style="width:80px" class="left_margin">
                    <el-option value="1" label="更多"></el-option>
                </el-select>
                <el-select v-model="select1" placeholder="请选择岗位" style="width:160px" class="left_margin"> 
                    <el-option value="1" label="更多"></el-option>
                </el-select>
                <el-input placeholder="关键字" v-model="text" class="input-with-select" style="width:300px; float:right">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="手机号" value="1"></el-option>
                    </el-select>
                    <el-button slot="append">搜索</el-button>
                </el-input>
            </div>
            <div>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="bg-purple" style="height:310px">
                            <el-input placeholder="请输入区域/门店" v-model="text" class="input-with-select">
                                <el-button slot="append">搜索</el-button>
                            </el-input>
                            <dl>
                                <dt>生态居家官方旗舰店</dt>
                                    <dd><i class="el-icon-s-shop"></i> 智慧清洁体验馆</dd>
                            </dl>
                        </div>                       
                    </el-col>
                    <el-col :span="18">
                         <el-table
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            class="my-table"
                            :row-class-name="tableRowClassName"
                            @selection-change="handleSelectionChange">
                            <el-table-column
                            type="selection"
                            width="55">
                            </el-table-column>
                            <el-table-column
                            label="全部账号"
                            width="200">
                                <template v-slot="scope">
                                    <p>{{scope.row.account.name}}</p>
                                    <p>{{scope.row.account.phone}}</p>
                                </template>
                            </el-table-column>
                            <el-table-column
                            prop="department"
                            label="所属部门"
                            width="180">
                            </el-table-column>
                            <el-table-column
                            prop="post"
                            label="岗位"
                            width="160">
                            </el-table-column>
                            <el-table-column
                            label="操作">
                                <template>
                                    <a href="#">编辑</a>
                                    <a href="#" @click="dialogTableVisible=true">权限明细</a>
                                    <a href="#">删除</a>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 岗位管理 -->
        <div class="content-wrap" v-else="viewShow">
            <div class="bg-purple jianju">
                <el-button @click="postDialog = true">新增岗位</el-button>
                <el-button>删除岗位</el-button>
                <el-input placeholder="请输入岗位名称" v-model="text" class="input-with-select right-input">
                    <el-button slot="append">搜索</el-button>
                </el-input>
            </div>
            <div>
                <el-table
                    ref="multipleTable"
                    :data="tableData2"
                    tooltip-effect="dark"
                    style="width: 100%"
                    class="my-table"
                    :row-class-name="tableRowClassName"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    prop="title"
                    label="岗位名称"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="type"
                    label="岗位类型"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="num"
                    label="使用账号数量"
                    width="160">
                    </el-table-column>
                    <el-table-column
                    label="操作">
                        <template>
                            <router-link :to="{name:'setRights'}">编辑商家权限</router-link>
                            <a href="#">编辑门店权限</a>
                            <a href="#">编辑门店权限</a>
                            <a href="#">删除</a>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <my-page :data="{tableData,multipleSelection}"/>
    </div>
</template>

<script>
import myDialog from "./rightsDialog";
export default {
    components:{
        myDialog
    },
    data(){
        return {
            dialogTableVisible:false,
            postDialog:false,
            activeName:'account',
            accountTab:'activeTab',
            postTab:'defaultTab',
            select:'1',
            select1:'',
            text:'',
            tableData:[
                {account:{name:'李大大',phone:'17773229716'},department:['生态居家官方旗舰店(商家)','智慧清洁体验馆(门店)'],post:['商家管理员','门店管理员','自提点管理员']},
                {account:{name:'李大大',phone:'17773229716'},department:['生态居家官方旗舰店(商家)','智慧清洁体验馆(门店)'],post:['商家管理员','门店管理员','自提点管理员']},
                {account:{name:'李大大',phone:'17773229716'},department:['生态居家官方旗舰店(商家)','智慧清洁体验馆(门店)'],post:['商家管理员','门店管理员','自提点管理员']}
            ],
            tableData2:[
                {title:'门店',type:'商家',num:'2'}
            ],
            addPost:{
                name:'',
                auth:[],
            },
            rules: {
                name: [
                    { required: true, message: '请输入岗位名称', trigger: 'blur' },
                ],
            },
            multipleSelection: [],
            viewShow:true
        }
    },
    methods:{
       handleClick(ev){
           if(ev.target.value==="account"){
               this.accountTab = "activeTab";
               this.postTab = "defaultTab";
               this.viewShow = true;
           }else if(ev.target.value==="post"){
               this.accountTab = "defaultTab";
               this.postTab = "activeTab";
               this.viewShow = false;
           }
       },
       tableRowClassName({row,rowIndex}){
           console.log(row,rowIndex)
           if(rowIndex%2===0){
               return "rowStyle"
           }
       },
       handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

<style scoped lang="less">
/deep/.el-form-item__label{
    font-size: 12px;
}
/deep/.el-checkbox__label{
    font-size: 12px;
}
.tips{
    font-size: 12px;
    color: #aaa;
    margin-left: 50px;
}
.tab_div{
    margin: 10px 0;
}
.defaultTab{
    border: 0;
    padding: 8px 20px;
    color: #333;
    border-radius: 6px;
    background-color: white;
}
.activeTab{
    border: 0;
    padding: 8px 20px;
    border-radius: 6px;
    color: white;
    background-color: rgb(54, 152, 243);
}
button{
    cursor: pointer;
}
button:focus{
    outline: 0;
}
.left_margin{
    margin-left: 10px;
}
dt{
    font-size: 13px;
    font-weight: 600;
    padding: 10px 0;
    color: #666;
}
dd{
    font-size: 13px;
    padding: 10px 0;
    color: #666;
}
.my-table a{
    margin: 0 10px;
    color: rgb(43, 99, 251);
}
/deep/.el-table{
    border-radius: 10px;
    box-shadow: 0 0 5px #ddd;
}
/deep/.el-table .rowStyle {
    background: rgb(245, 245, 245);
}
.right-input{
    float: right;
    width: 250px;
}
</style>