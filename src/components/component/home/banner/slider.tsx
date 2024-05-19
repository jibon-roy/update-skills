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



export function CarouselPlugin({ slide }: any) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="inline-block max-w-xs mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {slide.map((content: Slider) => (
                    <CarouselItem key={content.key}>
                        <div className="p-1 bg-black mx-auto">
                            <Card>
                                <CardContent className="flex mx-auto aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{content.key}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
