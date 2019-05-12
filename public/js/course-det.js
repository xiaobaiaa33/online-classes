"use strict"
// 获取主页传递的数据
let user=localStorage.getItem("user")
console.log(user);

// 列表
let h6s=document.querySelectorAll("[data-toggle=hide]");
for (let h6 of h6s){
    h6.onclick=function(){
        let div=h6.nextElementSibling;
        if (div.className=="hide"){
            div.className+=" dis";
        }else {
            div.className="hide";
        }
    }
}

// 切换
let div=document.querySelector("[data-toggle=switch]");
let ps=div.getElementsByTagName("p");
for (let p of ps){
    p.onclick=function(){
        for (let p1 of ps){
            p1.className="";
        }
    p.className="active";
    let target=p.getAttribute("data-target");
    let divs=document.querySelectorAll("#course_con>div");
        for (let d of divs){
            d.style.display="none";
        }
    document.querySelector(target).style.display="block";
    }
}

// 立即参加
let add=document.querySelector("[data-toggle=add]");
console.log(add);
add.onclick=function(){
    if (user === null){
        alert("未登录，请登陆！");
        location="login.html";
    }else {
        localStorage.setItem("pic",`images/electricity/video.jpg`);
        location="student.html";
    }
}