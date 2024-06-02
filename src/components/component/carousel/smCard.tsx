import DynamicCard from "@/components/ui/customizeCard";
import { FaGlobe } from "react-icons/fa";

type Props = {}

function SmCard({ }: Props) {
    return (
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
    )
};

export default SmCard;