"use client"
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
type Props = {
    children: ReactNode
}

function PrivetRoute({ children }: Props) {
    const router = useRouter()
    console.log(router)
    const user = useSelector((state: any) => state.auth.user)

    if (user) {
        return children
    } else {
        router.push('/')
    }
};

export default PrivetRoute;