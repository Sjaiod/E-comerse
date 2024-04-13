import User from "@/libs/models/userModel";
import { connectApi } from "@/libs/mongoose";
import { NextResponse } from "next/server";

export async function GET(req,context){
    const { params } = context;
    const param=params.user
    
    try {
        await connectApi()
        const user=await User.findById(param).populate('cart')
        if(user){
            return NextResponse.json({success:true,user:user})
        }
    } catch (error) {
        console.log(error);
        
    }
}