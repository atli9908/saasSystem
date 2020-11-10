<template>
    <div class="my-page">
        <div style="float:left">
            <span>已选择0条，总共{{this.total}}条，当前为第{{this.currentPage}}页</span>
        </div>
        <el-pagination
            style="float:right"
            layout="prev, pager, next, jumper"
            :page-size="20"
            :total="total"
            @current-change="pageChange">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data(){
        return {
            total:500,
            currentPage:1,
        }
    },
    methods: {
        pageChange(val){
            this.currentPage = val;
        }
    }
}
</script>

<style>
.my-page{
    background-color: rgb(255, 255, 255);
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 0 5px #ddd;
    padding: 10px;
    height: 30px;
    width: 82%;
    line-height: 30px;
    position: fixed;
    bottom: 0;
    z-index: 1000;
}

.el-pager li,
.el-pagination button,
.el-pagination__editor.el-input .el-input__inner
 {
    min-width: 25px !important;
    height: 25px;
    line-height: 25px;
    padding: 0;
    font-weight: 500;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0 3px;
    
}
.el-pagination .btn-prev .el-icon,
.el-pagination .btn-next .el-icon
{
    font-size: 8px;
}
.el-pagination__jump{
    height: 25px !important;
    line-height: 25px !important;
}
</style>