"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill teh details!");
    } else {
      const userDetails = { name, email, password };
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userDetails),
      });

      if (res.status == 200) {
        alert("User Registered Successfully");
      } else if (res.status == 409) {
        const data = await res.json();
        alert(data.message);
      }

      setName("");
      setEmail("");
      setPassword("");
      router.push("/");
    }
  };

  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-900">Register</h1>
        <form
          onSubmit={handleRegister}
          className="max-w-xl p-6 space-y-6 rounded mt-6 shadow border border-gray-300"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            placeholder="Full Name"
            className="h-10 w-full p-2 border border-gray-300 rounded-md"
          />
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
            Register
          </button>

          <p>
            Already have an account? Please{" "}
            <Link href="/" className="text-blue-900 underline">
              Login
            </Link>{" "}
            here
          </p>
        </form>
      </main>
    </>
  );
}
