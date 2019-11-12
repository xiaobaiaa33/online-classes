const express=require("express");
const pool=require("../pool.js")
const router=express.Router();

// 获取题目
router.get("/test",(req,res)=>{
    pool.query("SELECT sub,A,B,C,D,ans,score FROM mooc_test",(err,r)=>{
        if (err){
            throw err;
        }
        res.send(r);
        // console.log(r);
    });
});
// 提交成绩
router.post("/score",(req,res)=>{
    let x=req.body;
    // console.log(x);
    pool.query("INSERT INTO mooc_score SET ?",[x],(err,r)=>{
        if (err){
            throw err;
        }
        // console.log(r);
    });
});

// 获取成绩
router.get("/ob-score",(req,res)=>{
    pool.query("SELECT sid,name,score,time FROM mooc_score",(err,r)=>{
        if (err){
            throw err;
        }
        // console.log(r);
        res.send(r);
    });
});
// 删除成绩
router.get("/del-score",(req,res)=>{
    let x=req.query;
    let sid=parseInt(x.sid);
    pool.query("DELETE FROM mooc_score WHERE sid=?",[sid],(err,r)=>{
        if (err){
            throw err
        }
        res.send("1");
    });
});

module.exports=router;