import { NextRequest, NextResponse } from "next/server";
import { connectApi } from "@/libs/mongoose";
import Item from "@/libs/models/productModel"
export async function GET(req:NextRequest,){
    const query=req.nextUrl.searchParams.get("search") as string
    try {
        await connectApi()
        const item=await Item.find({ title: { $regex: new RegExp(query, 'i') } })

        if(item){
            return NextResponse.json(item)
        }
        


    } catch (error) {
        console.log(error);
        
    }
}