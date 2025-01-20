const Mail=require("../models/mailSchema")
const cloudinary=require("cloudinary").v2

async function uploadToCloudinary(file,folder){
   return await cloudinary.uploader.upload(file.tempFilePath,{folder})
}

exports.emailSendHandler=async(req,res)=>{
    try {
        const {name,email,text,from}=req.body
        const imageFile=req.files.imageFile
        console.log("from req body",name,imageFile,email,text,from)
        //validation on the image
        const types=["jpg","png","jpeg"]
        const imageType=imageFile.name.split(".")[1].toLowerCase()
        if(!types.includes(imageType))
        {
            return res.status(400).json({
                success:true,
                message:"please Upload only valid image like png,jpeg,jpg"
            })
        }
            //lets upload the file to cloudinary and save it in the database
            const response=await uploadToCloudinary(imageFile,"mailApp")
            console.log("response from cloudinary",response)
            const fileInfo=await Mail.create({
                name,
                email,
                text,
                from,
                imageUrl:response.secure_url
            })
            console.log(fileInfo)
            res.status(200).json({
                success:true,
                message:"Mail sent",
                imagefile:fileInfo.imageUrl
            })
        
    } catch (error) {
        console.error("some error occured while sending the email",error)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}