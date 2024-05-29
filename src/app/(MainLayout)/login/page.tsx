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
import { useDispatch } from 'react-redux';
import { setUser } from "@/app/redux/slices/authReducer";
import Link from "next/link"
import useLogin from "@/lib/hooks/useGoogleLogin"

function LoginPage() {
    const { handleGoogleLogin } = useLogin()

    const router = useRouter();
    const session = useSession()
    const dispatch = useDispatch()


    useEffect(() => {
        console.log(session)
        if (session.status === 'authenticated') router.replace('/dashboard')
        dispatch(setUser({
            email: session.data?.user?.email!,
            name: session.data?.user?.name!,
        }))
    }, [router, session, dispatch])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        // const router = useRouter();

        try {
            const loginUser = await signIn('credentials', {
                redirect: false,
                email,
                password
            });

            if (session.status === 'authenticated') {
                Swal.fire({
                    title: 'Welcome back',
                    text: 'Successfully logged in.',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: 'hsl(var(--main-primary-violet))'
                });
            } else if (loginUser?.error) {
                Swal.fire({
                    title: 'Oops!',
                    text: loginUser.error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: 'hsl(var(--main-primary-violet))'
                });
            } else if (loginUser?.ok) {
                // Optional: Add logic to redirect to a specific page after successful login
                router.push('/dashboard');
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
            Swal.fire({
                title: 'Oops!',
                text: 'An unexpected error occurred. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Okay',
                confirmButtonColor: 'hsl(var(--main-primary-violet))'
            });
        }
    };

    // const handleGoogleLogin = async () => {
    //     const googleUser = await signIn('google')

    //     if (session.status === 'authenticated') {
    //         Swal.fire({
    //             title: 'Welcome back',
    //             text: 'Successfully logged in.',
    //             icon: 'success',
    //             confirmButtonText: 'Okay',
    //             confirmButtonColor: 'hsl(var(--main-primary-violet))'
    //         });
    //     }

    //     if (googleUser?.error) {
    //         Swal.fire({
    //             title: 'Oops!',
    //             text: 'An unexpected error occurred. Please try again later.',
    //             icon: 'error',
    //             confirmButtonText: 'Okay',
    //             confirmButtonColor: 'hsl(var(--main-primary-violet))'
    //         });
    //     }
    // }

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
            <div className="text-white flex justify-center font-semibold -mt-2">
                <Link href="/signup" className="hover:text-main-primary-yellow hover:underline" >Do not have an account? Sign up here.</Link>
            </div>
            <div className="text-2xl flex justify-center items-center gap-4 font-bold mb-4 text-white">
                <Separator className="w-20" aria-placeholder="or"></Separator>or<Separator className="w-20" aria-placeholder="or"></Separator>
            </div>
            <div className="flex justify-center">
                <Button onClick={handleGoogleLogin} variant={"secondary"}><FcGoogle className="text-xl mr-2" /> Continue With Google</Button>
            </div>
        </AuthPage>
    )
}

export default LoginPage;
