const mongoose=require("mongoose");
require("dotenv").config()
const conn=mongoose.connect(process.env.PORT_URL);


module.exports=conn