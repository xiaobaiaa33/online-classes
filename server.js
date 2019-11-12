const express=require("express");
const bodyParser=require("body-parser");
const userRouter=require("./router/user.js");
const pictureRouter=require("./router/picture.js");
const subRouter=require("./router/sub.js");
const loadRouter=require("./router/load.js");
const server=express();
server.listen(8080);

server.use(bodyParser.urlencoded({
    extended:false
}));

server.use(express.static("public"));

server.use("/user",userRouter);
server.use("/picture",pictureRouter);
server.use("/sub",subRouter);
server.use("/load",loadRouter);