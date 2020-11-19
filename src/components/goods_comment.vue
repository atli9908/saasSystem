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
                
                <el-input placeholder="" v-model="searchText" size="mini" class="searchipt">
                    <el-button slot="append" icon="el-icon-search" style="padding:12px"></el-button>
                </el-input>
                <div>
                    <el-button plain size="mini">批量设置</el-button>
                    <el-button plain size="mini">导出</el-button>
                </div>
                
            </div>

            <div class="bg-purple my-table">
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%">
                    <el-table-column
                    type="selection"
                    width="40">
                    </el-table-column>
                    <el-table-column
                    label="评论内容"
                    show-overflow-tooltip
                    width="200">
                        <template v-slot='scope'>
                            <div>
                                <el-tag type="success" size="mini">好评</el-tag>
                                <span>{{scope.row.content}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                    label="商品信息"
                    show-overflow-tooltip
                    width="200">
                        <template v-slot="scope">
                            <div class="msgImg">
                                <img src="/img/1.png" alt="">
                                <span>{{scope.row.msg}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop="shop"
                    label="销售门店"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="客户姓名"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="phone"
                    label="手机号"
                    width="100">
                    </el-table-column>
                    <el-table-column
                    prop="date"
                    label="评论时间"
                    width="100"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="操作">
                        <template>
                            <div class="caoz">
                                <a href="#">设为精选</a>
                                <a href="#">隐藏</a>
                                <a href="#">回复</a>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
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
        searchText:'',
        tableData3: [{
          content:'东西很好，我很喜欢',
          msg:'卡赫家用吸尘器NT30/1',
          shop:'生态居家旗舰店',
          name:'lisa',
          phone:'1777777777',
          date: '2016-05-03 20:12'
        }, {
          content:'好评好评好评好评好评好评好评',
          msg:'吸尘器吸尘器吸尘器吸尘器吸尘器吸尘器',
          shop:'生态居家旗舰店',
          name:'lisa',
          phone:'1777777777',
          date: '2016-05-03'
        }],
        multipleSelection: []
      }
    }
}
</script>

<style scoped>
.jianju{
    margin-bottom: 10px;
}
.comment .div1 .el-select{
    margin-right: 10px;
    margin-bottom: 8px;
}
.select1{
    width: 150px;
}
.selects{
    width: 100px;
}
.comment .searchipt{
    margin-right: 10px;
    margin-bottom: 8px; 
    width: 200px;
    position: absolute;
}
.comment .div1 .el-input{
    font-size: 12px;
}
.comment .div1 input::placeholder{
    color: #333;
}
.msgImg img{
    width: 30px;
    vertical-align:middle;
    margin-right: 5px;
}
</style>