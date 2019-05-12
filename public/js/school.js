window.addEventListener("load",function(){
    // 不够要加载的数据
    let x={
        data:[
            {src:"images/school/1.jpg"},
            {src:"images/school/2.jpg"},
            {src:"images/school/3.jpg"},
            {src:"images/school/4.jpg"},
            {src:"images/school/5.jpg"},
            {src:"images/school/6.jpg"}
        ]
    }
    waterfall();
    window.onscroll=function(){
        if (load()){
            // 将box添加到当前页面
            for (let i=0;i<x.data.length;i++){
                let new_box=document.createElement("div");
                new_box.className="box";
                let new_img=document.createElement("div");
                new_img.className="img";
                new_box.appendChild(new_img);
                let img=new Image();
                img.src=x.data[i].src;
                new_img.appendChild(img);
                content.appendChild(new_box); 
            }
            waterfall();
        }
    }

    // 瀑布流布局
    function waterfall(){
        let boxs=getbox("content","box");
        console.log(boxs);
        // 计算一行的列数
        let boxw=boxs[0].offsetWidth;
        let col=parseInt(document.documentElement.clientWidth/boxw);
        // content宽度固定
        content.style.width=col*boxw+"px";
        // 获取所有box的高度
        let box_h=[];
        for (let i=0;i<boxs.length;i++){
            if (i<col){
                box_h.push(boxs[i].offsetHeight);
            }else {
                let min_h=Math.min.apply(null,box_h);
                let index=getindex(box_h,min_h);
                boxs[i].style.cssText=`position:absolute;top:${min_h}px;left:${boxw*index}px`;
                box_h[index]+=boxs[i].offsetHeight;
            }
        }
    }

    // 获取box的元素
    function getbox(parent,box){
        let boxs=[];
        boxs=document.querySelectorAll(`#${parent}>.${box}`);
        return boxs;
    }

    // 获取最小值的下标
    function getindex(arr,val){
        for (let i in arr){
            if (arr[i]==val){
                return i;
            }
        }
    }

    // 判断是否具备加载数据的条件
    function load(){
        let boxs=getbox("content","box");
        // 最后一个图片的高度
        let lastbox=boxs[boxs.length-1].offsetTop+parseInt(boxs[boxs.length-1].offsetHeight/2);
        // console.log(lastbox);
        // 滚动条滚动距离
        let screenTop=document.body.scrollTop || document.documentElement.scrollTop;
        let height=document.body.clientHeight || document.documentElement.clientHeight;
        console.log(lastbox,screenTop,height);
        if (lastbox<screenTop+height){
            return true;
        }else {
            return false;
        }
    }
}) 
