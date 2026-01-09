"use client"

import { useEffect, useState } from "react";

interface Note {
  _id: string,
  title: string,
  description: string
}

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allNotes, setAllNotes] = useState<Note[]>([])

  console.log(allNotes);

  useEffect(() => {
    fetchAllNotes()
  }, [])

  const addNote = async () => {
    if (!title || !description) {
      alert("Fill all the fields");
    }
    else {
      try{

        // call add note api

      }catch (err) {
      console.log("No notes found ", err);
    }
    }
  }

  const fetchAllNotes = async () => {
    try {
      const res = await fetch('/api/notes')
      setAllNotes(await res.json())

    } catch (err) {
      console.log("No notes found ", err);
    }
  }

  return (
    <main className="min-h-screen bg-gary-100 p-10">

      <div className="max-w-xl mx-auto bg-white rounded p-6 shadow">
        <h1 className="text-2xl font-bold mb-4 text-blue-800">Notes MAnager using Next (CRUD operations)</h1>

        <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" className="border border-blue-800 p-3 w-full mb-2 rounded text-gray-700" />
        <textarea value={description} onChange={e => setDescription(e.target.value)} name="" id="" placeholder="Description" className="border border-blue-800 p-3 w-full rounded text-gray-700"></textarea>
        <button className="bg-blue-800 text-white font-medium px-4 py-2 rounded cursor-pointer transition-all duration-300 hover:bg-blue-600" onClick={addNote}>Add Note</button>


        {
          allNotes?.length > 0 ?
            allNotes?.map((note: Note) => (
              <div key={note?._id} className="space-y-4 mt-10 border border-green-600 rounded p-3">
                <h2 className="font-bold text-xl text-blue-800 mb-2">{note?.title}</h2>
                <p className="text-gray-700">{note?.description}</p>
                <div className="flex items-center gap-2">
                  <button className="cursor-pointer text-amber-500 font-medium transition-all duration-300 hover:bg-amber-100 text-sm px-4 py-2 rounded">Update</button>
                  <button className="cursor-pointer text-red-600 font-medium transition-all duration-300 hover:bg-red-100 text-sm px-4 py-2 rounded">Delete</button>
                </div>
              </div>
            ))

            :

            <div className="space-y-4 mt-10 border border-red-600 rounded p-3">
              <p className="text-gray-700 text-3xl">No Notes Found...</p>
            </div>

        }


      </div>
    </main>
  );
}
