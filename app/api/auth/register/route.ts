import users from "@/app/models/users";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
        
    try{
        
        await connectDB();
        const {name,email,password} = await req.json();
        const existingUser = await users.findOne({email})
        if(existingUser){
            return NextResponse.json({message : "User with the email id already exists. Please Login or try to register with a different email id!"}, {status : 409})
        }
        else{
            const encryptedPassword = await bcrypt.hash(password,10)
            const newUser = await users.create({name,email,password : encryptedPassword})
            return NextResponse.json(newUser,{status : 200});
        }
    }catch(err){
        console.log(err);
        return NextResponse.json(err, {status : 500})
    }
}