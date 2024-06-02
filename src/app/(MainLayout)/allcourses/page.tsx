"use client"
import CarouselSmItem from "@/components/component/carousel/carouselSmItem";
import SmCard from "@/components/component/carousel/smCard";
import AllCoursesFilter from "@/components/component/courses/courseFilter";
import PageHeader from "@/components/component/pageHeader/pageHeader";



type Props = {}

function AllCourses({ }: Props) {
    return (
        <section>
            <PageHeader heading="Explore Our Online Courses With Certificates">
                <div className="mb-5">
                    Explore Categories:
                </div>
                <CarouselSmItem>
                    <SmCard />
                    <SmCard />
                    <SmCard />
                    <SmCard />
                    <SmCard />
                </CarouselSmItem>
            </PageHeader>
            <AllCoursesFilter />
        </section>
    )
};

export default AllCourses;