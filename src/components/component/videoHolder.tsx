import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PrimaryVideoDetails } from "@/lib/utils/interfaces/components.interface";
import { FaBookReader } from "react-icons/fa";


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
            <Link className="absolute inset-0 z-10" href="/">
                <span className="sr-only">View property</span>
            </Link>
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
                    <div>{review_members}</div>
                    <Button size="sm">View</Button>
                </div>
            </div>
        </div>
    )
};

export default VideoHolder;

function BathIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
            <line x1="10" x2="8" y1="5" y2="7" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <line x1="7" x2="7" y1="19" y2="21" />
            <line x1="17" x2="17" y1="19" y2="21" />
        </svg>
    )
}


function BedIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 4v16" />
            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
            <path d="M2 17h20" />
            <path d="M6 8v9" />
        </svg>
    )
}


function RulerIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
            <path d="m14.5 12.5 2-2" />
            <path d="m11.5 9.5 2-2" />
            <path d="m8.5 6.5 2-2" />
            <path d="m17.5 15.5 2-2" />
        </svg>
    )
}
