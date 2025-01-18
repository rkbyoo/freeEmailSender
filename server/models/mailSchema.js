const mongoose=require("mongoose")
const transporter=require("../config/mailConfig")
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

//lets send the mail just before saving it 
mailSchema.post("save", async (doc) => {
    console.log("doc text inside",doc.text)
    const info = await transporter.sendMail({
      from: doc.from, // sender address
      to: doc.email, // list of receivers
      subject: "Anonymous message✔", // Subject line
      text: doc.text, // plain text body
      html: `<h1>Hello,
You have received an anonymous message through FreeEmailSender.
Please find the message and any attached media below</h1>
            <p>${doc.text}</p>
             <img src="${doc.imageUrl}" alt="Attached Media" style="max-width:80%; height:auto;">`, 
    });
    console.log("mail sent")
  });
  


module.exports=mongoose.model("Mail",mailSchema)
