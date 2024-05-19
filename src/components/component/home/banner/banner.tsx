import DynamicCard from "@/components/ui/customizeCard";
import { BannerSlider } from "../../banner-slider";


type Props = {}

function Banner({ }: Props) {
    return (
        <section>
            <DynamicCard className="bg-black" width="100%">
                <BannerSlider />
            </DynamicCard>
        </section>
    )
};

export default Banner;