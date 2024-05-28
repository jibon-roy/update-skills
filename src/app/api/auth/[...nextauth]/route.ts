import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/models/userModel";
import connectDB from "@/lib/db/connectDB";
import bcrypt from 'bcrypt'

export const authOptions: any ={
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials: any) {
                await connectDB()
                try {
                    const user: any = User.findOne({ email: credentials.email })
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }
                } catch (error: any) {
                    throw new Error(error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        })
    ],
}

export async function GET( req: any,res: any ) {
return NextAuth(req,res,authOptions)
}