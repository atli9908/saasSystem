<template>
    <div class="bg-purple">
        <h4 class="h4_title">账号管理 - 新增子账号</h4>
        <div class="content-wrap">
            <div class="main">
                <el-row :gutter="20">
                    <el-col :span="4">
                        <span>登录名</span>
                    </el-col>
                    <el-col :span="3">
                        <el-select v-model="select">
                            <el-option value="1" label="0731"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="6"><el-input v-model="text" placeholder="请输入手机号码"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <span>姓名</span>
                    </el-col>
                    <el-col :span="8"><el-input v-model="text" placeholder="请输入手机号码"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <span>员工编号</span>
                    </el-col>
                    <el-col :span="8"><el-input v-model="text" placeholder="请输入手机号码"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <span>所属部门</span>
                    </el-col>
                    <el-col :span="8"><el-button>选择部门</el-button></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <span>自定义岗位</span>
                    </el-col>
                    <el-col :span="8"><el-button>选择岗位</el-button></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <span>客服</span>
                    </el-col>
                    <el-col :span="8">
                         <el-checkbox v-model="checked"></el-checkbox>
                         <span> 是否启用该账号作为子门店客服</span>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <span>说明</span>
                    </el-col>
                    <el-col :span="20">
                        <ol>
                            <li>导购请在导购管理中新增或删除，点击进入<a href="#">导购管理</a></li>
                            <li>门店管理员请在门店管理中新增或删除，点击进入<a href="#">门店管理</a></li>
                            <li>自提点管理员请在设置-自提点管理中新增或删除，点击进入<a href="#">自提点管理</a></li>
                            <li>当账号担任系统岗位时，账号所属门店不允许变革。请先删除系统岗位，再变更账号所在门店</li>
                        </ol>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="footer">
            <button>保存</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            select:'1',
            text:'',
            checked:false
        }
    }
}
</script>

<style scoped>
.h4_title{
    font-weight: 600;
    font-size: 13px;
    margin: 10px 0 20px 0;
}
.main .el-row{
    padding: 10px 0;
}
.main .el-col{
    overflow: hidden;
}
.main .el-col-4{ 
    text-align: right;
}
.main ol{
    margin: 0;
    padding-left: 15px;
}
.main ol li{
    color: #999;
    letter-spacing: 2px;
}
.main ol a{
    color: rgb(43, 131, 212);
}
.footer{
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