
import { PrimaryVideoDetails } from "@/lib/utils/interfaces/components.interface"
import VideoHolder from "../../videoHolder"
import GridSection from "@/components/sections/gridSection"
import Image1 from "@/assets/images/animation.png"
import Image2 from "@/assets/images/banner.png"
import Image3 from "@/assets/images/uiux.png"
import Image4 from "@/assets/images/wordpress.png"

type Props = {}



function PopularCourse({ }: Props) {

    const getCourse: PrimaryVideoDetails[] = [
        {
            _id: 1,
            title: "this is title",
            thumbnail: Image1,
            enrolled: 1250,
            review_members: 1000,
            review: 3.4,
            price: 25
        },
        {
            _id: 2,
            title: "this is title",
            thumbnail: Image2,
            enrolled: 1250,
            review_members: 1000,
            review: 3.4,
            price: 25
        },
        {
            _id: 3,
            title: "this is title",
            thumbnail: Image3,
            enrolled: 1250,
            review_members: 1000,
            review: 3.4,
            price: 25
        },
        {
            _id: 4,
            title: "this is title",
            thumbnail: Image4,
            enrolled: 1250,
            review_members: 1000,
            review: 3.4,
            price: 25
        },
        {
            _id: 5,
            title: "this is title",
            thumbnail: Image2,
            enrolled: 1250,
            review_members: 1000,
            review: 3.4,
            price: 25
        },
        {
            _id: 6,
            title: "this is title",
            thumbnail: Image1,
            enrolled: 1250,
            review_members: 1000,
            review: 3.4,
            price: 25
        },

    ]

    return (
        <GridSection heading="Popular Courses" description="Discover your dream home from our curated selection of featured properties.">
            {getCourse.map((course: PrimaryVideoDetails) => <VideoHolder key={course._id} course={course} />)}
        </GridSection>
    )
};

export default PopularCourse;


