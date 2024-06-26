import Image from "next/image";
import { Button } from "../ui/button";
import { PrimaryVideoDetails } from "@/lib/utils/interfaces/components.interface";
import { FaBookReader } from "react-icons/fa";
import StarRatings from "../ui/ratings";
import Link from "next/link";


function VideoHolder({ course }: any) {

    const {
        _id,
        title,
        enrolled,
        thumbnail,
        review_members,
        review,
        price
    }: PrimaryVideoDetails = course;

    return (
        <div className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <Image
                priority
                alt="Property 2"
                className="w-full hover:brightness-90 object-cover object-center transition-all duration-300 group-hover:scale-105"
                height={400}
                src={typeof thumbnail === 'string' ? thumbnail : thumbnail.src}
                style={{
                    aspectRatio: "720/480",
                    objectFit: "cover",
                }}
                width={600}
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="mt-2 flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap items-center space-x-2">
                        <FaBookReader className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{enrolled} Enrolled</span>
                    </div>
                    <div className="text-lg font-semibold">Price: ${price}</div>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                        {review}
                        <StarRatings readOnly review={review}></StarRatings>
                        ({review_members})
                    </div>
                    <Link href={`/allcourses/${_id}`}>
                        <Button size="sm" className="mt-3">Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default VideoHolder;
