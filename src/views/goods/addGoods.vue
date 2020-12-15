<template>
    <div class="bg-purple">
        <h5 class="view_title">商品库列表 - 新增商品</h5>
        <div>
            <el-steps :active="active" space="500px" align-center>
                <el-step title="基本信息"></el-step>
                <el-step title="拓展信息"></el-step>
                <el-step title="图文详情"></el-step>
            </el-steps>
        </div>
        <div v-show="content1">
            <div class="content-wrap">
                <h4>基本信息</h4>
                <div>
                    <span class="span-title">商品类型</span>
                    <el-radio-group v-model="radio">
                        <el-radio label="1">实物商品</el-radio><span class="tips">(物流发货)</span>
                        <el-radio label="2">实物商品(跨境海淘)</el-radio>
                        <el-radio label="3">虚拟商品(通用)</el-radio>
                        <el-radio label="4">虚拟商品(付费卷)</el-radio>
                    </el-radio-group>
                </div>
                <div>
                    <span class="span-title">销售渠道</span>
                    <el-checkbox-group v-model="checkList" class="checklist">
                        <el-checkbox label="1">线上销售</el-checkbox>
                        <el-checkbox label="2">线下销售</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div>
                    <span class="span-title">销售模式</span>
                    <el-radio-group v-model="radio">
                        <el-radio label="1">现货销售</el-radio>
                        <el-radio label="2">预售模式</el-radio>
                    </el-radio-group>
                </div>
                <div>
                    <span class="span-title">商品类目</span>
                        <el-button plain autofocus size="small">选择商品类目</el-button>
                </div>
                <div>
                    <span class="span-title">商品规格</span>
                    <el-radio-group v-model="radio">
                        <el-radio label="1">统一规格</el-radio>
                        <el-radio label="2">多规格</el-radio>
                    </el-radio-group>
                </div>
                <div>
                    <span class="span-title">商品名称</span>
                        <el-input v-model="text" placeholder="请输入商品名称" size="small"></el-input>
                </div>
                <div>
                    <span class="span-title">商品标语</span>
                        <el-input v-model="text" placeholder="请输入商品名称" size="small"></el-input>
                </div>
                <div>
                    <span class="span-title">SPU编码</span>
                        <el-input v-model="text" placeholder="请输入商品名称" size="small"></el-input>
                </div>
                <div>
                    <span class="span-title">商家编码</span>
                        <el-input v-model="text" placeholder="请输入商品名称" size="small"></el-input>
                </div>
                <div>
                    <span class="span-title">商家统一价</span>
                        <el-input v-model="text" placeholder="请输入商品名称" size="small"></el-input>
                </div>
                <div class="qujianInput">
                    <span class="span-title">门店售价区间</span>
                        <el-input v-model="text" size="small"></el-input>
                        -
                        <el-input v-model="text" size="small"></el-input>
                </div>
                <div>
                    <span class="span-title">市场价</span>
                        <el-input v-model="text" placeholder="请输入商品名称" size="small"></el-input>
                </div>
                <div>
                    <span class="span-title">重量</span>
                        <el-input v-model="text" size="small" placeholder="重量">
                            <template slot="append">KG</template>
                        </el-input>
                </div>
                <div>
                    <span class="span-title">体积</span>
                        <el-input v-model="text" size="small" placeholder="体积">
                            <template slot="append">㎡</template>
                        </el-input>
                </div>
                <div>
                    <span class="span-title">商品图片</span>
                    <el-upload
                    class="addImgBox"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        <div class="el-upload__text">添加图片</div>
                    </el-upload>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
                <div>
                    <span class="span-title">主图视频</span>
                    <el-upload
                    class="addImgBox"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </div>
            <div class="content-wrap">
                <h4>交付设置</h4>
                <div>
                    <span class="span-title">配送方式</span>
                    <el-checkbox-group v-model="checkList" class="checklist">
                        <el-checkbox label="1">商家配送</el-checkbox>
                        <el-checkbox label="2">到店自提</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div>
                    <span class="span-title">商家配送模板</span>
                    <el-select v-model="value" placeholder="请选择" size="small">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <a href="#">刷新</a>
                    <a href="#">新增</a>
                    <a href="#">收起模板</a>
                    <div class="freightModel">
                        <el-table
                            :data="tableData"
                            style="width: 100%"
                            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                            class="my-table">
                            <el-table-column
                            prop="date"
                            label="配送区域">
                            </el-table-column>
                            <el-table-column
                            prop="date"
                            label="首件(件)">
                            </el-table-column>
                            <el-table-column
                            prop="date"
                            label="运费(元)">
                            </el-table-column>
                            <el-table-column
                            prop="date"
                            label="续件(件)">
                            </el-table-column>
                            <el-table-column
                            prop="date"
                            label="续费(元)">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="content2">
            <div class="content-wrap">
                <h4>属性参数</h4>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>商品分组</span>
                    </el-col>
                    <el-col :span="20">
                        <el-input v-model="text" placeholder="请输入内容" size="small"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>商品属性</span>
                    </el-col>
                    <el-col :span="18">
                        <div class="col-box">
                            <el-button plain size="small" class="btn"> <i class="el-icon-plus"></i> 新增属性</el-button>
                            <span class="tips">最多支持10个属性，商品属性可用于微信端商品列表筛选，可在【商品属性】栏目中设置</span>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>商品内部属性</span>
                    </el-col>
                    <el-col :span="18">
                        <div class="col-box">
                            <el-button plain size="small" class="btn"> <i class="el-icon-plus"></i> 新增内部属性</el-button>
                            <span class="tips">最多支持10个属性，商品属性可用于微信端商品列表筛选，可在【商品属性】栏目中设置</span>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>商品参数</span>
                    </el-col>
                    <el-col :span="18">
                        <div class="col-box">
                            <el-button plain size="small" class="btn"> <i class="el-icon-plus"></i> 新增参数</el-button>
                            <span class="tips">最多支持10个属性，商品属性可用于微信端商品列表筛选，可在【商品属性】栏目中设置</span>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>商品服务</span>
                    </el-col>
                    <el-col :span="18">
                        <div class="col-box">
                            <el-button plain autofocus size="small" class="btn"> <i class="el-icon-plus"></i> 新增服务</el-button>
                            <span class="tips">最多支持10个属性，商品属性可用于微信端商品列表筛选，可在【商品属性】栏目中设置</span>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>商品标签</span>
                    </el-col>
                    <el-col :span="20">
                        <el-select size="small" v-model="options">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <a href="#">新增</a>
                        <span class="tips">标签显示在商品右上角</span>
                        <a href="#">查看示例</a>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>商品档案</span>
                    </el-col>
                    <el-col :span="20">
                        <el-button size="small">选择模板</el-button>
                        <a href="#">新增</a>
                        <a href="#">清空</a>
                        <span class="tips">将显示在微盟商户助手的详情商品页中</span>
                        <a href="#">查看示例</a>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>初始销量</span>
                    </el-col>
                    <el-col :span="20">
                        <el-input v-model="text" placeholder="请输入内容" size="small"></el-input>
                        <span class="tips">设置后，您的用户看到的销售=初始销量+实际销量</span>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title">
                        <span>每人限购</span>
                    </el-col>
                    <el-col :span="20">
                        <el-select size="small" v-model="options">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <div>
                            <span class="tips">
                                限购周期以自然周期计算，如每周从每周一至周日计算，每年从1月1日至12月30日计算，其它周期同理；变更限购周期后，系统将重新累加用户已购数量。
                            </span>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title" style="padding-top:0">
                        <span>库存计算方式</span>
                    </el-col>
                    <el-col :span="20">
                        <el-radio v-model="radio" label="1" style="margin-right:0">下单减库存</el-radio>
                        <span class="tips">存在<span style="color:red">恶拍风险</span></span>
                        <el-radio v-model="radio" label="1" style="margin-right:0">支付减库存</el-radio>
                        <span class="tips">超卖订单将扣成负库存或自动发起售后，前往<a href="#">设置</a></span>
                    </el-col>
                </el-row>
                <el-row :gutter="30" class="eachRow">
                    <el-col :span="3" class="col-title" style="padding-top:0">
                        <span>可售状态</span>
                    </el-col>
                    <el-col :span="20">
                        <el-radio v-model="radio" label="1">可售</el-radio>
                        <el-radio v-model="radio" label="1">禁售</el-radio>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div v-show="content3">
            <div class="content-wrap">
                <h4>商品详情</h4>
                <div class="richImg">
                    <img src="/img/xq-tips.png" alt="">
                </div>
                <div class="rich">
                    <div>
                        <span>商品页模板</span>
                        <el-select v-model="value" placeholder="请选择" size="small" class="rich-select">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <a href="#">刷新</a>
                        <a href="#">新增</a>
                        <div class="richText">
                            <!-- 富文本编辑器 -->
                            <div id="editor">
                                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottomFixed">
            <div>
                <el-button size="small">取消</el-button>
                <el-button size="small" v-show="lastButton" @click="last">上一步</el-button>
                <el-button size="small" v-show="nextButton" type="primary"  @click="next">下一步</el-button>
                <el-button size="small" type="primary">确认</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';
export default {
    data(){
        return {
            content1:true,
            content2:false,
            content3:false,
            lastButton:false,
            nextButton:true,
            active:0,
            radio:'',
            checkList:[],
            text:'',
            dialogVisible:false,
            dialogImageUrl:'',
            options:[
                {value:1,label:'顺丰包邮'},
                {value:2,label:'选项二'}
            ],
            value:1,
            tableData:[],
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                // The configuration of the editor.
                language: 'zh-cn'
            }
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        next(){
            this.active++;
            if(this.active===0){
                this.content1 = true;
                this.content2 = false;
                this.content3 = false;
                this.lastButton = false;
                this.nextButton = true;
            }else if(this.active===1){
                this.content1 = false;
                this.content2 = true;
                this.content3 = false;
                this.showButton = true;
                this.lastButton = true;
                this.nextButton = true;
            }else if(this.active===2){
                this.content1 = false;
                this.content2 = false;
                this.content3 = true;
                this.lastButton = true;
                this.nextButton = false;
            }
        },
        last(){
            this.active--
            if(this.active===0){
                this.content1 = true;
                this.content2 = false;
                this.content3 = false;
                this.lastButton = false;
                this.nextButton = true;
            }else if(this.active===1){
                this.content1 = false;
                this.content2 = true;
                this.content3 = false;
                this.showButton = true;
                this.lastButton = true;
                this.nextButton = true;
            }else if(this.active===2){
                this.content1 = false;
                this.content2 = false;
                this.content3 = true;
                this.lastButton = true;
                this.nextButton = false;
            }
        }
    }
}
</script>

<style scoped lang="less">
a{
    margin: 0 5px;
    color: rgb(61, 104, 245);
}
.tips{
    color: #aaa;
    margin: 0 20px
}
.bg-purple{
    padding-bottom: 50px;
}
.content-wrap{
    margin: 10px 0;
    overflow: hidden;
}
h4{
    margin: 10px 0 20px 10px;
}
/deep/.el-step__title{
    font-size: 14px;
}
/deep/.el-radio__label,/deep/.el-checkbox__label{
    font-size: 12px;
    padding-left: 2px;
}
.span-title{
    display: inline-block;
    margin-right: 20px;
    padding: 15px 0;
    text-align: right;
    width: 80px;
}
.checklist{
    display: inline-block;
}
.el-input{
    width: 300px;
}
.qujianInput .el-input{
    width: 80px;
}
.el-input-group--append{
    width: 120px;
}
/deep/.el-input-group__append{
    padding: 0;
    width: 30px;
    text-align: center;
}
.addImgBox{
    display: inline-block;
}
.el-upload__tip{
    padding-left: 100px;
}
.freightModel{
    width: 600px;
    margin: 10px 0 30px 100px;
    box-shadow: 0 0 5px #ccc;
}
.bottomFixed{
    position: fixed;
    bottom: 0;
    left:175px;
    right: 20px;
    height: 60px;
    
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    z-index: 1000;
    text-align: center;
}
/deep/.bottomFixed .el-button{
    width: 100px;
    margin-top: 10px;
}
.eachRow{
    margin: 20px 0;
}
/deep/.el-col{
    overflow: hidden;
}
.col-box{
    background: white;
    justify-content: center;
    padding: 20px 0;
}
.col-box .btn{
    margin: 0 10px;
    border: 1px solid rgb(74, 145, 228);;
    color: rgb(74, 145, 228);
}
.col-title{
    text-align: right;
    padding-top: 5px;
}
.rich,.richImg{
    float: left;
    margin: 0 20px;
}
.rich-select{
    margin:0 20px;
}
.richText{
    margin-top: 12px;
    width: 600px;
}
/deep/.ck-editor__editable { 
    min-height: 580px; 
}
</style>