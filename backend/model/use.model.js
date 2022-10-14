const mongoose=require("mongoose");
let userSchema=mongoose.Schema({
    img:{type:String},
    name:{type:String} ,
    plus:{type:String},
    description: {type:String},
    offerPrice:  {type:Number},
    plus_icon_src:{type:String},
    count: {type:String},
    actualPrice: {type:Number},
    cetegory:{type:String}
})


let userModel=mongoose.model("user",userSchema)

module.exports=userModel;