import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { Account, User as AuthUser } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import User from "@/lib/models/userModel";
import connectDB from "@/lib/db/connectDB";

export const authOptions: any ={
    providers: [
        CredentialsProvider({

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        })
    ],
}
