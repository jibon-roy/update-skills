
import FlexSimple from "@/components/sections/flex-simple";
import CustomHeader from "../../customHeader";
import { FaBath, FaBook, FaHatCowboy } from "react-icons/fa";
import AchieveCard from "./achieveCard";

type Props = {}
type Obj = {
  heading?: string,
  icon?: React.ReactNode,
  children?: string,
  shadowColor?: string,
  boxColor?: string

}

function AchieveGoal({ }: Props) {

  const contents: Obj[] = [
    {
      heading: "Expert Tutors",
      boxColor: "#F1FDFF",
      shadowColor: "#C9E4E9",
      icon: <FaHatCowboy className="text-[#1BCBE3]" />,
      children: "When an unknown printer took a galley offer type and scrambled makes."
    },
    {
      heading: "Effective Courses",
      boxColor: "#EDEAFF",
      shadowColor: "#C8C1ED",
      icon: <FaBook className="text-[#5751E1]" />,
      children: "When an unknown printer took a galley offer type and scrambled makes."
    },
    {
      heading: "Earn Certificate",
      boxColor: "#FFF7E2",
      shadowColor: "#EBE0C4",
      icon: <FaBath className="text-[#FFC224]" />,
      children: "When an unknown printer took a galley offer type and scrambled makes."
    }

  ]

  return (
    <section>
      <CustomHeader
        heading="Achieve Your Goal With Update Skills"
        headingTitle="when an unknown printer took a galley of type and scrambled make
specimen book has survived not only five centuries"
      ></CustomHeader>
      <FlexSimple flexDirection="column" justifyContent="space-around" flexDirectionMd="row">
        {contents.map((item, key) => (
          <AchieveCard key={key} boxColor={item.boxColor} shadowColor={item.shadowColor} heading={item.heading} icon={item.icon}>
            {item.children}
          </AchieveCard>
        ))}
      </FlexSimple>
    </section>
  )
};

export default AchieveGoal;