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
import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    mainHeading: string;
    lottieFilesLink: string;
    headingTitle: string;
    description: string;
}

function AuthPage({ children, description, headingTitle, lottieFilesLink, mainHeading }: Props) {

    const router = useRouter();

    const handleClick = () => {
        router.push('/')
    };

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 h-[100dvh]">
            <div className="hidden lg:flex flex-col justify-center items-center">
                <div className="text-4xl text-center max-w-sm leading-10 mx-auto my-16 font-bold">
                    {mainHeading}
                </div>
                <div className="hidden lg:block">
                    <Player src={lottieFilesLink}
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
                        <CardTitle className="text-4xl text-white">{headingTitle}</CardTitle>
                        <CardDescription className="text-white">{description}</CardDescription>
                    </CardHeader>
                    {children}
                </Card>
            </div>
        </section>
    )
};

export default AuthPage;