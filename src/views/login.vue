<template>
    <div class="bg">
        <img src="../../public/img/login-Logo.png" alt="" class="logo">
        <div class="login_box bg-purple">
            <div class="title">
                <span class="left">登录</span>
                <span class="right">注册<i class="el-icon-caret-right"></i></span>
            </div>
            <div class="user Text">
                <span>手机号码</span>
                <span>+86</span>
                <i class="el-icon-arrow-down icon"></i>
                <input type="text" class="ipt" placeholder="注册时填写的手机号">
            </div>
            <div class="pwd Text">
                <span>登录密码</span>
                <input type="text" class="ipt" placeholder="请输入密码">
            </div>
            <div style="margin:20px 10px">
                <a href="#" class="right">忘记密码？</a>
            </div>
            <div class="loginbtn">
                <button>登录</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg{
    width: 100%;
    height: 100%;
    background: url("../../public/img/login_bg.png")no-repeat;
    background-size: cover;
    overflow: hidden;
}
.logo{
    width: 120px;
    position: absolute;
    left: 50px;
}
.login_box{
    width: 320px;
    height: 450px;
    padding: 28px;
    margin: 35px auto;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgb(240, 240, 240);
}
.title{
    line-height: 30px;
}
.login_box .left{
    font-size: 20px;
    color: rgb(16, 156, 250);
}
.login_box .right{
    float: right;
    font-size: 14px;
    color: rgb(136, 136, 136);
}
.Text{
    margin-top: 40px;
    height: 39px;
    border-bottom: 1px solid #ddd;
    line-height: 40px;
}
.Text span{
    font-size: 14px;
}
.Text span:first-child{
    margin-right: 20px;
}
.icon{
    font-size: 12px;
    color: rgb(158, 157, 157);
    margin: 0 10px;
}
.ipt{
    font-size: 14px;
    height: 28px;
    width: 160px;
    padding: 0 10px;
    border: 0;
}
.user .ipt{
    border-left: 1px solid #ccc;
}
.ipt:focus{
	outline: medium;
}
.loginbtn{
    margin: 190px auto;
}
.loginbtn button{
    width: 100%;
    height: 50px;
    font-size:18px;
    color:white;
    background-color: rgb(16, 146, 233);
    border: 1px solid rgb(16, 146, 223);
    border-radius: 8px;
}
button:focus {
    outline: none;
}
button:hover {
    background-color: rgb(2, 94, 155);
    border: 1px solid rgb(2, 94, 155);
    cursor:pointer;
}
</style>
