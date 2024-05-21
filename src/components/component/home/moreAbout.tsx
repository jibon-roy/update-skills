import { FlexSection } from "@/components/sections/flex-section";
import img from "@/assets/images/banner.png"
type Props = {}

function MoreAbout({ }: Props) {
    return (
        <FlexSection
            flexDirectionMd="row"
            head="Unleash Your Creativity with Our Powerful Tools"
            textColor="white"
            bg="bg-gradient-to-right"
            imgContent={img.src}
            flexDirection="column-reverse"
            justifyContent="space-between"
        >
            Discover a suite of cutting-edge tools designed to help you bring your ideas to life. From intuitive design
            interfaces to seamless collaboration features, weve got everything you need to elevate your creative process.
        </FlexSection>
    )
};

export default MoreAbout;