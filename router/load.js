const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
const fs=require("fs");
const multer=require("multer");

// 上传
let upload=multer({dest:"upload/"});
router.post("/uploadFile",upload.single("upload_file"),(req,res)=>{
    let filename=req.file.originalname;
    // 判断重复
    pool.query("SELECT upid FROM upload WHERE name=?",[filename],(err,r)=>{
        // console.log("查询重复");
        if (err) throw err;
        // 找到重复了
        if (r.length>0){
            // console.log("找到了");
            res.send("上传失败,文件名已存在");
        }else {
            // console.log("没有重复");
            let file={name:filename};
            pool.query("INSERT INTO upload SET ?",[file],(err,r)=>{
                if (err) throw err;
            });
            // console.log("可以上传了");
            let arr=__dirname.split("\\");
            arr.pop();
            let new_addr=arr.join("\\");
            fs.renameSync(req.file.path,new_addr+"/upload/"+filename);
            res.send("上传成功");
        }
    });
});
// 获取文件
router.get("/lookFile",(req,res)=>{
    pool.query("SELECT upid,name FROM upload",(err,r)=>{
        if (err) throw err;
        res.send(r);
    });
});

// 删除文件
router.get("/delFile",(req,res)=>{
    let name=req.query.name;
    // let files=fs.readdirSync("upload");
    fs.unlinkSync(`./upload/${name}`);
    pool.query("DELETE FROM upload WHERE name=?",[name],(err,r)=>{
        if (err) throw err; 
        if (r.affectedRows>0){
            res.send("1");
        }
    });
});

// 上传头像
let avatar=multer({dest:"avatar/"});
router.post("/avatars",avatar.single("avatar_img"),(req,res)=>{
    let src=req.file.originalname;
    let ft=new Date().getTime();
    let tn=Math.floor(Math.random()*9999);
    let i3=src.lastIndexOf(".");
    let suff=src.substr(i3);
    // 修改绝对路径
    let arr=__dirname.split("\\");
    arr.pop();
    let new_addr=arr.join("\\");
    let des=new_addr+"/avatar/"+ft+tn+suff;
    fs.renameSync(req.file.path,des);
    res.send({code:1,path:ft+tn+suff});
});

module.exports=router;