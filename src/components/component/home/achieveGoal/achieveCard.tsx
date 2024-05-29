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
            className="w-full lg:w-1/4 cursor-pointer hover:shadow-2xl">
            <h3 className="text-xl flex gap-2 items-center font-bold">
                <div style={{ border: `1px solid ${shadowColor}` }} className="text-4xl p-2 rounded-full text-[#1BCBE3]" >
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