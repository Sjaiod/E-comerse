import Item from "@/libs/models/productModel";
import User from "@/libs/models/userModel";
import { connectApi } from "@/libs/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const userId=req.nextUrl.searchParams.get('user') as string;
    const itemId=req.nextUrl.searchParams.get('item') as string;
    try {
        await connectApi()
        
        const user=await User.findById(userId);
        const item=await Item.findById(itemId);
        if(!user||!item){
            return NextResponse.json({success: false, message:"User or Item not found"})
        }else{
            await user.cart.pull(item)
            await user.save()
            return NextResponse.json({success: true, message:user})
        }

        
    } catch (error) {
        console.log(error);
        
    }
}