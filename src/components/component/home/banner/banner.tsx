import DynamicCard from "@/components/ui/customizeCard";
import { BannerSlider } from "../../banner-slider";


type Props = {}

function Banner({ }: Props) {
    return (
        <section className="bg-gradient-to-top">
            <DynamicCard className="container mx-auto">
                <BannerSlider />
            </DynamicCard>
        </section>
    )
};

export default Banner;