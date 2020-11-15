<template>
    <div class="bg-purple">
        <h5 class="view_title">商品分组</h5>
        <div class="content-wrap">
            <div class="bg-purple jianju">
                <el-button plain size="small" class="zhed-btn"><i class="el-icon-caret-bottom"></i> 折叠全部</el-button>
                <el-button plain size="small" style="float:right">新增一级分组</el-button>
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
            <div class="bg-purple jianju" v-for="item in primaryGroup" :key="item.title">
                <div class="thead">
                    <el-row>
                        <el-col :span="14">
                            <div>
                                <i :class="sicon"></i>
                                <span>{{item.title}}</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div @click.stop="">
                                <span>分组显示 </span>
                                <el-switch
                                v-model="item.status"
                                @change="changeSwitch()"
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
                <div class="tbody">
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
            value:true,
            isshow:true,
            sicon:'el-icon-caret-right',
            primaryGroup:[
                {
                    title:'洗家电器',
                    status:true,
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
        changeSwitch(){
            this.primaryGroup.forEach(primaryGroup =>{
                if(primaryGroup.status){
                    primaryGroup.subGroup.forEach(item=>{
                        item.status=true;
                    })
                }else{
                    primaryGroup.subGroup.forEach(item=>{
                        item.status=false;
                    })
                }
            })
        } 
    },
}
</script>

<style>
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