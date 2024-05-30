"use client"
import AuthPage from "@/components/component/auth-page";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UserInterface } from "@/lib/utils/interfaces/components.interface";
import { FcGoogle } from "react-icons/fc";
import { passwordStrength } from 'check-password-strength'
import { useState } from "react";
import { FaEye, FaSpinner } from "react-icons/fa";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import Link from "next/link";
import useAuth from "@/lib/hooks/useAuth";

type Props = {}

function SignUp({ }: Props) {
    const [loading, setLoading] = useState(false)
    const axiosPublic = useAxiosPublic()
    const { handleGoogleLogin } = useAuth()
    const router = useRouter()
    const [passType, setPassType] = useState('password')
    const [passError, setPassError] = useState('')
    const [passwordStatus, setPassStatus] = useState('')

    const handleRegister = (event: any) => {
        setLoading(true)
        event.preventDefault();
        const name: string = event.currentTarget.name.value
        const email: string = event.currentTarget.email.value
        const password: string = event.currentTarget.password.value
        const dateOfBirth: string = event.currentTarget.dateOfBirth.value
        const gender: string = event.currentTarget.gender.value


        const checkPass = passwordStrength(password)
        if (!checkPass.contains.includes('lowercase')
            || !checkPass.contains.includes('number')
            || !checkPass.contains.includes('symbol')
            || !checkPass.contains.includes('uppercase')
        ) {
            setPassError('Password must contain number, symbol, uppercase and lowercase.')
            return;
        } else {
            setPassError('')
        }

        const newUser: UserInterface = {
            name: name,
            password: password,
            dateOfBirth: dateOfBirth,
            gender: gender,
            email: email,
            image: '',
        }
        axiosPublic.post('/api/users', newUser)
            .then(data => {
                if (data.data) {
                    setLoading(false)
                    router.push('/login');
                    event.target.name.value = '';
                    event.target.email.value = '';
                    event.target.password.value = '';
                    event.target.dateOfBirth.value = '';
                    event.target.gender.value = '';
                    Swal.fire({
                        title: 'Welcome!',
                        text: "Account has been created! Please login.",
                        icon: 'success',
                        confirmButtonText: 'Okay',
                        confirmButtonColor: 'hsl(var(--main-primary-violet))'
                    })
                }

            })
            .catch(async (err) => {
                setLoading(false)
                Swal.fire({
                    title: 'Opps!',
                    text: await err.response.data,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: 'hsl(var(--main-primary-violet))'
                })
                // console.error(err)
            })
    }

    const today = new Date().toISOString().split('T')[0];

    const showPass = () => {
        if (passType === 'password') {
            setPassType('text')
        } else {
            setPassType('password')
        }
    }

    const passStatus = (e: any) => {
        if (e.target.value) {
            const testPass = passwordStrength(e.target.value)
            setPassStatus(testPass.value)
        } else {
            setPassStatus('')
        }
    }

    return (
        <AuthPage
            headingTitle="Sign up now"
            description="Read the form carefully and fill up."
            mainHeading="Achieve the job"
            lottieFilesLink="https://lottie.host/4aa0322d-d9d5-44ae-b6a8-f19db777300c/qUSgpMuJtp.json"
        >
            <form onSubmit={handleRegister}>
                <CardContent className="space-y-4 p-6">
                    <div className="space-y-1  text-white">
                        <Label htmlFor="name">Name:</Label>
                        <Input required name="name" id="name" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="name" placeholder="Full name" type="text" />
                    </div>
                    <div className="space-y-1  text-white">
                        <Label htmlFor="email">Email:</Label>
                        <Input required name="email" id="email" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="email" placeholder="example@mail.com" type="email" />
                    </div>
                    <div className="space-y-1  text-white">
                        <Label htmlFor="dateOfBirth">Date of Birth:</Label>
                        <Input placeholder="dd-mm-yyyy" data-format="DD-MM-YYYY" required name="dateOfBirth" id="dateOfBirth" max={today} className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="date" type="date" />
                    </div>
                    <div className="text-white">
                        <div className="text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Gender:</div>
                        <div className="flex flex-wrap justify-between">
                            <Label htmlFor="male" className="flex gap-2 items-center">
                                <Input value="Male" required defaultChecked name="gender" id="male" className="text-black cursor-pointer w-5 transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" type="radio" />
                                Male</Label>
                            <Label htmlFor="female" className="flex gap-2 items-center">
                                <Input value="Female" name="gender" id="female" className="text-black w-5 transition-all cursor-pointer focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" type="radio" />
                                Female</Label>
                            <Label htmlFor="others" className="flex gap-2 items-center">
                                <Input value="Others" name="gender" id="others" className="text-black w-5 transition-all cursor-pointer focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" type="radio" />
                                Others</Label>
                        </div>
                    </div>
                    <div className="space-y-1 relative text-white">
                        <FaEye onClick={showPass} className="absolute right-3  top-11 cursor-pointer w-8 text-black"></FaEye>
                        <Label htmlFor="password" className="">Password: <span className={passwordStatus === 'Strong' ? 'text-green-400' : passwordStatus === 'Medium' ? 'text-main-primary-yellow' : passwordStatus === 'Weak' ? 'text-orange-400' : 'text-red-500'}>{passwordStatus}</span></Label>
                        <Input onChange={passStatus} name="password" id="password" placeholder="Password" className="text-black transition-all focus:outline-main-primary-yellow focus-within:outline-main-primary-yellow focus-visible:outline-main-primary-yellow" autoComplete="current-password" type={passType} />
                        <div className={"hidden" + passError && "block w-full border-blue-500 text-red-500"}>{passError}</div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">{loading ? <FaSpinner className="animate-spin"></FaSpinner> : 'Sign In'}</Button>
                </CardFooter>
            </form>
            <div className="text-white flex justify-center font-semibold -mt-2">
                <Link href="/login" className="hover:text-main-primary-yellow hover:underline" >Already have an account? Login here.</Link>
            </div>
            <div className="text-2xl flex justify-center items-center gap-4 font-bold mb-4 text-white">
                <Separator className="w-20" aria-placeholder="or"></Separator>or<Separator className="w-20" aria-placeholder="or"></Separator>
            </div>
            <div className="flex justify-center">
                <Button onClick={handleGoogleLogin} variant={"secondary"}><FcGoogle className="text-xl mr-2" /> Continue With Google</Button>
            </div>
        </AuthPage>
    )
};

export default SignUp;