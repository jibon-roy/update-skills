"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setUser } from "@/app/redux/slices/authReducer";
function useAuth() {
    const session = useSession();
    const router = useRouter()
    const dispatch = useDispatch()


    dispatch(setUser({
        email: session.data?.user?.email!,
        name: session.data?.user?.name!,
    }))



    const handleGoogleLogin = async () => {
        const googleUser = await signIn('google')

        if (session.status === 'authenticated') {
            Swal.fire({
                title: 'Welcome back',
                text: 'Successfully logged in.',
                icon: 'success',
                confirmButtonText: 'Okay',
                confirmButtonColor: 'hsl(var(--main-primary-violet))'
            });
        }

        if (googleUser?.error) {
            Swal.fire({
                title: 'Oops!',
                text: 'An unexpected error occurred. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Okay',
                confirmButtonColor: 'hsl(var(--main-primary-violet))'
            });
        }

    }

    const handleSignOut = async () => {
        router.push("/");
        await signOut({ redirect: false }).then(() => {
            Swal.fire({
                title: 'See you!',
                text: 'Log out successful.',
                icon: 'success',
                confirmButtonText: 'Okay',
                confirmButtonColor: 'hsl(var(--main-primary-violet))'
            });
        });

    }

    return { handleGoogleLogin, handleSignOut }
};

export default useAuth;