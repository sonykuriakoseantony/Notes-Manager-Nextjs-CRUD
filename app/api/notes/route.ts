import notes from "@/app/models/notes";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

// steps to resolve add note api - POST
export async function POST(req: Request) {
    try {
        await connectDB();
        const reqBody = await req.json();
        const newNote = await notes.create(reqBody);

        console.log(newNote);

        return NextResponse.json(newNote, { status: 201 })
    } catch (err) {
        console.log(err);
        return NextResponse.json(err, { status: 500 })
    }
}

export async function GET() {
    try{

        const allNotes = await notes.find();
        console.log(allNotes);

        return NextResponse.json(allNotes, { status: 200 })

    }catch (err) {
        console.log(err);
        return NextResponse.json(err, { status: 500 })
    }
}  


