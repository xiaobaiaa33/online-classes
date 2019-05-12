"use strict"
// 绑定图片和指示器和背景
var index=1;
// 图片每次的left值
var arr=[0,-860,-1720,-2580,-3440,-4300,-5160];
// 背景颜色
var arr_color=["#070A33","#2C2D62","#FED9C6","#FF6039","#6546FF","#bc3640","#D7E9F3"];

function carousel(){
    //获取元素
    var x=document.querySelector("#u");
    
    // 判断是否到最后，如果是回到初始的left
    if (index > 6){
        index=1;
    }
    // console.log(index);
    get_color();
    get_bg();
    index++;

    //把新的left添加回去
    x.style.cssText="left:"+arr[index]+"px";
    
}
// 定时器
var time=setInterval(carousel,5000);

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
    var x=document.querySelector("#u");
    // console.log(index);
    if (index==0){
        index=7;
    }
    x.style.cssText="left:"+arr[index-1]+"px";
    get_color();
    get_bg();
    start_carousel();
}

function arrows_right(){
    stop_carousel();
    index++;
    var x=document.querySelector("#u");
    if (index==8){
        index=1;
    }
    x.style.cssText="left:"+arr[index-1]+"px";
    get_color();
    get_bg();
    start_carousel();
}

// 小圆点事件，跳转到相应位置
function get_left(i){
    stop_carousel();
    var x=document.querySelector("#u");
    // 先跳转图片，再变指示器颜色
    x.style.cssText="left:"+arr[i-1]+"px";
    // 改变指示器颜色，根据left改变index
    index=i; 
    get_color();
    get_bg();
    // console.log(index);
}
    
// }
// 圆点颜色
function get_color(){
    for (var i=1;i<8;i++){
        var x=document.querySelector(`#li${i}`);
        x.style.cssText="background:#fff";
    }
    // console.log(index);
    var x=document.querySelector(`#li${index}`);
    x.style.cssText="background:#55b929";
}

// 背景颜色
function get_bg(){
    var x=document.querySelector("#carousel");
    x.style.cssText="background:"+arr_color[index-1];
}

