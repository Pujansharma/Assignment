const mongoose=require("mongoose")
require("dotenv").config()
const connection=mongoose.connect(process.env.mongodb_url)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err.message));

module.exports={
    connection
}