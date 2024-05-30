"use client"
import { Navigation } from '@/components/component/navigation'
import { SessionProvider } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { Component } from 'react'
// import Error from 'next/error'
// import { useRouter } from 'next/router'
type Props = {
    children: any,
    session: any,
}

function AuthProvider({ children, session }: Props) {
    const router = useRouter();
    const path = usePathname()
    const dashboard = path.split('/')[1]
    const is404Page = Component.name === 'Custom404' || 'NotFound';


    return <SessionProvider session={session}>
        {dashboard === 'dashboard' || is404Page ? '' : <Navigation></Navigation>}
        {children}
    </SessionProvider>
};

export default AuthProvider;