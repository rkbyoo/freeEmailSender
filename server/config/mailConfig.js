const nodemailer=require("nodemailer")
require("dotenv").config()
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAIL_NAME,
      pass: process.env.PASS,
    },
  });

  module.exports=transporter