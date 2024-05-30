"use client";

import { useSession } from "next-auth/react";
import { notFound, useRouter } from "next/navigation"; // Correct import for useRouter
import { ReactNode, useEffect } from "react";
// import { useSelector } from "react-redux";

type Props = {
    children: ReactNode;
};

function PrivateRoute({ children }: Props) {
    const router = useRouter();
    const { data: session, status } = useSession();
    // const user = useSelector((state: { auth: { user: any } }) => state.auth.user);

    if (status === "unauthenticated") {
        notFound()
    }

    if (status === "loading") {
        return <p>Loading...</p>; // Show a loading state while the session is being fetched
    }

    if (status === "authenticated") {
        return <>{children}</>; // Render children if authenticated
    }

    // Optionally, you can return null or a fallback component while redirecting
    return null;
}

export default PrivateRoute;
