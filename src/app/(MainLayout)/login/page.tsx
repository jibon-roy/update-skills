"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Player } from '@lottiefiles/react-lottie-player';
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator"
import { FaArrowAltCircleLeft } from "react-icons/fa";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation"

function LoginPage() {


    const router = useRouter();

    const handleClick = () => {
        router.push('/')
    };

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 h-[100dvh]">
            <div className="hidden lg:flex flex-col justify-center items-center">
                <div className="text-4xl text-center max-w-sm leading-10 mx-auto my-16 font-bold">
                    Login your account to Update Skills.
                </div>
                <div className="hidden lg:block">
                    <Player src="https://lottie.host/6dfbcf18-59a0-4b14-b66c-36d54c7256fd/WNjGwIBInf.json"
                        style={{ height: '300px', width: '300px' }}
                        autoplay
                        loop
                    >
                    </Player>
                </div>
            </div>
            <div className="flex relative items-center flex-col bg-gradient-to-top justify-center px-2 md:px-8 py-12">
                <Button onClick={handleClick} className="flex md:absolute top-5 right-5 gap-2 group" >
                    <FaArrowAltCircleLeft className="group-hover:-translate-x-1" /> Back to Home
                </Button>
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-4xl text-white">Login to your account</CardTitle>
                        <CardDescription className="text-white">Enter your email and password to access your account.</CardDescription>
                    </CardHeader>
                    <form>
                        <CardContent className="space-y-4 p-6">
                            <div className="space-y-2  text-white">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="email" placeholder="example@mail.com" type="email" />
                            </div>
                            <div className="space-y-2  text-white">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="Password" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="current-password" type="password" />
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
                </Card>
            </div>
        </section>
    )
}

export default LoginPage;
