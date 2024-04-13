import Item from "@/libs/models/productModel";
import { connectApi } from "@/libs/mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await connectApi()

        const item = await Item.find()
        if(item){
            return NextResponse.json({success:true,items:item})
        }
    } catch (error) {
        console.log(error);
        
    }
}