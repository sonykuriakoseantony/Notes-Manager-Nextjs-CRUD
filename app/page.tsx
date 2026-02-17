"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // 👈 take control of the redirect yourself
    });

    if (result?.error) {
      // handle wrong credentials etc.
      console.error(result.error);
      return;
    }

    if (result?.ok) {
      router.push("/dashboard");
      router.refresh(); // 👈 important: tells the server component to re-evaluate the session
    }
  };
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-900">Login</h1>
        <form
          onSubmit={handleLogin}
          className="max-w-xl p-6 space-y-6 rounded mt-6 shadow border border-gray-300"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            className="h-10 w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="email"
            placeholder="******"
            className="h-10 w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-900 text-white rounded px-4 py-2"
            style={{cursor : "pointer"}}
          >
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
