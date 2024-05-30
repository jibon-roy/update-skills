import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/models/userModel";
import connectDB from "@/lib/db/connectDB";
import bcrypt from 'bcrypt';

export const authOptions: any = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any) {
                await connectDB();
                try {
                    const user = await User.findOne({ email: credentials.email });

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }

                    return null;
                } catch (error) {
                    // console.error(error); 
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        })
    ],
    callbacks: {
        async signIn({ user, account }: { user: AuthUser, account: Account }) {
            if (account?.provider === 'credentials') {
                return true;
            }
            if (account?.provider === 'google') {
                await connectDB();
                try {
                    const existingUser = await User.findOne({ email: user.email });
                    if (!existingUser) {
                        const newUser = new User({
                            email: user.email,
                            name: user.name,
                            image: user.image,
                            dateOfBirth: '',
                            password: '',
                            gender: '',
                        });
                        await newUser.save();

                    } else {
                        return;
                        // console.log('Existing user found:', existingUser);
                    }
                    return true;
                } catch (err: any) {
                    // console.log('Error in signIn callback:', err);
                    return false;
                }
            }
            return false;
        }
    },
    pages: {
        signIn: ['/login', '/', '/signup'],
    },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
