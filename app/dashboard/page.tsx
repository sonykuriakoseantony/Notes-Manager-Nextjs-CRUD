import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Notes from "../notes/page";
import { signOut } from "next-auth/react";

export default async function Dashboard() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  // const handleLogout = async () => {
  //   await signOut({ callbackUrl: "/" });
  // };

  return (
    <main className="p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-blue-900">Welcome User</h1>
        <button
          className="bg-amber-500 text-white rounded shadow-lg px-4 py-2 cursor-pointer hover:bg-amber-500/70 transition-all duration-300"
        >
          Logout
        </button>
      </div>
      <div className="mb-6">
        <Notes />;
      </div>
    </main>
  );
}
