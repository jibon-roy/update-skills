"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import useLogin from "@/lib/hooks/useGoogleLogin";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegWindowClose } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

type Props = {
    handleOpen: any
}

function SimpleLogin({ handleOpen }: Props) {
    const { handleGoogleLogin } = useLogin()
    const session = useSession()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;

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
                router.push('/');
            }
        } catch (error) {

            Swal.fire({
                title: 'Oops!',
                text: 'An unexpected error occurred. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Okay',
                confirmButtonColor: 'hsl(var(--main-primary-violet))'
            });
        }
    };

    return (
        <div>
            <div className="flex min-h-dvh w-full max-w-3xl items-center flex-col bg-gradient-to-top justify-center px-2 md:px-8 py-12">
                <Card className="w-full">
                    <Button onClick={handleOpen} className="rounded-none bg-transparent p-0 hover:bg-transparent absolute top-5 right-5 mb-5 group" >
                        <FaRegWindowClose className="text-4xl text-white transition hover:text-main-primary-yellow" />
                    </Button>
                    <CardHeader>
                        <CardTitle className="text-4xl text-center mb-3 text-white">Login to your account</CardTitle>
                        <CardDescription className="text-white text-center">Enter your email and password to access your account.</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit} >
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
                </Card>
            </div>
        </div>
    )
};

export default SimpleLogin;