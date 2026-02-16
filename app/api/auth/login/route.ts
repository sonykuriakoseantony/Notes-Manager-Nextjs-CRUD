import users from "@/app/models/users";
import { connectDB } from "@/lib/mongodb";
import { NextRequest } from "next/server";


export async function POST(req : NextRequest) {
    try{
        await connectDB();

        const { email, password } = await req.json();

        const userDeatils = await users.findOne({email});
    }catch(err){
        console.log(err);
        
    }
}