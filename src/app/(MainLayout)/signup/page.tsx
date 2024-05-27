"use client"
import AuthPage from "@/components/component/auth-page";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UserType } from "@/lib/utils/interfaces/components.interface";
import { FcGoogle } from "react-icons/fc";
import { passwordStrength } from 'check-password-strength'


type Props = {}

function SignUp({ }: Props) {

    const handleRegister = (event: any) => {
        event.preventDefault();
        const name: string = event.currentTarget.name.value
        const email: string = event.currentTarget.email.value
        const password: string = event.currentTarget.password.value
        const dateOfBirth: string = event.currentTarget.dateOfBirth.value
        const gender: string = event.currentTarget.gender.value

        console.log(passwordStrength(password))
        const newUser: UserType = {
            name: name,
            password: password,
            dateOfBirth: dateOfBirth,
            gender: gender,
            email: email
        }
        console.log(newUser)
    }

    const currentDate = new Date()
    const date = currentDate.getUTCDate()
    console.log(date)


    return (
        <AuthPage
            headingTitle="Sign up now"
            description="Read the form carefully and fill up."
            mainHeading="Achieve the job"
            lottieFilesLink="https://lottie.host/4aa0322d-d9d5-44ae-b6a8-f19db777300c/qUSgpMuJtp.json"
        >
            <form onSubmit={handleRegister}>
                <CardContent className="space-y-4 p-6">
                    <div className="space-y-2  text-white">
                        <Label htmlFor="name">Email</Label>
                        <Input name="name" id="name" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="name" placeholder="name" type="text" />
                    </div>
                    <div className="space-y-2  text-white">
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="email" placeholder="example@mail.com" type="email" />
                    </div>
                    <div className="space-y-2  text-white">
                        <Label htmlFor="dateOfBirth">Email</Label>
                        <Input name="dateOfBirth" id="dateOfBirth" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="date" type="date" />
                    </div>
                    <div className="space-y-2  text-white">
                        <Label htmlFor="gender" className="flex gap-2 items-center">
                            <Input value="Male" name="gender" id="male" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" type="radio" />
                            Male</Label>
                        <Label htmlFor="gender" className="flex gap-2 items-center">
                            <Input value="Female" name="gender" id="female" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" type="radio" />
                            Female</Label>
                        <Label htmlFor="gender" className="flex gap-2 items-center">
                            <Input value="Others" name="gender" id="others" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" type="radio" />
                            Others</Label>
                    </div>
                    <div className="space-y-2  text-white">
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" id="password" placeholder="Password" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="current-password" type="password" />
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
};

export default SignUp;