<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,body{
  height: 100%;
  padding: 0;
  margin: 0;
}
p,h3,h2,h4,h6,a{
  padding: 0;
  margin: 0;
}
h5{
  padding: 0;
  margin: 0;
  color:rgb(95, 95, 95);
}
h6{
  font-weight:500;
  font-size: 14px;
  color: #333;
}
p,a,li{
  font-size: 12px !important;
  text-decoration:none;
}
span{
  font-size: 12px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: rgb(252, 252, 252);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* input下拉框 */
.input-with-select .el-select{
    width: 100px;
    font-size: 12px;
}
/* input3合1 */
.input-with-select .el-input-group__prepend {
    background-color: #fff;
    color: #000;
}
/* input搜索按钮 */
.el-input-group__append .el-button{
    padding: 10px;
    width: 10px;
}
/* 日期选择器宽度 */
.el-date-editor{
    width: 220px !important;
}
.el-input-group__append{
    background-color: white;
}
.el-input__inner{
  font-size: 12px !important;
}
/* 对话框内容区域外边距 */
.el-dialog__body{
    padding: 10px 20px !important;
}
/* 盒子样式 */
.bg-purple{
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgb(240, 240, 240);
  margin: 2px 0px;
  padding: 10px;
}
/* 盒子外间距 */
.jianju{
    margin-bottom: 10px;
}
/* 文字超出显示省略号 */
.my-ellipsis{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 设置全局滚动条样式 */
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-thumb {
  width: 6px;
  background-color: rgba(211, 211, 211,0.2);
  border-radius: 3px;
}
/* 分割线 */
.el-divider{
    margin: 16px 0 !important;
}
/* 页面小标题 */
.view_title{
    margin: 22px 0;
}
/* 小标题下内容包裹区 */
.content-wrap{
    background-color: rgb(245, 245, 245);
    padding: 8px;
    border-radius: 5px;
}
/* 表格样式 */
.my-table th{
    color: #444;
}
.my-table input{
    font-size: 12px;
    color: #666;
    border:0;
    width:50px;
}
.my-table div{
    font-size: 12px;
}
/* 操作按钮 */
.caoz a{
    margin-right: 12px;
    color: steelblue;
}
/* select下拉框样式 */
.selects{
    width: 100px;
}
</style>
