import notes from "@/app/models/notes";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// steps to resolve get a single notes api - GET
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;

        const note = await notes.findById(id);

        if (!note) {
            return NextResponse.json({ message: "Note not found" }, { status: 404 });
        }
        else {
            return NextResponse.json(note, { status: 200 });
        }

    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

// steps to resolve update note api - PUT
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const reqBody = await req.json();
        const { id } = await params;

        const note = await notes.findByIdAndUpdate(id,reqBody,{new : true});

        if (!note) {
            return NextResponse.json({ message: "Note not found" }, { status: 404 });
        }
        else {
            return NextResponse.json(note, { status: 200 });
        }

    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

// steps to resolve delete note api - DELETE
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB();
        const { id } = await params;

        const note = await notes.findByIdAndDelete(id);

        return NextResponse.json(note, { status: 200 });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
