import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from '../../../prisma/client';

const CreateProductSchema = z.object({
    Name: z.string().min(1).max(100),
    price: z.number().min(1).max(100)
});

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = CreateProductSchema.safeParse(body); 

    if(!validation.success)
        return NextResponse.json({ status: 400});
        
    const newProduct = prisma.product.create({

    })

}