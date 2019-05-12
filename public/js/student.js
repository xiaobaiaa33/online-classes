"use strict"
// 获取到信息，并填入
let user=localStorage.getItem("user");
user=JSON.parse(user);
document.querySelector("[data-target=obtain]").innerHTML=user.uname+"同学";

// 获取课程详情传递的数据
let pic=localStorage.getItem("pic");
// console.log(pic);
if (pic !== null){
    let join=document.querySelector("[data-target=join]");
    let h=join.innerHTML;
    h+=`<a href="javascript:;"><img src="${pic}"></a>`;
    join.innerHTML=h;
}

// 跳转页面并传送数据
localStorage.setItem("user",JSON.stringify(user));

// 切换
let as=document.querySelectorAll("[data-toggle=switch]");
for (let a of as){
    a.onclick=function(){
        for (let x of as){
            x.parentNode.className="";
        }
        let divs=document.querySelectorAll(".right>div");
        for (let div of divs){
            div.className="";
        }
        a.parentNode.className="active";
        document.querySelector(a.getAttribute("data-target")).className="dis";
    }
}

// 获取文件
window.addEventListener("load",function(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            x=JSON.parse(x);
            let html="";
            for (let i of x){
                html+=`<li><a href="../upload/${i.name}" download="${i.name}">${i.name}</a></li>`;
            }
            let ul=document.getElementById("flie").getElementsByTagName("ul")[0];
            ul.innerHTML=html;
        }
    }
    xhr.open("get","/load/lookFile",true);
    xhr.send();
})