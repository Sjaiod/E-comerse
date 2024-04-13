import Item from "@/libs/models/productModel";
import { connectApi } from "@/libs/mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectApi()
        const {title, price,description,image,category} = await req.json()
        if(!title || !price || !description || !image, !category){
            return NextResponse.json({success: false, message:"Please enter all filds"})
        }else{
            const product=new Item({title, price, description, image, category})
            await product.save()
            if(product){
                return NextResponse.json({success: true, message:product})
            }
        }
    } catch (error) {
        console.log(error);
    }
}