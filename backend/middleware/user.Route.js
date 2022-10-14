const express=require("express");
const userModel = require("../model/use.model");
const userRoute=express.Router();



userRoute.post("/post",async(req,res)=>{

    try{
        let data=await userModel.insertMany([]);
    res.send("data added")
    }catch(err){
        console.log("err")
    }
})

userRoute.get("/",async(req,res)=>{
    
let {cetegory,limit,_id}=req.query

    try{
        if(_id)
        {
            let data=await userModel.findOne({cetegory:cetegory,_id:_id});
         res.send(data)
        }else{
            let data=await userModel.find({cetegory:cetegory}).limit(limit)
            res.send(data)
        }
    }catch(err){
        console.log("err")
    }
})

module.exports=userRoute;