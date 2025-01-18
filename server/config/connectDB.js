const mongoose=require("mongoose")
require("dotenv").config()
 
exports.connectDb=()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{console.log("database is connected")})   
    .catch((e)=>{console.error("some error occured while connecting DB",e)
        process.exit(1)
    })
}