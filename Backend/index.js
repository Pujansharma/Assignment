const express=require("express");
const connection=require("./ConnectToDatabase/config");
const bodyParser = require('body-parser');
const {userRouter}=require("./Routes/user")
const app=express();
const cors=require("cors");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config()
app.use(express.json());
app.use("/",userRouter)
app.listen(process.env.port,()=>{
         connection
    console.log(`server is running on port ${process.env.port}`)
})