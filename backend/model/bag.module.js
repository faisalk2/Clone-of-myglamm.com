const mongoose=require("mongoose");
let userSchema=mongoose.Schema({
    img:{type:String},
    name:{type:String} ,
    total:{type:Number},
    description: {type:String},
    offerPrice:  {type:Number},
    count: {type:String},
    actualPrice: {type:Number},

})


let bagModel=mongoose.model("bag",userSchema)

module.exports=bagModel;