<template>
    <div class="bg-purple comment">
        <h5 class="view_title">商品评论</h5>
        <div class="content-wrap">
            <div class="bg-purple jianju div1">
                <el-select v-model="value" placeholder="全部评论" size="mini" class="select1">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <el-select size="mini" v-for="(item,index) in selects" v-model="value" :placeholder='item' class="selects">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-input placeholder="" v-model="searchText" size="mini" style="width:200px">
                    <el-button slot="append" icon="el-icon-search" style="padding:12px"></el-button>
                </el-input>

                <el-button plain size="mini">批量设置</el-button>
                <el-button plain size="mini">导出</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        selects: ["评价等级","评论方式","评论内容","全部回复","精选状态","商品名称"],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }],
        value: '',
        searchText:''
      }
    }
}
</script>

<style>
.jianju{
    margin-bottom: 10px;
}
.comment .div1 .el-select{
    margin-right: 10px;
    margin-bottom: 8px;
}
.comment .div1 .el-input{
    font-size: 12px;
}
.comment .div1 input::placeholder{
    color: #333;
}

/* 样式刷新才更新，bug待解决 */
.select1 {
    width: 150px;  
}
.select1 .el-input__inner{
    width: 150px;
}
.selects{
    width: 100px;
}
</style>