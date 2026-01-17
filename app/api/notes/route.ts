import notes from "@/app/models/notes";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// steps to resolve add note api - POST
export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const reqBody = await req.json();
        const newNote = await notes.create(reqBody);

        //send response to client
        return NextResponse.json(newNote, { status: 201 })
        
    } catch (err) {
        console.log(err);
        return NextResponse.json(err, { status: 500 })
    }
}

// steps to resolve get all notes api - GET
export async function GET() {
    try{

        await connectDB();
        const allNotes = await notes.find();
        console.log(allNotes);

        return NextResponse.json(allNotes, { status: 200 })

    }catch (err) {
        console.log(err);
        return NextResponse.json(err, { status: 500 })
    }
}  


