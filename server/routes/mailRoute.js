const express=require("express")
const router=express.Router()

const{emailSendHandler}=require("../controllers/emailSendHandler")

router.post("/emailsend",emailSendHandler)
router.get("/getalldata",getAllData)

module.exports=router