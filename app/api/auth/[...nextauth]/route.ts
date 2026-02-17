import users from "@/app/models/users";
import { connectDB } from "@/lib/mongodb";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers : [
        CredentialProvider({
            name : "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials:any) {
                await connectDB();
                const existingUser = await users.findOne({ email: credentials.email });
                if(!existingUser){
                    return null;
                }
                const isMatch = await bcrypt.compare(credentials.password, existingUser.password);
                if(!isMatch){
                    return null;
                }
                return {
                    id : existingUser._id,
                    name : existingUser.name,
                    email : existingUser.email
                }
            }
        })
    ],
    session : {
        strategy : "jwt"
    },
    pages : {
        signIn : "/"
    }
})

export { handler as GET, handler as POST };
