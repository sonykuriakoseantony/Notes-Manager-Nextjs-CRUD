import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-900">Login</h1>
        <form action="" className="max-w-xl p-6 space-y-6 rounded mt-6 shadow border border-gray-300">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="h-10 w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="email"
            placeholder="******"
            className="h-10 w-full p-2 border border-gray-300 rounded-md"
          />
          <button className="bg-blue-900 text-white rounded px-4 py-2">
            Login
          </button>

          <p>
            New User? Please{" "}
            <Link href="/register" className="text-blue-900 underline">
              Register
            </Link>{" "}
            here
          </p>
        </form>
      </main>
    </>
  );
}
