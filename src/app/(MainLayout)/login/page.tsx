"use client"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import AuthPage from "@/components/component/auth-page"
import { signIn, useSession } from 'next-auth/react'
import Swal from "sweetalert2"
import { useEffect } from "react"

function LoginPage() {

    const router = useRouter();
    const session = useSession()
    useEffect(() => {
        if (session.status === 'authenticated') {
            router.replace('/dashboard')
        }

    }, [router, session])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const email = e.currentTarget.name.value
        const password = e.currentTarget.password.value

        const loginUser = await signIn('credentials', {
            redirect: false,
            email,
            password
        })

        if (loginUser?.error) {
            Swal.fire({
                title: 'Opps!',
                text: await loginUser?.error,
                icon: 'error',
                confirmButtonText: 'Okay',
                confirmButtonColor: 'hsl(var(--main-primary-violet))'
            })
            if (loginUser?.url) {
                return router.replace('/dashboard')
            }
        }

        router.push('/')
    };

    return (
        <AuthPage
            mainHeading=" Login your account to Update Skills."
            headingTitle="Login to your account"
            description="Enter your email and password to access your account."
            lottieFilesLink="https://lottie.host/6dfbcf18-59a0-4b14-b66c-36d54c7256fd/WNjGwIBInf.json"
        >
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 p-6">
                    <div className="space-y-2  text-white">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="email" placeholder="example@mail.com" type="email" />
                    </div>
                    <div className="space-y-2  text-white">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" placeholder="Password" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="current-password" type="password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Sign In</Button>
                </CardFooter>
            </form>
            <div className="text-2xl flex justify-center items-center gap-4 font-bold mb-4 text-white">
                <Separator className="w-20" aria-placeholder="or"></Separator>or<Separator className="w-20" aria-placeholder="or"></Separator>
            </div>
            <div className="flex justify-center">
                <Button variant={"secondary"}><FcGoogle className="text-xl mr-2" /> Continue With Google</Button>
            </div>
        </AuthPage>
    )
}

export default LoginPage;
