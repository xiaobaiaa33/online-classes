"use strict"
// 获取注册传来的信息
// 如果有数据，直接把注册好的添加进去
if (localStorage.getItem("user") != null){
    let user=JSON.parse(localStorage.getItem("user"));
    document.getElementById("uname").value=user.uname;
    document.getElementById("upwd").value=user.upwd;
}

// 获取焦点
document.getElementById("uname").focus();

function login(){
    const xhr=new XMLHttpRequest();
    // console.log(xhr);
    let r=document.getElementsByName("ts");
    let val=null;
    for (let key in r){
        if (r[key].checked==true){
            val=r[key].value;
        }
    }
    // console.log(val);
    xhr.onreadystatechange=()=>{
        // console.log(xhr.readyState);
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText
            // console.log(x,val);
            let user={uname:uname.value,val:val};
            // 判断是否登录，成功的话是老师还是学生
            if (x=="1"){
                localStorage.setItem("user",JSON.stringify(user));
                // console.log(user);
                location="index.html";
            }else {
                alert("用户不存在");
            }
        }
    }
    xhr.open("post","/user/login",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(`uname=${uname.value}&upwd=${upwd.value}&ts=${val}`);
}
function login_lose_uname(){
    let n=uname.value;
    let z=/^.{4}(.{0,8})?$/;
    if (n==""){
        uname_msg.innerHTML="用户名不能位为空！"
        uname_msg.style.color="#f00";
    }else if(z.test(n)==true){
        uname_msg.innerHTML="用户名可以使用！"
        uname_msg.style.color="#0f0";
    }else{
        uname_msg.innerHTML="用户名不正确";
        uname_msg.style.color="#f00";
    }
}
function login_lose_upwd(){
    let n=upwd.value;
    let z=/^.{6}(.{0,6})?$/;
    if (n==""){
        upwd_msg.innerHTML="密码不能为空！";
        upwd_msg.style.color="#f00";
    }else if (z.test(n)==true){
        upwd_msg.innerHTML="";
    }else{
        upwd_msg.innerHTML="密码长度不正确";
        upwd_msg.style.color="#f00";
    }
}