import mongoose from "mongoose"; 

const userModel=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true, min:8 },
    cart:[{type: mongoose.Types.ObjectId,ref:"Item"}]

})

const User = mongoose.models.User||mongoose.model("User",userModel)

export default User;
