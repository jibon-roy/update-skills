"use client"
import { SessionProvider } from 'next-auth/react'
type Props = {
    children: any,
    session: any,
}

function AuthProvider({ children, session }: Props) {
    return <SessionProvider session={session}>{children}</SessionProvider>
};

export default AuthProvider;