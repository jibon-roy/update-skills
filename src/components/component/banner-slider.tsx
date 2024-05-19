
// * @see https://v0.dev/t/Zo5MIIS7YUO

import DynamicCard from "../ui/customizeCard"
import { CarouselPlugin } from "./home/banner/slider"
import BannerText from "./home/banner/banner-text"
import { Slider } from "@/lib/utils/interfaces/components.interface";
import Image1 from "@/assets/images/animation.png"
import Image2 from "@/assets/images/banner.png"
import Image3 from "@/assets/images/uiux.png"
import Image4 from "@/assets/images/wordpress.png"

export function BannerSlider() {

  const SlideContent: Slider[] = [
    { key: 1, content: Image1 },
    { key: 2, content: Image2 },
    { key: 3, content: Image3 },
    { key: 4, content: Image4 },
    { key: 5, content: Image2 },
    { key: 6, content: Image3 },
    { key: 7, content: Image4 },
  ]
  return (
    <div className="w-full lg:flex justify-between items-center py-28 text-white">
      <DynamicCard className="lg:w-[60%]">
        <BannerText />
      </DynamicCard>
      <DynamicCard className="flex lg:w-[40%] justify-center mt-20 lg:mt-0 items-center">
        <CarouselPlugin slide={SlideContent} />
      </DynamicCard>
    </div>
  )
}
