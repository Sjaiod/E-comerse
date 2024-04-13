import User from "@/libs/models/userModel";
import { connectApi } from "@/libs/mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectApi()
        const {email, password} = await req.json()
        if(!email || !password){
            return NextResponse.json({success: false,message:"Please enter your email and password"})
        }else{
            const user = await User.findOne({email})
            if(user){
                if(user.password ===password){
                 
                return NextResponse.json({success: true,message:user})
                }else{
                    return NextResponse.json({success: false,message:"Password doesn't match"})
                }
            }else{
                return NextResponse.json({success: false,message:"User doesn't exists"})
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export async function GET(){
    try {
        await connectApi()
        const users=await User.find()
        if(users){
            return NextResponse.json({users: users,sucess:true})
        }
    } catch (error) {
        console.log(error);
    }
}