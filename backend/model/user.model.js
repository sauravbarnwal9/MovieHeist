import mongoose from "mongoose";


const UserScheme=mongoose.Schema({
  name:{type:String,require} , 
  email:{type:String,require},
  password:{type:String,require}
})
const UserModel=mongoose.model("user",UserScheme)

module.exports={
    UserModel
}