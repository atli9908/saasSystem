<template>
    <div class="bg-purple">
        <h5 class="shangp_title">商品库列表</h5>
        <div class="content-wrap">
            <div class="search-box bg-purple jianju">
                <div>
                    <el-input placeholder="请输入关键字" v-model="searchText" class="input-with-select" size="small">
                        <el-select v-model="select" slot="prepend">
                            <el-option label="商品名称" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                        <el-button slot="append">搜索</el-button>
                    </el-input>
                    <el-button plain size="small" class="shaix-btn">高级筛选</el-button>
                </div>
                <div style="height:30px; line-height:30px; margin-top:20px">
                    <div class="spbq">
                        <div><span>商品标签</span></div>
                        <div><el-button type="primary" size="mini" plain>不限</el-button></div>
                        <div><el-button size="mini">添加标签</el-button></div>
                    </div>
                </div>
                <hr class="aline"/>
                <div>
                    <div class="spbq">
                        <div style="line-height:25px"><span>快捷操作</span></div>
                        <div><el-button size="mini">新增商品</el-button></div>
                        <div><el-button size="mini">批量可售</el-button></div>
                        <div><el-button size="mini">批量禁售</el-button></div>
                        <div><el-button size="mini">修改分组</el-button></div>
                        <div><el-button size="mini">导出</el-button></div>
                        <div>
                            <el-select v-model="value" placeholder="更多" size="mini">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-box bg-purple">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
          options: [
           {
            value: '选项1',
            label: '黄金糕'
           }, {
            value: '选项2',
            label: '双皮奶'
           }, {
            value: '选项3',
            label: '蚵仔煎'
          }],
          searchText:'',
          select:'商品名称',
          value:''
        }
    }
}
</script>

<style>
.jianju{
    margin-bottom: 10px;
}
.shangp_title{
    margin: 26px 0;
}
.content-wrap{
    background-color: rgb(240, 240, 240);
    padding: 10px;
    border-radius: 5px;
}
.el-input{
    width: 35%;
}
.shaix-btn{
    float: right;
    margin-right: 20px;
    border: 1px solid rgb(83, 163, 255);
    color:rgb(83, 163, 255);
}
.el-select .el-input {
    width: 100px;
    font-size: 12px;
}
.el-input__inner{
    font-size: 12px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
    color: #000;
}
.el-input-group__append{
    background-color: #fff;
    color: #000;
}
.spbq{
    overflow: hidden;
}
.spbq div{
    float: left;
    margin-right: 10px;

}



</style>