
import FlexSimple from "@/components/sections/flex-simple";
import CustomHeader from "../../customHeader";

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
        <div>
          This is joy
        </div>
        <div>
          This is joy 2
        </div>
        <div>
          This is joy 2
        </div>
      </FlexSimple>
    </section>
  )
};

export default AchieveGoal;