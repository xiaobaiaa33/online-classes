"use strict" 
let change=localStorage.getItem("change");
if (change==1){
    localStorage.removeItem("user");
    localStorage.removeItem("change");
    history.go(0);
}
// console.log();
// 获取登录界面传来的数据
let uname=document.getElementById("uname");
let hide_uname=document.getElementById("hide-uname");
if (localStorage.getItem("user") === null){
    uname.parentNode.style.display="none";
    hide_uname.parentNode.style.display="none";
}else {
    uname.parentNode.nextElementSibling.style.display="none";
    hide_uname.parentNode.nextElementSibling.style.display="none";
    let user=JSON.parse(localStorage.getItem("user"));
    uname.innerHTML=`欢迎,${user.uname}`;
    hide_uname.innerHTML=`欢迎,${user.uname}`;
    // console.log(user)
    uname.onclick=function(){
        localStorage.setItem("uname",user.uname);
        if (user.val==0){
            location="student.html";
        }else{
            location="teacher.html";
        }
    }
}
// 退出登陆
let exit=uname.nextElementSibling;
// console.log(exit);
exit.onclick=function(){
    localStorage.removeItem("user");
    history.go(0);  
}
hide_uname.nextElementSibling.onclick=exit.onclick;

// 轮播图
// 绑定图片和指示器和背景
let u=document.getElementById("u");
let index=1;
// 图片每次的left值
let arr=[0,-860,-1720,-2580,-3440,-4300,-5160];
// 背景颜色
let arr_color=["#070A33","#2C2D62","#FED9C6","#FF6039","#6546FF","#bc3640","#D7E9F3"];

function carousel(){
    // 根据index值从数组中获取当前的left
    u.style.cssText="left:"+arr[index]+"px";
    index++;
    // 判断是否到最后，如果是index归1，数组也回到第一个
    if (index > 7){
        index=1;
    }
    // console.log(index);
    get_color();
    get_bg();
}
// 定时器
let time=setInterval(carousel,5000);

// 鼠标悬停事件,停止播放
function stop_carousel(){
    clearInterval(time);
}
// 鼠标移出事件，开始定时器
function start_carousel(){
    time=setInterval(carousel,5000);
}
// 左右按钮
function arrows_left(){
    stop_carousel();
    index--;
    // console.log(index);
    if (index==0){
        index=7;
    }
    u.style.left=arr[index-1]+"px";
    get_color();
    get_bg();
    start_carousel();
}

function arrows_right(){
    stop_carousel();
    index++;
    if (index==8){
        index=1;
    }
    u.style.left=arr[index-1]+"px";
    get_color();
    get_bg();
    start_carousel();
}

// 小圆点事件，跳转到相应位置
function get_left(i){
    // 先跳转图片，再变指示器颜色
    u.style.left=arr[i-1]+"px";
    // 改变指示器颜色，根据left改变index
    index=i; 
    get_color();
    get_bg();
    // console.log(index);
}
    
// 圆点颜色
function get_color(){
    for (let i=1;i<8;i++){
        let x=document.getElementById(`li${i}`);
        x.style.background="#fff";
    }
    // console.log(index);
    let x=document.getElementById(`li${index}`);
    x.style.background="#55b929";
}

// 背景颜色
function get_bg(){
    u.parentNode.parentNode.style.backgroundColor=arr_color[index-1];
}


// 获取图片url
// 轮播图图片
function get_carousel_img(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            x=JSON.parse(x);
            let h="";
            for (let i=0;i<x.length;i++){
                h+=`
                <li>
                    <a href="${x[i].url}"></a>
                    <img src="${x[i].pic}" title="${x[i].title}"/>
                </li>`;
            }
            u.innerHTML=h;
        }
    }
    xhr.open("get","/picture/carousel-img",true);
    xhr.send();
}
// 讨论栏图片
function get_column_img(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            x=JSON.parse(x);
            let h="";
            for (let i=0;i<x.length;i++){
                h+=`
                <li>
                    <a href="javascript:;"><img src="${x[i].pic}"></a>
                </li>`;
            }
            column.innerHTML=h;
        }
    }
    xhr.open("get","/picture/column-img",true);
    xhr.send();
}
// 课程内容
function get_course_msg(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            x=JSON.parse(x);
            let h1="",h2="",h3="",h4="",h5="",h6="";
            for (let i=0;i<x.length;i++){
                if (x[i].family_id==1){
                    h1+=`
                    <li><a href="javascript:;">
                        <img src="${x[i].pic}">
                        <span class="course-title">${x[i].title}</span><br>
                        <span class="course-school">${x[i].school}</span>
                        <span class="course-read">${x[i].reding}</span>
                    </a></li>`;
                }else if (x[i].family_id==2){
                    h2+=`
                    <li><a href="javascript:;">
                        <img src="${x[i].pic}">
                        <span class="course-title">${x[i].title}</span><br>
                        <span class="course-school">${x[i].school}</span>
                        <span class="course-read">${x[i].reding}</span>
                    </a></li>`;
                }else if (x[i].family_id==3){
                    h3+=`
                    <li><a href="javascript:;">
                        <img src="${x[i].pic}">
                        <span class="course-title">${x[i].title}</span><br>
                        <span class="course-school">${x[i].school}</span>
                        <span class="course-read">${x[i].reding}</span>
                    </a></li>`;
                }else if (x[i].family_id==4){
                    h4+=`
                    <li><a href="javascript:;">
                        <img src="${x[i].pic}">
                        <span class="course-title">${x[i].title}</span><br>
                        <span class="course-school">${x[i].school}</span>
                        <span class="course-read">${x[i].reding}</span>
                    </a></li>`;
                }else if (x[i].family_id==5){
                    h5+=`
                    <li><a href="javascript:;">
                        <img src="${x[i].pic}">
                        <span class="course-title">${x[i].title}</span><br>
                        <span class="course-school">${x[i].school}</span>
                        <span class="course-read">${x[i].reding}</span>
                    </a></li>`;
                }else if (x[i].family_id==6){
                    h6+=`
                    <li><a href="javascript:;">
                        <img src="${x[i].pic}">
                        <span class="course-title">${x[i].title}</span><br>
                        <span class="course-school">${x[i].school}</span>
                        <span class="course-read">${x[i].reding}</span>
                    </a></li>`;
                }
            }
            var y=document.getElementById("course1");
            y.innerHTML=h1;
            var y=document.getElementById("course2");
            y.innerHTML=h2;
            var y=document.getElementById("course3");
            y.innerHTML=h3;
            var y=document.getElementById("course4");
            y.innerHTML=h4;
            var y=document.getElementById("course5");
            y.innerHTML=h5;
            var y=document.getElementById("course6");
            y.innerHTML=h6;
        }
    }
    xhr.open("get","/picture/course-msg",true);
    xhr.send();
}


// 滚轮事件
let scrollFunc=function (e){
    e=e || window.event;
    if (e.wheelDelta){
        let x=document.body.getElementsByClassName("index-hide-head");
        window.onscroll=function(){
            let t=this.document.documentElement.scrollTop || this.document.body.scrollTop;
            if (t>100){
                x[0].style.display="block";
            }else {
                x[0].style.display="none";
            }
        }
    }
}
if (document.addEventListener){
    document.addEventListener("DOMMouseScroll",scrollFunc,false);
    window.onmousewheel=document.onmousewheel=scrollFunc;
}

// 隐藏菜单
(function(){
    let hide_menu=document.querySelector("[data-toggle=drop-down-menu]");
    let target=hide_menu.getAttribute("data-target");
    let ul=document.querySelector(target);
    hide_menu.onmouseover=function(){
        ul.style.cssText="height:228px;opacity:1;";
    }
    hide_menu.onmouseout=function(){
        ul.style.cssText="height:0;opacity:0;";
    }
})();

// 横幅 无缝滚动
(function(){
    let box=document.getElementById("box");
    let div=box.children[0];
    let img=document.querySelectorAll(".index-banner>div img");
    // 克隆一份在最后
    div.innerHTML+=div.innerHTML;
    let speed=2;
    function move(){
        // 如果播放第一份播放结束了，马上把left复原为0，重新播放
        if (div.offsetLeft <= -div.offsetWidth/2){
            div.style.left=speed+"px";
        }
        div.style.left=div.offsetLeft-speed+"px";
        // console.log(div.offsetLeft,-div.offsetWidth/2);
    }
    let time=setInterval(move,30);
    box.onmouseover=function(){
        clearInterval(time);
    }
    box.onmouseout=function(){
        time=setInterval(move,30);
    }
})();

// 楼层滚动
(function(){
    // 获取菜单列表
    let list_arr=document.querySelector("[data-toggle=floor]").children;
    // 获取内容列表
    let con_arr=document.querySelectorAll("[data-target=floor_rolling]");
    console.log(con_arr);
    // 定时器，目标高度,下一步位置
    let time=null;
    let target=0;
    let n=0;
    // 获取滚动条滚动的距离
    let top=document.scrollTop || document.documentElement.scrollTop;

    for (let i=0;i<list_arr.length;i++){
        // 绑定对应下标
        list_arr[i].h=i;
        // 绑定每个菜单单击事件
        list_arr[i].onclick=function(){
            target=con_arr[this.h].offsetTop;
            clearInterval(time);
            time=setInterval(function(){
                // 判断方向
                let speed=(target-n)/10;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                // 下一步的位置
                n+=speed;
                // 移动
                window.scrollTo(0,n);
                if (n == target){
                    clearInterval(time);
                }
            },30);
        }
    }
})()

