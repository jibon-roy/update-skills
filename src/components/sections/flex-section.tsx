import Image from "next/image";
import CustomHeader from "../component/customHeader";

type Props = {
  children?: any;
  heading?: string;
  description?: string;
  head?: string;
  bg?: string;
  className?: string;
  imgContent: string;
  flexDirectionMd: "flex-col" | "flex-row" | "flex-col-reverse" | "flex-row-reverse";
  flexDirection: "flex-col" | "flex-row" | "flex-col-reverse" | "flex-row-reverse";
}

export function FlexSection({ children, bg, imgContent, className, heading, head, description, flexDirection, flexDirectionMd }: Props) {
  return (
    <section className={"lg:py-32 gap-8 py-12 md:py-28" + " " + bg + " " + className}>
      {(heading || description) && <CustomHeader heading={heading} headingTitle={description} />}
      <div className={`lg:flex gap-8 max-lg:flex-row container lg:${flexDirectionMd} items-center justify-between`}>
        <div className="space-y-4 mb-24 lg:mb-0 lg:max-w-[60%]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {head}
          </h2>
          <p className="text-gray-200 dark:text-gray-400 text-lg md:text-xl">
            {children}
          </p>
        </div>
        <div className="flex-1 w-full flex justify-center lg:max-w-[600px]">
          <Image
            priority
            alt="Creative Tools"
            className="rounded-lg mx-auto block"
            height="400"
            src={imgContent}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </div>
    </section>
  )
}
