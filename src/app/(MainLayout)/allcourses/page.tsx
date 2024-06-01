"use client"
import CarouselSmItem from "@/components/component/carousel/carouselSmItem";
import PageHeader from "@/components/component/pageHeader/pageHeader";
import DynamicCard from "@/components/ui/customizeCard";
import Image from "next/image";


type Props = {}

function AllCourses({ }: Props) {
    return (
        <section>
            <PageHeader heading="Explore Our Online Courses With Certificates">
                <CarouselSmItem>
                    <DynamicCard>
                        <Image
                            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            width={300}
                            height={300}
                            priority
                            alt="React Carousel with Server Side Rendering Support Part 2"
                        />
                    </DynamicCard>
                    <DynamicCard>
                        <Image
                            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            width={300}
                            height={300}
                            priority
                            alt="React Carousel with Server Side Rendering Support Part 2"
                        />
                    </DynamicCard>
                    <DynamicCard>
                        <Image
                            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            width={300}
                            height={300}
                            priority
                            alt="React Carousel with Server Side Rendering Support Part 2"
                        />
                    </DynamicCard>
                    <DynamicCard>
                        <Image
                            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            width={300}
                            height={300}
                            priority
                            alt="React Carousel with Server Side Rendering Support Part 2"
                        />
                    </DynamicCard>
                    <DynamicCard>
                        <Image
                            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            width={300}
                            height={300}
                            priority
                            alt="React Carousel with Server Side Rendering Support Part 2"
                        />
                    </DynamicCard>
                </CarouselSmItem>
            </PageHeader>
        </section>
    )
};

export default AllCourses;