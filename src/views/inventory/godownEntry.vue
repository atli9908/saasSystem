<template>
    <div class="bg-purple">
        <h5 class="view_title">入库单</h5>
        <div class="content-wrap">
            <div class="bg-purple jianju box1">
                <span>入库时间</span>
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

                <el-select v-model="value" placeholder="供应商名称" size="mini" class="at_select">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="入库类型" size="mini" class="at_select">
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
                <el-select v-model="value" placeholder="入库单号" size="mini" class="at_select">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>

                <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" size="mini">
                    <el-button slot="append" style="padding:10px">搜索</el-button>
                </el-input>

                <div class="btns">
                    <el-button size="mini">调拨入库</el-button>
                    <el-button size="mini">采购入库</el-button>
                    <el-button size="mini">退货入库</el-button>
                    <el-button size="mini">其它入库</el-button>
                </div>
            </div>
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
        dateValue: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value:'',
        searchText:'',
        tableData: []
      };
    }
}
</script>

<style scoped>
.box1{
    padding: 20px;
}
.box1 div{
    margin:0 4px
}
.box1 .btns{
    margin-top:20px;
}
.el-date-editor{
    width: 220px;
}
.at_select{
    width: 120px;
}
.input-with-select{
    width: 200px;
}
</style>