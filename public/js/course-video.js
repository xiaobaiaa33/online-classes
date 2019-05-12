"use strict"
// 获取传输过来的uname
let uname=localStorage.getItem("uname");
localStorage.setItem("uname",uname);

// 二维数组列表
let course=[
    "第一章 函数",
    "第二章 极限与连续",
    "第三章 导数与微分",
    "第四章 微分中值定理与导数应用",
    "第五章 不定积分",
    "第六章 定积分及其应用",
];

let section=[
    ["有关函数的新知识"],
    ["数列的极限","函数的极限","无穷小量和无穷大量","极限运算法则","极限存在准则与两个重要极限","无穷小量的比较","函数的连续性与间断点","初等函数的连续性","闭区间上连续函数的性质"],
    ["导数的概念","函数的求导法则","高阶导数","隐函数及由参数方程所确定的函数的导数","函数的微分","导数在经济学中的应用"],
    ["微分中值定理","洛必达法则","函数的单调性和曲线的凹凸性","函数的极值与最值","函数图形的描绘"],
    ["不定积分的概念及性质","不定积分的第一类换元法","不定积分的第二类换元法","不定积分的分部积分法","对不定积分计算的强调"],
    ["定积分的概念","定积分的基本性质","微积分的基本公式","定积分的换元积分法和分部积分法","反常积分","定积分的应用"]
];


// 过多内容省略号
let omit=function(){
    let x=document.getElementsByTagName("option");
    for (let i=0;i<x.length-1;i++){
        let n=x[i].innerHTML;
        if (n.length>9){
            x[i].innerHTML=n.substr(0,9)+"...";
        }
    }
}
// 切换二维数组
let c=document.getElementById("s1");
c.onchange=function(){
    let s=document.getElementById("s2");
    let f=document.createDocumentFragment();
    let option=new Option("请选择小节");
    f.appendChild(option);
    // 当前选中项
    let now=c.selectedIndex;
    for (let key in section[now]){
        option=new Option(section[now][key]);
        f.appendChild(option);
    }
    s.innerHTML="";
    s.appendChild(f);
    omit();
}

// 跳转到考试，不能后退
let jump=function(){
    location.replace("test.html");
}
