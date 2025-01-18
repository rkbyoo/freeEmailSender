const express=require("express")
const router=express.Router()

const{emailSendHandler}=require("../controllers/emailSendHandler")
// const{getAllData}=require("../controllers/getAllData")

router.post("/emailsend",emailSendHandler)
// router.get("/getalldata",getAllData)

module.exports=router