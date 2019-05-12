const express=require("express");
const pool=require("../pool.js");
const router=express.Router();

//登录
router.post("/login",(req,res)=>{
    let x=req.body;
    // console.log(x);
    pool.query("SELECT uname,upwd,ts FROM mooc_user WHERE uname=? AND upwd=? AND ts=?",[x.uname,x.upwd,x.ts],(err,r)=>{
        if (err){
            throw err;
        }
        if (r.length>0){
            res.send("1");
        }else {
            res.send("0");
        }
    });
}); 

// 注册
router.post("/reg",(req,res)=>{
    let x=req.body;
    pool.query("INSERT INTO mooc_user SET ?",[x],(err,r)=>{
        if (err){
            throw err;
        }
        if (r.affectedRows>0){
            res.send("注册成功");
        }   
    });
});
// 注册-用户名
router.post("/reg-lose-uname",(req,res)=>{
    let x=req.body;
    pool.query("SELECT uname FROM mooc_user WHERE uname=?",[x.uname],(err,r)=>{
        if (err){
            throw err;
        }
        if (r.length>0){
            res.send("用户名已存在");
        }else{
            res.send("可以使用该用户名");
        }
    });
});

// 原密码是否正确
router.post("/change-see",(req,res)=>{
    let x=req.body;
    // console.log(x);
    pool.query("SELECT upwd FROM mooc_user WHERE uname=? AND ts=?",[x.uname,x.ts],(err,r)=>{
        if (err){
            throw err;
        }
        res.send(r);
    });
});

// 修改密码
router.post("/change-pwd",(req,res)=>{
    let x=req.body;
    pool.query("UPDATE mooc_user SET upwd=? WHERE uname=? AND ts=?",[x.upwd,x.uname,x.ts],(err,r)=>{
        if (err) throw err;
        if (r.affectedRows>0) res.send("1");
    });
});

module.exports=router;