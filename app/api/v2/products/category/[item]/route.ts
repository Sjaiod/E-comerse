import { NextResponse } from 'next/server';
import Item from '@/libs/models/productModel';
import { connectApi } from '@/libs/mongoose';

export async function GET(req, context) {
    const { params } = context;
    const param=params.item
    try {
        await connectApi()
       
        const items = await Item.find({category: param }).sort({createdAt:-1}).limit(10);
        if (items) {
           return NextResponse.json({ items: items, success: true });
        }
    } catch (error) {
        console.log(error);
    }
}
