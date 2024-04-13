import User from "@/libs/models/userModel";
import { connectApi } from "@/libs/mongoose";
import { NextResponse } from "next/server";

export async function  POST(request){
    const {name,email,password} =await  request.json()
  try {
    await connectApi()
        if(!name||!email||!password){
            return NextResponse.json({success: false, message:"Please enter all required fields"})
        }else{
            const existUser= await User.findOne({email:email})
            if(existUser){
                return NextResponse.json({success: false, message:"User exists"})
            }else{
                const user =new User({
                    name:name,
                    email:email,
                    password:password
                })
                await user.save()
                if(user){
                    return NextResponse.json({success: true, message:user})
                }
            }
        }
    
    
  } catch (error) {
    console.log(error);
  }
}