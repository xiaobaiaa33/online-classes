"use strict"
// 获取到信息，并填入
let uname=localStorage.getItem("uname");
document.querySelector("[data-target=obtain]").innerHTML=uname+"老师";

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

// 成绩管理
let get_score=function(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=()=>{
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            x=JSON.parse(x)
            let h=`
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>成绩</th>
                    <th>日期</th>
                    <th>删除</th>
                </tr>
            </thead>`;
            h+=`<tbody>`;
            for (let y of x){
                h+=`<tr>
                    <td>${y.name}</td>
                    <td>${y.score}</td>
                    <td>${y.time}</td>
                    <td><button data-toggle="del" data-target="${y.sid}" onmouseover="del()">×</button></td>
                </tr>`;
            }
            h+=`</tbody>`;
            document.getElementById("score_sheet").innerHTML=h;
        }
    }
    xhr.open("get","/sub/ob-score",true);
    xhr.send();
}


// 删除按钮
let del=function(){
    let btns=document.querySelectorAll("[data-toggle=del]");
    for (let btn of btns){
        btn.onclick=function(){
            let sid=btn.getAttribute("data-target");
            if (confirm(`确认要删除${btn.parentNode.parentNode.children[0].innerHTML}的成绩吗？`)==true){
                const xhr=new XMLHttpRequest();
                xhr.onreadystatechange=()=>{
                    if (xhr.readyState==4 && xhr.status==200){
                        if (xhr.responseText=="1"){
                            alert("删除成功");    
                            get_score();    
                        }
                    }
                }
                xhr.open("get",`/sub/del-score?sid=${sid}`,true);
                xhr.send();
            }
        }
    }
}

// 获取文件
let lookFile=function(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4 && xhr.status==200){
            let x=xhr.responseText;
            x=JSON.parse(x);
            let html="";
            for (let i of x){
                html+=`<li><a href="../upload/${i.name}" download="${i.name}">${i.name}</a></li>`;
            }
            let ul=document.getElementById("course").getElementsByTagName("ul")[0];
            ul.innerHTML=html;
        }
    }
    xhr.open("get","/load/lookFile",true);
    xhr.send();
}

// 删除文件
let delbtn=document.getElementById("course").getElementsByTagName("button")[0];
delbtn.addEventListener("click",function(){
    let name=prompt("请输入删除的文件");
    if (name != ""){
        const xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if (xhr.readyState==4 && xhr.status==200){
                if (xhr.responseText=="1"){
                    alert("删除成功");
                    history.go(0);
                }
            }
        }
        xhr.open("get",`/load/delFile?name=${name}`,true);
        xhr.send();
    }
});
