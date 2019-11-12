"use strict"
// 获取传输过来的uname
let uname=localStorage.getItem("uname");
let title=document.querySelector("[data-target=obtain]");
title.innerHTML=`${uname}的测试`

// 获取题目打印在页面
let arr=[];
let load=function(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            x=JSON.parse(x);
            let html="";
            for (let i=0;i<x.length;i++){
                let t=`t${i}`
                html+=`
                <h4>${i+1}.${x[i].sub}</h4>
                <input type="radio" name=${t}><label>A.${x[i].A}</label>
                <input type="radio" name=${t}><label>B.${x[i].B}</label>
                <input type="radio" name=${t}><label>C.${x[i].C}</label>
                <input type="radio" name=${t}><label>D.${x[i].D}</label>
                `;
                arr.push(x[i].ans);
            }
            test.innerHTML=html;
        }
    }
    xhr.open("get","/sub/test",true);
    xhr.send();
}

// 倒计时
alert("开始测试，时间10分钟!");
let time=function(){
    let t=document.getElementById("time");
    let t_arr=t.innerHTML.split(":");
    let min=parseInt(t_arr[0]);
    let second=parseInt(t_arr[1]);
    second--;
    if (second<0){
        second=59;
        min--;
    }
    if (second<10){
        second="0"+second;
    }
    let ts=min+":"+second;
    t.innerHTML=ts;
    if (min==0 && second==0){
        alert("时间到");
        sub.onclick();
        location.replace("student.html");
    }
}
let count_down=setInterval(time,1000);


// 提交
let sub=document.querySelector("[data-toggle=sub]");
sub.onclick=function(){
    let options=document.querySelectorAll("input:checked");
    let s=0;
    if (options.length<10){
        alert("还有题目没有完成");
    }else {
        let oarr=[];
        for (let option of options){
            let lable=option.nextElementSibling;
            let x=lable.innerHTML.substr(0,1);
            oarr.push(x);
        }
        for (let i=0;i<options.length;i++){
            if (arr[i]==oarr[i]){
                s+=10;
            }
        }
        alert("得分为"+s+"分");
        let now_time=new Date();
        let time=now_time.toLocaleString("chinese",{hour12:false});
        const xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if (xhr.readyState==4 && xhr.status==200){
                let x=xhr.responseText;

            }
        }
        xhr.open("post","/sub/score",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(`name=${uname}&score=${s}&time=${time}`);
        // console.log(uname,s,time);
        location.replace("student.html");
    }
}
    

