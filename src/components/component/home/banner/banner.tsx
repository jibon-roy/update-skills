import CustomizeCard from "@/components/ui/customizeCard";
import { BannerSlider } from "../../banner-slider";


type Props = {}

function Banner({ }: Props) {
    return (
        <section>
            <CustomizeCard className="bg-black" width="100%" height="700px">
                <BannerSlider />
            </CustomizeCard>

        </section>
    )
};

export default Banner;