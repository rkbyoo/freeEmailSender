const mongoose=require("mongoose")
const mailSchema=new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:false
    },
    text:{
        type:String,
        required:false
    }  ,
    from:{
        type:String
    }
})

module.exports=mongoose.model("Mail",mailSchema)
