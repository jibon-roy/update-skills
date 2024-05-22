"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Player } from '@lottiefiles/react-lottie-player';

function LoginPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[100dvh]">
            <div className="hidden lg:block relative">
                <Player src="https://lottie.host/embed/6dfbcf18-59a0-4b14-b66c-36d54c7256fd/WNjGwIBInf.json"
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white max-w-md px-4">
                    <h1 className="text-4xl font-bold mb-4">Collaborate seamlessly with your team</h1>
                    <p className="text-lg">
                        Our platform enables your team to work together effortlessly, no matter where they are.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center p-8">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Login to your account</CardTitle>
                        <CardDescription>Enter your email and password to access your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="m@example.com" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Sign In</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage;
