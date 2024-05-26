"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

type Props = {}

function BannerText({ }: Props) {
    return (
        <div className="sm:px-4 md:px-6 grid gap-7">
            <h3 className="font-semibold text-3xl">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "It's suitable time to",
                        5000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Do not west time',
                        5000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />

            </h3>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <div className="hover:text-glitch text-glitch-duration-normal">
                    Update Your Skills
                </div>
            </h1>
            <p className="max-w-3xl text-lg text-gray-300">
                Discover a world of endless possibilities with our best courses. Bring your skills to life and grow your Job capability.
            </p>
            <Link href="/login">
                <Button size={"lg"} className="font-bold text-lg">
                    Get Started
                </Button>
            </Link >

        </div>
    )
};

export default BannerText;