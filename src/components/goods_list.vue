<template>
    <div class="bg-purple">
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <div class="gropdiv">
                <span class="tag-title">商品类型</span>
                <span class="my-tag" :class="active">全部</span>
                <span class="my-tag">实物商品(需配送)</span>
                <span class="my-tag">虚拟商品(无配送)</span>
                <span class="my-tag">海淘 商品</span>
            </div>
            <div class="gropdiv">
                <span class="tag-title">销售渠道</span>
                <span class="my-tag" :class="active">全部</span>
                <span class="my-tag">线上</span>
                <span class="my-tag">线下</span>
                <span class="my-tag">线上+线下</span>
            </div>
            <div class="gropdiv">
                <span class="tag-title">销售模式</span>
                <span class="my-tag" :class="active">全部</span>
                <span class="my-tag">现货销售</span>
                <span class="my-tag">预售模式</span>
            </div>
            <div class="gropdiv">
                <span class="tag-title">可售状态</span>
                <span class="my-tag" :class="active">全部</span>
                <span class="my-tag">禁售</span>
                <span class="my-tag">可售</span>
            </div>
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        <h5 class="shangp_title">商品库列表</h5>
        <div class="content-wrap">
            <!-- box1 -->
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
                    <el-button plain size="small" class="shaix-btn" @click="dialogFormVisible = true">高级筛选</el-button>
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
            <!-- box2 -->
            <div class="list-box bg-purple">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column type="selection" width="35">
                    </el-table-column>
                    <el-table-column
                        prop="title"
                        label="商品名称"
                        width="220"
                    >
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="price"
                        label="价格"
                        width="80"
                    >                        >
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="sales"
                        label="实际销量"
                        show-overflow-tooltip
                        width="100"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="channel"
                        label="销售渠道"
                        width="100"
                    >
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="data"
                        label="创建时间"
                        width="120"
                    >
                      <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                        prop="state"
                        label="可售状态"
                        width="100"
                    >
                      <template slot-scope="scope">
                        <el-switch
                          v-model= 'scope.row.state'
                          active-color="#13ce66"
                          inactive-color="#ff4949"
                        >
                        </el-switch> 
                      </template>
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="mid"
                        label="排序"
                        width="80"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="操作"
                    >
                      <template slot-scope="scope">
                        <div class="caoz">
                            <a href="#">分配门店</a>
                            <a href="#">推广</a>
                            <a href="#">编辑</a>
                            <a href="#">复制</a>
                        </div>
                      </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <!-- 分页 -->
        <my-page/>
    </div>
</template>

<script>
import myPage from './common/myPage';
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
          value:'',
          tableData: [
            {
              title:'KARCHER卡赫家用吸尘器 强力除螨 便携式吸尘器',
              price:'1799',
              sales:'0',
              channel:'线上+线下',
              date: '2016-05-03',
              state: false,
              mid: '0'
            }, {
              title:'KARCHER卡赫家用吸尘器 强力除螨 便携式吸尘器',
              price:'1799',
              sales:'0',
              channel:'线上+线下',
              date: '2016-05-03',
              state: true,
              mid: '0'
            }, {
              title:'KARCHER卡赫家用吸尘器 强力除螨 便携式吸尘器',
              price:'1799',
              sales:'0',
              channel:'线上+线下',
              date: '2016-05-03',
              state: false,
              mid: '0'
            }
        ],
        multipleSelection: [],
        dialogTableVisible: false,
        dialogFormVisible: true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        active:'hoverbg'
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    components:{
        myPage
    }
}
</script>

<style>
.jianju{
    margin-bottom: 10px;
}
.shangp_title{
    margin: 22px 0;
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
.list-box div{
    font-size: 12px;
    color: #444;
}
.list-box .el-table__row{
    height: 58px;
}
.list-box th,.list-box td{
    padding: 2px 0;
}
.list-box .caoz a{
    margin: 0 5px;
    color: steelblue;
}

.gropdiv{
    height: 50px;
}
.tag-title{
    color: #333;
    font-weight: 600;
    margin-right: 15px;
}
.my-tag{
    padding: 10px 15px;
    background-color: rgb(243, 243, 243);
    margin: 0 5px;
    color: #333;
    border-radius: 5px;
}
.hoverbg{
    background-color: rgb(210, 225, 252);
    color: rgb(79, 139, 252);
    
}

</style>