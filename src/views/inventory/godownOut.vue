<template>
    <div class="bg-purple">
        <h5 class="view_title">出库单</h5>
        <div class="content-wrap">
            <div class="bg-purple box1 jianju">
                <span class="title">单据日期</span>
                <el-date-picker
                size="mini"
                v-model="dateValue"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
                </el-date-picker>
                <el-select v-model="value" placeholder="出库明细" size="mini" class="at_select">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="经办人" size="mini" class="at_select">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-input v-model="searchText" class="input-with-select" size="mini" placeholder="请输入">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="出库单号" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" style="padding:10px">搜索</el-button>
                </el-input>
                <div class="btn">
                    <el-button size="mini">新建出库</el-button>
                </div>
            </div>
            <!-- 表格数据 -->
            <div class="bg-purple my-table">
                <el-table
                :data="tableData"
                style="width: 100%"
                empty-text="暂无记录">
                    <el-table-column
                        prop="date"
                        label="入库单号"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="入库类型"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="入库时间">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="备注">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="关联业务单号">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="经办人">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="操作">
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
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        dateValue:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value:'',
        searchText:'',
        select:'1',
        tableData:[]
      }
    }
}
</script>

<style scoped>
.box1{
    padding: 20px;
}
.box1 .btn{
    margin-top: 20px;
}
.box1 .at_select{
    margin-left: 10px;
}
.box1 .title{
    margin: 4px;
}
.el-date-editor{
    width: 220px;
}
.el-select {
    width: 100px;
    font-size: 12px;
}
.input-with-select{
    float: right;
    width: 300px;
}
</style>