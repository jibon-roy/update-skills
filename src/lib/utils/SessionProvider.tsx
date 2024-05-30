"use client"
import { Navigation } from '@/components/component/navigation'
import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
type Props = {
    children: any,
    session: any,
}

function AuthProvider({ children, session }: Props) {
    const path = usePathname()
    const dashboard = path.split('/')[1]

    return <SessionProvider session={session}>
        {dashboard ? '' : <Navigation></Navigation>}
        {children}
    </SessionProvider>
};

export default AuthProvider;