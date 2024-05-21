"use client"
import Image from "next/image";
import CustomHeader from "../component/customHeader";
import { useEffect, useState } from "react";


type Props = {
  children?: any;
  heading?: string;
  description?: string;
  head?: string;
  bg?: string;
  className?: string;
  imgContent: string;
  flexDirectionMd: "column" | "row" | "column-reverse" | "row-reverse";
  flexDirection: "column" | "row" | "column-reverse" | "row-reverse";
  textColor?: string;
}
export function FlexSection({ children, bg, imgContent, className, heading, head, textColor, description, flexDirection, flexDirectionMd }: Props) {

  const [background, setBackground] = useState(flexDirection);

  useEffect(() => {
    const updateBackground = () => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        setBackground(flexDirection);
      } else {
        setBackground(flexDirectionMd);
      }
    };

    updateBackground();

    window.addEventListener('resize', updateBackground);

    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, [flexDirection, flexDirectionMd]);

  const flexStyles = {
    flexDirection: background
  }



  return (
    <section className={"lg:py-32 gap-8 py-12 md:py-28" + " " + bg + " " + className} style={{ color: textColor }}>
      {(heading || description) && <CustomHeader heading={heading} headingTitle={description} />}
      <div style={flexStyles} className={`lg:flex gap-8 container items-center justify-between`}>
        <div className="space-y-4 mb-24 lg:mb-0 lg:max-w-[60%]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {head}
          </h2>
          <p className="text-lg md:text-xl">
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
