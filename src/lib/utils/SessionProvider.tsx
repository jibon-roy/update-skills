"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'


// import Error from 'next/error'
// import { useRouter } from 'next/router'
type Props = {
    children: any,
    session: any,
}

function AuthProvider({ children, session }: Props) {


    return <SessionProvider session={session}>
        {children}
    </SessionProvider>
};

export default AuthProvider;