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
        <el-form :model="goodsInfo" :rules="rules" ref="goodsInfo" class="demo-ruleForm">
            <div v-show="isStep===1">
                <div class="content-wrap">
                    <h4>基本信息</h4>
                    <el-form-item label="商品类型">
                    <el-radio-group v-model="goodsInfo.type">
                        <el-radio label="1">实物商品<span class="tips">(物流发货)</span></el-radio>
                        <el-radio label="2">实物商品<span class="tips">(跨境海淘)</span></el-radio>
                        <el-radio label="3">虚拟商品<span class="tips">(通用)</span></el-radio>
                        <el-radio label="4">虚拟商品<span class="tips">(付费卷)</span></el-radio>
                    </el-radio-group>
                    </el-form-item>

                    <el-form-item prop="channel" label="销售渠道">
                    <el-checkbox-group v-model="goodsInfo.channel" class="checklist">
                        <el-checkbox label="1">线上销售</el-checkbox>
                        <el-checkbox label="2">线下销售</el-checkbox>
                    </el-checkbox-group>
                    </el-form-item>

                    <el-form-item label="销售模式">
                    <el-radio-group v-model="goodsInfo.pattern">
                        <el-radio label="1">现货销售</el-radio>
                        <el-radio label="2">预售模式</el-radio>
                    </el-radio-group>
                    </el-form-item>

                    <el-form-item prop="category" label="商品类目">
                    <el-button plain autofocus size="small">选择商品类目</el-button>
                    </el-form-item>

                    <el-form-item label="商品规格">
                    <el-radio-group v-model="goodsInfo.norm">
                        <el-radio label="1">统一规格</el-radio>
                        <el-radio label="2">多规格</el-radio>
                    </el-radio-group>
                    </el-form-item>

                    <el-form-item prop="title" label="商品名称">
                    <el-input v-model="goodsInfo.title" placeholder="请输入商品名称" size="small"></el-input>
                    </el-form-item>

                    <el-form-item label="商品标语">
                    <el-input v-model="goodsInfo.slogan" placeholder="请输入商品标语" size="small"></el-input>
                    </el-form-item>

                    <el-form-item label="SPU编码">
                    <el-input v-model="goodsInfo.spu" placeholder="请输入SPU编码" size="small"></el-input>
                    </el-form-item>

                    <el-form-item label="商家编码">
                    <el-input v-model="goodsInfo.s_spu" placeholder="请输入商家编码" size="small"></el-input>
                    </el-form-item>

                    <el-form-item prop="price" label="商家统一价">
                    <el-input v-model="goodsInfo.price" placeholder="请输入商家统一价" size="small"></el-input>
                    </el-form-item>

                    <el-form-item label="门店售价区间">
                    <el-input v-model="goodsInfo.spread" size="small" style="width:100px"></el-input>
                    -
                    <el-input v-model="text" size="small" style="width:100px"></el-input>
                    </el-form-item>

                    <el-form-item label="市场价">
                    <el-input v-model="goodsInfo.child_price" placeholder="请输入市场价" size="small"></el-input>
                    </el-form-item>

                    <el-form-item label="重量">
                    <el-input v-model="goodsInfo.weight" size="small" placeholder="重量">
                        <template slot="append">KG</template>
                    </el-input>
                    </el-form-item>

                    <el-form-item label="体积">
                    <el-input v-model="goodsInfo.bulk" size="small" placeholder="体积">
                        <template slot="append">㎡</template>
                    </el-input>
                    </el-form-item>

                    <el-form-item prop="img" label="商品图片">
                    <el-upload
                    class="addImgBox"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success="handSuccess"
                    :before-upload="beforeAvatarUpload"
                    multiple>
                        <i class="el-icon-plus"></i>
                        <div class="el-upload__tip tips" slot="tip">只能上传jpg/png文件，且不超过5M</div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                        <img width="100%" :src="goodsInfo.img" alt="">
                    </el-dialog>
                    </el-form-item>

                    <el-form-item prop="video" label="主图视频">
                    <el-upload
                    class="addImgBox"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        <div class="el-upload__tip tips" slot="tip">只能上MP4/MVG文件，且不超过10M</div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                        <img width="100%" :src="goodsInfo.video" alt="">
                    </el-dialog>
                    </el-form-item>
                </div>
                <div class="content-wrap">
                    <h4>交付设置</h4>
                    <el-form-item prop="delivery" label="配送方式">
                    <el-checkbox-group v-model="goodsInfo.delivery" class="checklist">
                        <el-checkbox label="1">商家配送</el-checkbox>
                        <el-checkbox label="2">到店自提</el-checkbox>
                    </el-checkbox-group>
                    </el-form-item>
                    <el-form-item prop="delivery_model" label="商家配送模板">
                    <el-select v-model="goodsInfo.delivery_model" placeholder="请选择" size="small" @change="handChange">
                        <el-option
                        v-for="item in delivery_options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <a href="#">刷新</a>
                    <a href="#">新增</a>
                    <a href="#">收起模板</a>
                    </el-form-item>
                    <div class="freightModel">
                        <el-table
                            :data="delivery_info"
                            style="width: 100%"
                            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                            class="my-table">
                            <el-table-column
                            prop="area"
                            label="配送区域">
                            </el-table-column>
                            <el-table-column
                            prop="piece"
                            label="首件(件)">
                            </el-table-column>
                            <el-table-column
                            prop="freight"
                            label="运费(元)">
                            </el-table-column>
                            <el-table-column
                            prop="addArea"
                            label="续件(件)">
                            </el-table-column>
                            <el-table-column
                            prop="addfreight"
                            label="续费(元)">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
            <div v-show="isStep===2">
                <div class="content-wrap">
                    <h4>属性参数</h4>                   
                    <el-form-item label="商品分组">                     
                         <el-cascader
                            expand-trigger="hover"
                            :options="goodsInfo.group"
                            :show-all-levels="false"
                            v-model="groupList"
                            @change="handleGroupChange">
                        </el-cascader>
                    </el-form-item>               
                    <el-form-item label="商品属性">
                        <div class="col-box">
                            <el-button plain size="small" class="btn"> <i class="el-icon-plus"></i> 新增属性</el-button>
                            <span class="tips">最多支持10个属性，商品属性可用于微信端商品列表筛选，可在【商品属性】栏目中设置</span>
                        </div>
                    </el-form-item>
                                  
                    <el-form-item label="商品内部属性">              
                        <div class="col-box">
                            <el-button plain size="small" class="btn"> <i class="el-icon-plus"></i> 新增内部属性</el-button>
                            <span class="tips">最多支持10个属性，商品属性可用于微信端商品列表筛选，可在【商品属性】栏目中设置</span>
                        </div>
                    </el-form-item>
        
                    <el-form-item label="商品参数">
                        <div class="col-box">
                            <el-button plain size="small" class="btn"> <i class="el-icon-plus"></i> 新增参数</el-button>
                            <span class="tips">最多支持10个属性，商品属性可用于微信端商品列表筛选，可在【商品属性】栏目中设置</span>
                        </div>
                    </el-form-item>

                    <el-form-item label="商品服务">
                        <div class="col-box">
                            <el-button plain autofocus size="small" class="btn"> <i class="el-icon-plus"></i> 新增服务</el-button>
                            <span class="tips">最多支持10个属性，商品属性可用于微信端商品列表筛选，可在【商品属性】栏目中设置</span>
                        </div>
                    </el-form-item>
           
                    <el-form-item label="商品标签" prop="resource">
                        <el-select size="small" v-model="goodsInfo.tag">
                            <el-option
                                v-for="item in goodsInfo.tag"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <a href="#">新增</a>
                        <span class="tips">标签显示在商品右上角</span>
                        <a href="#">查看示例</a>
                    </el-form-item>
               
                    <el-form-item label="商品档案">
                        <el-button size="small">选择模板</el-button>
                        <a href="#">新增</a>
                        <a href="#">清空</a>
                        <span class="tips">将显示在微盟商户助手的详情商品页中</span>
                        <a href="#">查看示例</a>
                    </el-form-item>
    
                    <el-form-item label="初始销量">
                        <el-input v-model="goodsInfo.initial_sales" placeholder="请输入内容" size="small"></el-input>
                        <span class="tips">设置后，您的用户看到的销售=初始销量+实际销量</span>
                    </el-form-item>
        
                    <el-form-item label="每人限购">
                        <el-select size="small" v-model="goodsInfo.quota">
                            <el-option
                                v-for="item in goodsInfo.quota"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>                   
                        <div class="hr-tips">
                            <span>
                                限购周期以自然周期计算，如每周从每周一至周日计算，每年从1月1日至12月30日计算，其它周期同理；变更限购周期后，系统将重新累加用户已购数量。
                            </span>
                        </div>
                    </el-form-item>
                
                    <el-form-item label="库存计算方式">
                        <el-radio-group v-model="goodsInfo.sku">
                            <el-radio label="1" style="margin-right:0">下单减库存</el-radio>
                            <span class="tips">存在<span style="color:red">恶拍风险</span></span>
                            <el-radio label="2" style="margin-right:0">支付减库存</el-radio>
                            <span class="tips">超卖订单将扣成负库存或自动发起售后，前往<a href="#">设置</a></span>
                        </el-radio-group>
                    </el-form-item>
        
                    <el-form-item label="可售状态">
                        <el-radio-group v-model="goodsInfo.status">
                            <el-radio label='1'>可售</el-radio>
                            <el-radio label='2'>禁售</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
            </div>
            <div v-show="isStep===3">
                <div class="content-wrap">
                    <h4>商品详情</h4>
                    <div class="richImg">
                        <img src="/img/xq-tips.png" alt="">
                    </div>
                    <div class="rich">
                        <div>
                            <span>商品页模板</span>
                            <el-select v-model="goodsInfo.detailPage" placeholder="请选择" size="small" class="rich-select">
                                <el-option
                                v-for="item in goodsInfo.detailPage"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <a href="#">刷新</a>
                            <a href="#">新增</a>
                          
                            <!-- 富文本编辑器 -->
                            <div id="editor" class="richText">
                                <ckeditor :editor="editor" v-model="goodsInfo.editorData" :config="editorConfig"></ckeditor>
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>
        </el-form>
        <div class="bottomFixed">
            <div>
                <el-button size="small">取消</el-button>
                <el-button size="small" v-show="lastButton" @click="last()">上一步</el-button>
                <el-button size="small" v-show="nextButton" type="primary"  @click="next()">下一步</el-button>
                <el-button size="small" type="primary">保存</el-button>
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
            isStep:1,
            lastButton:false,
            nextButton:true,
            goodsInfo:{
                type:'1',
                channel:['1','2'],
                pattern:'1',
                category:'',
                norm:'1',
                title:'',
                slogan:'',
                spu:'',
                s_spu:'',
                price:'',
                spread:'',
                child_price:'',
                weight:'',
                bulk:'',
                img:'',
                video:'',
                delivery:['1','2'],
                delivery_model:'顺丰包邮',
                group:[
                    {
                        label:'洗家电器',
                        value:'xjdq',
                        status:true,
                        showTbody:true,
                        sicon:'el-icon-caret-bottom',
                        children:[
                            {imgsrc:'/img/1.png',label:'擦地机',value:'cdj',status:true},
                            {imgsrc:'/img/1.png',label:'吸尘器',value:'xcq',status:true},
                            {imgsrc:'/img/1.png',label:'蒸汽清洗机',value:'zqqxj',status:false},
                            {imgsrc:'/img/1.png',label:'配件',value:'xjpj',status:false},
                        ]
                    },
                    {
                        label:'美容清洗',
                        value:'mrqx',
                        status:true,
                        showTbody:true,
                        sicon:'el-icon-caret-bottom',
                        children:[
                            {imgsrc:'/img/1.png',label:'高压清洗机',value:'gyqxj',status:false},
                            {imgsrc:'/img/1.png',label:'清洁剂',value:'qjj',status:false},
                            {imgsrc:'/img/1.png',label:'配件',value:'mrpj',status:false}
                        ]
                    },
                ],
                attribute:'',
                interior_attribute:'',
                paramet:'',
                serve:'',
                tag:[],
                file:'',
                initial_sales:'',
                quota:[],
                sku:'1',
                status:'1',
                detailPage:[],
                editorData:'<p>Content of the editor.</p>'
            },
            rules:{
                channel:[
                    { required: true, message: '请选择销售渠道', trigger: 'change' }
                ],
                category:[
                    { required: true, message: '请选择商品类目', trigger: 'change' }
                ],
                title:[
                    { required: true, message: '请输入商品名称', trigger: 'blur' }
                ],
                price:[
                    { required: true, message: '请输入商品价格', trigger: 'blur' }
                ],
                img:[
                    { required: true, message: '请输入商品图片', trigger: 'blur' }
                ],
                delivery_model:[
                    { required: true, message: '请选择商家配送模板', trigger: 'change' }
                ]

            },
            active:0,
            text:'',
            radio:'',
            dialogVisible:false,
            delivery_options:[
                {value:1,label:'顺丰包邮',info:[{area:'湖南省',piece:1,freight:0,addArea:0,addfreight:0}]},
                {value:2,label:'顺丰不包邮',info:[{area:'四川省',piece:1,freight:18,addArea:0,addfreight:0}]}
            ],
            delivery_info:[{area:'湖南省',piece:1,freight:0,addArea:0,addfreight:0}],
            groupList:[],
            value:1,
            editor: ClassicEditor,
            editorConfig: { // The configuration of the editor编辑器配置.
                language: 'zh-cn' //汉化
            }
        }
    },
    methods: {
        handChange(value){
            this.delivery_options.forEach(item=>{
                if(item.value===value){
                    this.delivery_info = item.info;
                }
            })
        },
        handleGroupChange(value) {
            console.log(value);
        },
        beforeAvatarUpload(file){
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png'
            const isLt5M = file.size / 1204 / 1024 /1024 /1024 / 1024 < 5;
            if (!isJPG && !isPNG) {
                this.$message.error('上传图片格式不正确!');
            }
            if (!isLt5M) {
                this.$message.error('上传图片大小不能超过 5MB!');
            }
            return (isJPG || isPNG) && isLt5M;
        },
        handSuccess(){},
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.goodsInfo.img = file.url;
            this.dialogVisible = true;
        },
        handButton(){
            if(this.active===0){
                this.lastButton = false;
                this.nextButton = true;
            }else if(this.active===1){
                this.showButton = true;
                this.lastButton = true;
                this.nextButton = true;
            }else if(this.active===2){
                this.lastButton = true;
                this.nextButton = false;
            }
        },
        next(){           
            this.active++;
            this.isStep++;
            this.handButton();          
        },
        last(){
            this.active--;
            this.isStep--;
            this.handButton();
        }
    },
    mounted(){
        
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
    margin: 0 10px
}
.hr-tips{
    color: #aaa;
    margin-left: 130px;
}
.bg-purple{
    padding-bottom: 50px;
    min-width:800px;
    overflow-x: auto;
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
/deep/.el-form-item__label{
    font-size: 12px!important;
    color:#222;
    margin-right: 20px;
    width: 110px;
}
/deep/.el-form-item__error{ //红色提示
    margin-left: 120px;
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
    width: 130px;
}
/deep/.el-input-group__append{
    padding: 0;
    width: 30px;
    text-align: center;
}
.addImgBox{
    display: inline-block;
}
.freightModel{
    width: 600px;
    margin: 10px 0 30px 130px;
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
.col-box{
    display: inline-block;
    width: 80%;
    background: white;
    justify-content: center;
    padding: 20px 0;
    border-radius: 5px;
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