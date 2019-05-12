"use strict"
// 获取焦点
document.getElementById("upwd").focus();

// 获取传递的用户数据
let user=localStorage.getItem("user");
user=JSON.parse(user);

// 原密码是否正确
let c=0;
let upwd=document.getElementById("upwd");
upwd.onblur=function(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            x=JSON.parse(x);
            // console.log(x[0]);
            let msg=document.getElementById("upwd_msg");
            if (x[0].upwd!=upwd.value){
                msg.innerHTML="原密码不正确";
                msg.style.color="#f00";
                c=0;
            }else {
                msg.innerHTML="";
                c=1;
            }
        }
    }
    xhr.open("post","/user/change-see",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(`uname=${user.uname}&ts=${user.val}`);
}
// 新密码
let new_upwd=document.getElementById("new_upwd");
let new_upwd_msg=document.getElementById("new_upwd_msg");
let z=/^.{6}(.{0,6})?$/;
new_upwd.onblur=function(){
    if (new_upwd.value==""){
        new_upwd_msg.innerHTML="新密码不能为空";
        new_upwd_msg.style.color="#f00";
        c=0;
    }else if (z.test(new_upwd.value)==false){
        new_upwd_msg.innerHTML="新密码格式不正确";
        new_upwd_msg.style.color="#f00";
        c=0;
    }else if (new_upwd.value == upwd.value){
        new_upwd_msg.innerHTML="不能和原密码相同";
        new_upwd_msg.style.color="#f00";
        c=0;
    }else {
        new_upwd_msg.innerHTML="可以使用";
        new_upwd_msg.style.color="#0f0";
        c=1;
    }
}

let new_upwd2=document.getElementById("new_upwd2");
let new_upwd_msg2=document.getElementById("new_upwd_msg2");
new_upwd2.onblur=function(){
    if (new_upwd2.value==""){
        new_upwd_msg2.innerHTML="密码不能为空";
        new_upwd_msg2.style.color="#f00";
        c=0;
    }else if (new_upwd2.value != new_upwd.value){
        new_upwd_msg2.innerHTML="两次密码不一样";
        new_upwd_msg2.style.color="#f00";
        c=0;
    }else {
        new_upwd_msg2.innerHTML="两次密码一样";
        new_upwd_msg2.style.color="#0f0";
        c=1;
    }
}

// 提交修改
let btn=document.querySelector("[data-toggle=submit]");
btn.onclick=function(){
    if (c==1){
        const xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if (xhr.readyState==4 && xhr.status==200){
                let x=this.responseText;
                if (x=="1"){
                    alert("修改成功，请返回首页重新登录");
                    localStorage.setItem("change",1);
                    location="index.html";
                }
            }
        }
        xhr.open("post","/user/change-pwd",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(`upwd=${new_upwd.value}&uname=${user.uname}&ts=${user.val}`);
    }else {
        alert("输入密码有误");
    }
}

// 上传头像
let avatar_btn=document.querySelector("[type=submit]");
// console.log(avatar_btn);
avatar_btn.addEventListener("click",function(){
    // let avatar=document.querySelector("table tr td img");
    // console.log(avatar);
    // avatar.src="";
    let fd=new FormData();
    let xhr=new XMLHttpRequest();
    fd.append("avatar",1);
    fd.append("upavat",document.querySelector("[name=avatar_img]"));
});