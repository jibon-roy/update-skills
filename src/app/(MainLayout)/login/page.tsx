"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Player } from '@lottiefiles/react-lottie-player';
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[100dvh]">
            <div className="">
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
            <div className="flex items-center flex-col bg-gradient-to-top justify-center p-8">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-white">Login to your account</CardTitle>
                        <CardDescription className="text-white">Enter your email and password to access your account.</CardDescription>
                    </CardHeader>
                    <form action="">
                        <CardContent className="space-y-4 p-6">
                            <div className="space-y-2  text-white">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" autoComplete="email" placeholder="m@example.com" type="email" />
                            </div>
                            <div className="space-y-2  text-white">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" autoComplete="current-password" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Sign In</Button>
                        </CardFooter>
                    </form>
                    <div className="text-2xl flex justify-center font-bold mb-4 text-white">
                        Or,
                    </div>
                    <div className="flex justify-center">
                        <Button variant={"secondary"}><FcGoogle className="text-xl mr-2" /> Continue With Google</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage;
