import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Notes from "../notes/page";
import { authOptions } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    
    <div className="mb-6">
        {
          session && (
            <Notes loginSession={session} />
          )
        }
      </div>
  );
}
