import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../prisma/client';
import { CreateProductSchema } from "./CreateProductSchema";

export async function POST(request: NextRequest) {

    console.log("Post request send");

    const body = await request.json();

    const validation = CreateProductSchema.safeParse(body); 

    if(!validation.success)
        return NextResponse.json({ status: 400});
        
    const newProduct = await prisma.product.create({
        data : { Name: body.Name, price: body.price}
    })

    return NextResponse.json(newProduct, { status: 201 })
}