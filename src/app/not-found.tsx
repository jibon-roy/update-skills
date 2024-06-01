"use client"
import { Navigation } from "@/components/component/navigation/navigation";
import { Button } from "@/components/ui/button";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
// import { notFound } from "next/navigation"



function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gray-100">

            <h1 className="text-6xl font-bold mb-4">Opps...</h1>

            <Player src="https://lottie.host/53b11754-bc4a-42a2-b788-1ffe073a8f49/jWTnwvMZno.json"
                style={{ height: '300px', width: '300px' }}
                autoplay
                loop

            >
            </Player>
            <p className="text-2xl mb-8">Page not found</p>
            <Link href="/">
                <Button>Go back to Home</Button>
            </Link>
        </div>
    )

}

NotFound.notfound = true;

export default NotFound;
