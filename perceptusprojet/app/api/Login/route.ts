import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../prisma/client';
import { CreateAccountSchema } from "../ValidationSchemas";
import { error } from "console";
import { fromZodError } from 'zod-validation-error';

export async function POST(request: NextRequest) {

    const body = await request.json();
    
    const validation = CreateAccountSchema.safeParse(body); 

    if(!validation.success){
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const newLogin = await prisma.tabletest.create({
        data : { Pesel: body.Pesel, Email: body.Email, name: body.Name, 
            second_name: body.Second_name, password: body.Password}
    })

    return NextResponse.json(newLogin, { status: 201 })
}