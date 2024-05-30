"use client"
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useAuth from "@/lib/hooks/useAuth";
import { ReactNode } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


type Props = {
    handleOpen: any;
    children: ReactNode;
    headingTitle: string;
    description: string;
}

function SimpleAuth({ handleOpen, children, headingTitle, description }: Props) {
    const { handleGoogleLogin } = useAuth()


    return (
        <div>
            <div className="flex w-[100vw] min-h-dvh md:w-[500px] 2xl:w-[800px] items-center flex-col bg-gradient-to-top justify-center px-2 md:px-8 py-12">
                <Card className="w-full">
                    <Button onClick={handleOpen} className="rounded-none bg-transparent p-0 hover:bg-transparent absolute top-5 left-5 mb-10 group" >
                        <FaRegWindowClose className="text-4xl text-white transition hover:text-main-primary-yellow" />
                    </Button>
                    <CardHeader>
                        <CardTitle className="text-4xl text-center mb-3 text-white">{headingTitle}</CardTitle>
                        <CardDescription className="text-white text-center">{description}</CardDescription>
                    </CardHeader>
                    {children}
                    <div className="flex justify-center">
                        <Button onClick={handleGoogleLogin} variant={"secondary"}><FcGoogle className="text-xl mr-2" /> Continue With Google</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
};

export default SimpleAuth;