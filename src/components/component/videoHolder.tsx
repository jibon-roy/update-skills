import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PrimaryVideoDetails } from "@/lib/utils/interfaces/components.interface";
import { FaBookReader } from "react-icons/fa";
import StarRatings from "../ui/ratings";


function VideoHolder({ course }: any) {

    const {
        title,
        thumbnail,
        enrolled,
        review_members,
        avg_review,
        price
    }: PrimaryVideoDetails = course;

    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <Image
                alt="Property 2"
                className="h-60 w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                height={400}
                src="/placeholder.svg"
                style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                }}
                width={600}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <FaBookReader className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{enrolled} Enrolled</span>
                    </div>
                    <div className="text-lg font-semibold">${price}</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <StarRatings />
                        ({review_members})
                    </div>
                    <Button size="sm">View</Button>
                </div>
            </div>
        </div>
    )
};

export default VideoHolder;
