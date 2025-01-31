const express=require("express")
const app=express()
require("dotenv").config()
const mailRoute=require("./routes/mailRoute")
const {connectDb}=require("./config/connectDB")
const {connectCloudinary}=require("./config/connectCloudinary")
const fileexpress=require("express-fileupload")
const cors=require("cors")

//middleware
app.use(cors({
    origin: 'https://anon-email-sender-virid.vercel.app', // Specify the frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Enable cookies if needed
  }));
app.use(express.json())
app.use(fileexpress({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

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

