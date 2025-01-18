const cloudinary=require("cloudinary").v2
require("dotenv").config()
exports.connectCloudinary=()=>{
    
    try {
        cloudinary.config({ 
            cloud_name:process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret: process.env.API_SECRET,
          })
            console.log("connected with cloudinary")
        
    } catch (error) {
        console.error("some error while connecting with cloudinary",error)
    }
   
}