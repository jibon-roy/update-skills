import { FlexSection } from "@/components/sections/flex-section";

type Props = {}

function AchieveGoal({ }: Props) {
  return (
    <section>
      <FlexSection flexDirection="row" justifyContent="space-around" flexDirectionMd="column">
        <div>
          This is joy
        </div>
        <div>
          This is joy 2
        </div>
        <div>
          This is joy 2
        </div>
      </FlexSection>
    </section>
  )
};

export default AchieveGoal;