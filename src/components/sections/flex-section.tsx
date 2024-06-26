"use client"
import Image from "next/image";
import CustomHeader from "../component/customHeader";
import { useEffect, useState } from "react";
import Section from "./Section";


type Props = {
  children?: any;
  heading?: string;
  head?: string;
  description?: string;
  bg?: string;
  className?: string;
  imgContent?: string;
  justifyContent: 'center' | 'space-between' | 'space-evenly' | 'space-around';
  flexDirectionMd: "column" | "row" | "column-reverse" | "row-reverse";
  flexDirection: "column" | "row" | "column-reverse" | "row-reverse";
  textColor?: string;
  animate?: boolean
}
export function FlexSection({ children, animate, justifyContent, bg, imgContent, className, heading, head, textColor, description, flexDirection, flexDirectionMd }: Props) {

  const [direction, setDirection] = useState(flexDirection);

  useEffect(() => {
    const updateBackground = () => {
      if (window.matchMedia('(max-width: 1024px)').matches) {
        setDirection(flexDirection);
      } else {
        setDirection(flexDirectionMd);
      }
    };
    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, [flexDirection, flexDirectionMd]);

  const flexStyles = {
    flexDirection: direction,
    justifyContent: justifyContent
  }

  return (
    <Section className={bg + " " + className} style={{ color: textColor }}>
      {(heading || description) && <CustomHeader heading={heading} className="mb-10" headingTitle={description} />}
      <div style={flexStyles} className={`flex gap-8 container items-center justify-between`}>
        <div className="space-y-4 mb-24 lg:mb-0 lg:max-w-[60%] 2xl:max-w-[40%]">
          <h2 className="text-3xl my-8 md:text-4xl font-bold tracking-tight">
            {head}
          </h2>
          <div className="text-lg md:text-xl">
            {children}
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center lg:max-w-[600px]">
          {imgContent && <Image
            src={imgContent ? imgContent : ""}
            priority
            alt="Creative Tools"
            className="rounded-lg mx-auto animate-updown block duration-1000"
            height="400"
            style={{
              objectFit: "cover",
            }}
            width="600"
          />
          }
        </div>
      </div>
    </Section>
  )
}
