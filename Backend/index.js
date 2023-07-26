const express=require("express");
const connection=require("./ConnectToDatabase/config");
const {userRouter}=require("./Routes/user")
const app=express();
const cors=require("cors");
app.use(cors());
require("dotenv").config()
app.use(express.json());
app.use("/users",userRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log({"mssg":"conneted to database"})
    } catch (error) {
        console.log({error:"something went wrong"})
    }
    console.log(`server is running on port ${process.env.port}`)
})