"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Slider } from "@/lib/utils/interfaces/components.interface"
import Image from "next/image"
import { Button } from "@/components/ui/button"




export function CarouselPlugin({ slide }: any) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="flex justify-center min-w-0 max-w-[80%] mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {slide.map((content: Slider) => (
                    <CarouselItem key={content.key}>
                        <div className="mx-auto">
                            <Card className="bg-transparent">
                                <CardContent className="flex bg-transparent mx-auto items-center justify-center">

                                    <Image
                                        priority={true}
                                        className="w-full h-full"
                                        style={{ width: '100%', height: 'auto' }}
                                        height={content?.content.height!}
                                        width={content?.content.width!}
                                        src={content?.content.src!}
                                        alt={content?.key.toString() + "image"}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                </CardContent>
                            </Card>
                            <div className="flex gap-5 justify-between bg-main-primary-violet rounded-b-lg p-3">
                                <div className="text-3xl font-bold tracking-tighter text-gray-50 ">
                                    $49
                                    <span className="ml-2 text-xl font-normal line-through text-white">$99</span>
                                </div>
                                <Button className="h-9">Enroll now</Button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="max-sm:hidden">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    )
}
