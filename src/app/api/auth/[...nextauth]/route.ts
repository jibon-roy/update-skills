import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Account, User as AuthUser, Profile } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/models/userModel";
import connectDB from "@/lib/db/connectDB";
import bcrypt from 'bcrypt';

// Define the NextAuth options
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
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
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
    }: {
      user: AuthUser;
      account: Account | null;
      profile?: Profile | undefined;
      email?: { verificationRequest?: boolean | undefined } | undefined;
    }) {
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
            console.log('Existing user found:', existingUser);
          }
          return true;
        } catch (err: any) {
          console.log('Error in signIn callback:', err);
          return false;
        }
      }
      return false;
    },
  },
  // pages: {
  //     signIn: ['/login', '/', '/signup'],
  // },
};

// Create the handler
const handler = (req: any, res: any) => NextAuth(req, res, authOptions);

// Ensure correct exports for Next.js API route
export { handler as GET, handler as POST };
export default handler;
