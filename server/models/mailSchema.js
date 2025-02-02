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
    console.log("doc text inside", doc.text);
    const info = await transporter.sendMail({
      from: doc.from, // sender address
      to: doc.email, // list of receivers
      subject: "Anonymous Message ✔", // Subject line
      text: doc.text, // plain text body
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #007BFF; text-align: center;">📩 Anonymous Message</h2>
          <p style="font-size: 16px; line-height: 1.6; text-align: center;">
            You have received an anonymous message through <strong>aNoNy Mail</strong>.
          </p>
          <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #007BFF; margin: 20px 0; font-size: 16px;">
            <p>${doc.text}</p>
          </div>
          ${doc.imageUrl ? `<div style="text-align: center; margin-top: 20px;">
            <img src="${doc.imageUrl}" alt="Attached Media" style="max-width: 100%; height: auto; border-radius: 5px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
          </div>` : ''}
          <p style="text-align: center; font-size: 14px; color: #555; margin-top: 20px;">
            Sent via <strong>FreeEmailSender</strong> | Stay Anonymous, Stay Safe!
          </p>
        </div>
      </div>
      `,
    });
    console.log("Mail sent");
});

module.exports=mongoose.model("Mail",mailSchema)
