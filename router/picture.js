const express=require("express");
const pool=require("../pool.js");
const router=express.Router();

// 轮播图图片
router.get("/carousel-img",(req,res)=>{
    pool.query("SELECT pic,url,title FROM mooc_carousel",(err,r)=>{
        if (err){
            throw err;
        }
        res.send(r);
    });
});

// 讨论栏图片
router.get("/column-img",(req,res)=>{
    pool.query("SELECT pic FROM mooc_column",(err,r)=>{
        if (err){
            throw err;
        }
        res.send(r);
    });
});
// 课程信息
router.get("/course-msg",(req,res)=>{
    pool.query("SELECT family_id,title,school,reding,intro,pic FROM mooc_course",(err,r)=>{
        if (err){
            throw err;
        }
        res.send(r);
    });
});
module.exports=router;