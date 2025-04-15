import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    UserName:{type:String,required:[true,"name is required"],unique:true},
    Password:{type:String ,required:[true,"password is required"]},
    Email:{type:String ,required:[true,"name is required"],unique:true},
    Isvarified:{type:Boolean,default:false},
    IsAdmin:{type:Boolean,default:false},
    ForgotPassToken:{type:String},
    ForgotPassTokenExp:{type:Date},
    VarifyToken:{type:String},
    VarifyTokenExp:{type:Date}
})
const User=mongoose.models.user || mongoose.model("user",UserSchema,"users");

export default User;