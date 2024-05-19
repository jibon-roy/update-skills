
import VideoHolder from "../../videoHolder"
import GridSection from "@/components/sections/gridSection"


type Props = {}

function FeaturedCourse({ }: Props) {
    return (
        <GridSection heading="Our Featured Course" description="Discover your dream home from our curated selection of featured properties.">
            <VideoHolder />
        </GridSection>
    )
};

export default FeaturedCourse;


