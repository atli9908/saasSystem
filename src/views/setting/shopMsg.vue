<template>
    <div class="bg-purple">
        <div class="content-wrap jianju">
            <h4 class="h4_title">店铺信息</h4>
            <div class="main">
                <el-row :gutter="20">
                    <el-col :span="4"><span>商户名称</span></el-col>
                    <el-col :span="8"><el-input v-model="text" placeholder="请输入内容"></el-input></el-col>
                    <el-col :span="6"><span class="tip">将展示为前台店铺名称</span></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>商户地址</span></el-col>
                    <el-col :span="8">
                        <el-cascader
                            v-model="cascader"
                            :options="options"
                            @change="handleChange">
                        </el-cascader>    
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>商户行业</span></el-col>
                    <el-col :span="6">
                        <el-select v-model="select">
                            <el-option value="1" label="服装"/>
                            <el-option value="2" label="家装"/>
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <el-select v-model="select">
                            <el-option value="1" label="服装"/>
                            <el-option value="2" label="家装"/>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>是否海外商户</span></el-col>
                    <el-col :span="2"><el-radio v-model="radio" label="是"/></el-col>
                    <el-col :span="2"><el-radio v-model="radio" label="否"/></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>商户LOGO</span></el-col>
                    <el-col :span="5">
                        <img :src="headImg" alt="">
                        <a href="#" class="upload_a">修改
                            <input type="file" class="upload_pic" @change="showImg"/>
                        </a>
                        <p style="color:#aaa">LOGO</p>
                    </el-col>
                    <el-col :span="6"><span class="tip">将展示为前台店铺</span></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>营业时间</span></el-col>
                    <el-col :span="14">
                        <el-button>添加营业时间</el-button>
                        <div class="bg-purple">
                            <span>周一至周日: 08:30-23:00</span>
                            <div class="right">
                                <a href="#">修改</a>
                                <a href="#">删除</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>客服电话</span></el-col>
                    <el-col :span="8"><el-input v-model="text"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>客服简介</span></el-col>
                    <el-col :span="8"><el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" v-model="textarea"></el-input></el-col>
                </el-row>
            </div>
        </div>
        <div class="content-wrap" style="padding-bottom:50px">
            <h4 class="h4_title">运营人信息</h4>
            <div class="main">
                <el-row :gutter="20">
                    <el-col :span="4"><span>姓名</span></el-col>
                    <el-col :span="8"><el-input v-model="text"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>手机号码</span></el-col>
                    <el-col :span="8"><el-input v-model="text"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>QQ号</span></el-col>
                    <el-col :span="8"><el-input v-model="text"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>微信号</span></el-col>
                    <el-col :span="8"><el-input v-model="text"></el-input></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="4"><span>邮箱</span></el-col>
                    <el-col :span="8"><el-input v-model="text"></el-input></el-col>
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
        return{
            text:'',
            cascader:['hunan','changsha','yuhua'],
            options:[{
                value: 'hunan',
                label: '湖南省',
                children: [{
                    value: 'changsha',
                    label: '长沙市',
                    children: [{
                        value: 'yuelu',
                        label: '岳麓区'
                        }, {
                        value: 'yuhua',
                        label: '雨花区'
                    }]
                }]
            }],
            select:'1',
            radio:'1',
            headImg:'/img/1.png',
            textarea:''
        }
    },
    methods:{
        handleChange(value) {
            console.log(value);
        },
        showImg(ev){
            console.log(ev.target.value)
        }
    }
}
</script>

<style scoped lang="less">
.h4_title{
    font-weight: 500;
    margin: 20px;
}
.el-row{
    padding: 8px 0;
}
.el-col{
    overflow: hidden;
}
.el-col img{
    border-radius: 50%;
    width: 60px;
}
.el-cascader{
    width: 100%;
}
.el-select{
    width: 100%;
}
/deep/.el-col-4{
    // padding-top: 2px;
    text-align: right;
}
.tip{
    line-height: 35px;
    letter-spacing: 1px;
    color: rgb(148, 147, 147);
}
.upload_a{
    position: relative;
    vertical-align: top;
    padding-left: 20px;
    color:rgb(25, 112, 226);
}
.upload_pic{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    border-radius: 5px;
}
.right{
    float: right;
}
.right a{
    margin: 0 6px;
    color:rgb(25, 112, 226);
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