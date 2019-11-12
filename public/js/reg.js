"use strict"
// 获取焦点
document.getElementById("uname").focus();

var a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;
// 注册按钮
function regg(){
    // 把所有验证触发一下
    // console.log(a1,a2,a3,a4,a5,a6);
    if (a1==true && a2==true && a3==true && a4==true && a5==true && a6==true){
        const xhr=new XMLHttpRequest();
        let r=document.getElementsByName("gender");
        let sex=null;
        for (let key in r){
            if (r[key].checked==true){
                sex=r[key].value;
            }
        }
        let t=document.getElementsByName("ts");
        let ts=null;
        for (let key in t){
            if (t[key].checked==true){
                ts=t[key].value;
            }
        }
        xhr.onreadystatechange=function(){
            if (xhr.readyState==4 && xhr.status==200){
                // console.log(1);
                alert(xhr.responseText);
                let user={uname:uname.value,upwd:upwd.value};
                localStorage.setItem("user",JSON.stringify(user));
                location="login.html";
            }
        }
        xhr.open("post","/user/reg",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(`uname=${uname.value}&upwd=${upwd.value}&email=${email.value}&phone=${phone.value}&user_name=${user_name.value}&gender=${sex}&ts=${ts}`);
    }else {
        alert("信息不完整或错误");
    }
}
// 用户名
function reg_uname (){
    uname_msg.innerHTML="用户名长度在4到12位之间";
    uname_msg.style.color="#fff";
}
function reg_lose_uname (){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function (){
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            let n=uname.value;
            let z=/^.{4}(.{0,8})?$/;
            if (n==""){
                uname_msg.innerHTML="用户名不能为空";
                uname_msg.style.color="#f00";
                a1=0;
            }else if (z.test(n)==false){
                uname_msg.innerHTML="用户名长度不正确";
                uname_msg.style.color="#f00";
                a1=0;
            }else{
                uname_msg.innerHTML=x;
                if (x=="用户名已存在"){
                    uname_msg.style.color="#f00";
                    a1=0;
                }else {
                    uname_msg.style.color="#0f0";
                    a1=true;
                }
            }
        }
    }
    xhr.open("post","/user/reg-lose-uname",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(`uname=${uname.value}`);
}
// 密码
function reg_upwd (){
    upwd_msg.innerHTML="密码长度在6到12位之间";
    upwd_msg.style.color="#fff";
}
function reg_lose_upwd (){
    let n=upwd.value;
    let z=/^.{6}(.{0,6})?$/;
    if (n==""){
        upwd_msg.innerHTML="密码不能为空";
        upwd_msg.style.color="#f00";
        a2=0;
    }else if (z.test(n)==true){
        upwd_msg.innerHTML="密码可以使用";
        upwd_msg.style.color="#0f0";
        a2=true;
    }else {
        upwd_msg.innerHTML="密码长度不正确";
        upwd_msg.style.color="#f00";
        a2=0;
    }
}
function reg_lose_upwd2 (){
    let n=upwd.value;
    let n2=upwd2.value;
    if (n2==""){
        upwd2_msg.innerHTML="确认密码不能为空";
        upwd2_msg.style.color="#f00";
        a3=0;
    }else if (n != n2){
        upwd2_msg.innerHTML="两次密码不一样";
        upwd2_msg.style.color="#f00";
        a3=0;
    }else {
        upwd2_msg.innerHTML="";
        a3=true;
    }
}
// 邮箱
function reg_email (){
    email_msg.innerHTML="请输入合法的邮箱地址";
    email_msg.style.color="#fff";
}
function reg_lose_email (){
    let n=email.value;
    let z=/^[0-9a-zA-Z]+@[0-9a-z]+.com$/;
    if (z.test(n)==true){
        email_msg.innerHTML="邮箱可以使用";
        email_msg.style.color="#0f0";
        a4=true;
    }else {
        email_msg.innerHTML="邮箱地址不合法";
        email_msg.style.color="#f00";
        a4=0;
    }
}
// 手机
function reg_phone (){
   phone_msg.innerHTML="请输入合法的手机号码";
   phone_msg.style.color="#fff";
}
function reg_lose_phone (){
    let n=phone.value;
    let z=/1[3-9]\d{9}/;
    if (z.test(n)==true){
        phone_msg.innerHTML="";
        a5=true;
    }else{
        phone_msg.innerHTML="手机号不正确";
        phone_msg.style.color="#f00";
        a5=0;
    }
}
//真实姓名
function reg_user_name (){
    user_name_msg.innerHTML="请输入您的真实姓名";
    user_name_msg.style.color="#fff";
}
function reg_lose_user_name (){
    let n=user_name.value;
    let z=/[\u4e00-\u9fa5]{2,5}/;
    if (n==""){
        user_name_msg.innerHTML="真实姓名不能为空";
        user_name_msg.style.color="#f00";
        a6=0;
    }else if (z.test(n)==true){
        user_name_msg.innerHTML="";
        a6=true;
    }else{
        user_name_msg.innerHTML="这不是合法的姓名";
        user_name_msg.style.color="#f00";
        a6=true;
    }
}