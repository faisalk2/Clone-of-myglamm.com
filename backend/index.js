const express=require("express");
const app=express();
app.use(express.json());
const cors=require("cors");
const conn = require("./config/db");
require("dotenv").config()
const userRoute = require("./middleware/user.Route");

const bagRoute = require("./middleware/bag.Router");
app.use(cors());

// app.get("/",(req,res)=>{
//     console.log("hello")
//     res.send("homepage");
// })


app.use("/",userRoute);
app.use("/",bagRoute)
app.listen(process.env.PORT,async ()=>{
    try{
       await conn
       console.log("connected")
    }catch{
        console.log("not connected")
    }
    console.log("port is running on 8080")
})