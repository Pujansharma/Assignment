const mongoose=require("mongoose")

//user schema
const userSchema=mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email: {type:String,required:true,unique: true},
    password: {type:String,required:true},
},{
    versionKey:false
})

const UserModel=mongoose.model("Users",userSchema)

module.exports={
    UserModel
}