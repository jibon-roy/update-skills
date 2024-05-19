
import { PrimaryVideoDetails } from "@/lib/utils/interfaces/components.interface"
import VideoHolder from "../../videoHolder"
import GridSection from "@/components/sections/gridSection"


type Props = {}



function FeaturedCourse({ }: Props) {

    const getCourse: PrimaryVideoDetails = {
        title: "this is title",
        thumbnail: "thumbnail",
        enrolled: 1250,
        review_members: 1000,
        avg_review: 5.4,
        price: 25
    }

    return (
        <GridSection heading="Popular Courses" description="Discover your dream home from our curated selection of featured properties.">
            <VideoHolder course={getCourse} />
        </GridSection>
    )
};

export default FeaturedCourse;


