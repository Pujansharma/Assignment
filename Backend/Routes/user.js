const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../userModel/user.model")
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
require("dotenv").config()
//registration
userRouter.post("/register",async(req,res)=>{
    const {firstname,lastname,email,password}=req.body
    try{
        const user=await UserModel.find({email})
        if(user.length>=1){
            // alert("user is allready register please log in!")
            res.status(200).send({"msg":"user is allready register please log in!"})
        }else{
            bcrypt.hash(password, 5, async (err, hash) => {
                if(!err){
                    const user=new UserModel({firstname,lastname,email,password:hash})
                await user.save()
                res.status(200).send({"msg":"Registration has been done!"})
                }else{
                    res.status(400).send({"msg":err.message})
                }
            });
        }   
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

//login(authentication)
userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password, (err, result) => {
                if(result){
                    res.status(200).send({"msg":"Login successfull!","token":jwt.sign({"userID":user._id},process.env.jwt_token)})
                } else {
                    res.status(400).send({"msg":"Wrong Credentials"})
                }
            });
        }
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})


userRouter.get("/alluser", async(req,res)=>{
    let query=req.query;
    try {
        const data= await UserModel.find(query)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
});

userRouter.patch("/update/:id", async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try {
        await UserModel.findByIdAndUpdate({_id:ID},payload);
        res.send({"mssg":"data has been updated in data base at" + new Date()})
    } catch (error) {
        res.send({"mssg":"data has not updated in data base"})
    }
})


userRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
    try {
        await UserModel.findByIdAndDelete({_id:ID})
        res.send(ID + "has Deleted from Database at"  + new Date());
    } catch (error) {
        res.send(error.message);
    }
})



module.exports={
    userRouter
}