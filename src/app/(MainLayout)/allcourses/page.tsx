"use client"
import CarouselSmItem from "@/components/component/carousel/carouselSmItem";
import PageHeader from "@/components/component/pageHeader/pageHeader";
import DynamicCard from "@/components/ui/customizeCard";
import Image from "next/image";
import { FaGlobe } from "react-icons/fa";


type Props = {}

function AllCourses({ }: Props) {
    return (
        <section>
            <PageHeader heading="Explore Our Online Courses With Certificates">
                <div className="mb-5">
                    Explore Categories:
                </div>
                <CarouselSmItem>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>
                    <DynamicCard className="bg-white group text-black rounded-lg transition cursor-pointer p-4 m-2 hover:bg-main-primary-yellow">
                        <div className="flex text-left gap-3">
                            <div className="p-2 rounded-lg bg-main-primary-yellow group-hover:bg-white">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold">IT</div>
                                <div className="text-xs">1,250 Courses</div>
                            </div>
                        </div>
                    </DynamicCard>

                </CarouselSmItem>
            </PageHeader>
        </section>
    )
};

export default AllCourses;