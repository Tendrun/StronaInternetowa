import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../prisma/client';
import { CreateAccountSchema } from "../ValidationSchemas";
import { error } from "console";
import { fromZodError } from 'zod-validation-error';

export async function POST(request: NextRequest) {

    console.log("Post request send");

    const body = await request.json();
    
    const validation = CreateAccountSchema.safeParse(body); 
    

    console.log("baza 1");

    if(!validation.success){
        
        //console.log("Poczatek bledu");
        //console.log(validation.error);
        return NextResponse.json({ status: 400});
    }
        
        
    console.log("baza 2");

    const newLogin = await prisma.tabletest.create({
        data : { Pesel: body.Pesel, Email: body.Email, name: body.Name, 
            second_name: body.Second_name, password: body.Password}
    })

    return NextResponse.json(newLogin, { status: 201 })
}