import DynamicCard from "@/components/ui/customizeCard";

export type Props = {
    heading?: string,
    icon?: React.ReactNode,
    children?: string,
    shadowColor?: string,
    boxColor?: string

}

function AchieveCard({ heading, icon, boxColor, shadowColor, children }: Props) {
    return (
        <DynamicCard background={boxColor}
            boxShadow={`5px  5px 3px ${shadowColor}`}
            border={`1px solid ${shadowColor}`}
            borderRadius="8px"
            padding="lg"
            className="w-full lg:w-1/4">
            <h3 className="text-xl flex gap-2 items-center font-bold">
                <div className="text-4xl text-[#1BCBE3]" >
                    {icon}
                </div>
                {heading}
            </h3>
            <p className="py-2">
                {children}
            </p>
        </DynamicCard>
    )
};

export default AchieveCard;