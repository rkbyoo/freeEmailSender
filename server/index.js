const express=require("express")
const app=express()
require("dotenv").config()
const {mailRoute}=require("./routes/mailRoute")
const {connectDb}=require("./config/connectDB")
const {connectCloudinary}=require("./config/connectCloudinary")
const fileexpress=require("express-fileupload")

app.use(express.json())
app.use(fileexpress())

const PORT=process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`The server is running on port:${PORT}`)
})
app.get("/",(req,res)=>{
res.send("This is homepage")
})

app.use("/api/v1",mailRoute) //mounting the routes 
connectDb()
connectCloudinary()

