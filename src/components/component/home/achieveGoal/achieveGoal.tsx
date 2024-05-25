
import FlexSimple from "@/components/sections/flex-simple";
import CustomHeader from "../../customHeader";
import DynamicCard from "@/components/ui/customizeCard";

type Props = {}

function AchieveGoal({ }: Props) {
  return (
    <section>
      <CustomHeader
        heading="Achieve Your Goal With Update Skills"
        headingTitle="when an unknown printer took a galley of type and scrambled make
specimen book has survived not only five centuries"
      ></CustomHeader>
      <FlexSimple flexDirection="column" justifyContent="space-around" flexDirectionMd="row">
        <DynamicCard background="#C9E4E9" className="border w-1/4 shadow-[10px 10px block]">
          This is joy
        </DynamicCard>
        <DynamicCard className="border w-1/4 shadow-[10px 10px block]">
          This is joy
        </DynamicCard>
        <DynamicCard className="border w-1/4 shadow-[10px 10px block]">
          This is joy
        </DynamicCard>


      </FlexSimple>
    </section>
  )
};

export default AchieveGoal;