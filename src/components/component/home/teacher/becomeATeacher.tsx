import { FlexSection } from "@/components/sections/flex-section";
import teacherImage from "@/assets/images/teacher.png"
import { Button } from "@/components/ui/button";

type Props = {}

function BecomeATeacher({ }: Props) {
    return (
        <FlexSection
            head="Become A Teacher"
            textColor="black"
            imgContent={teacherImage.src}
            flexDirection="column-reverse"
            flexDirectionMd="row-reverse"
            heading="Start Your Teaching Career With Us"
            justifyContent="center"
        >
            Teachers from around the world teach millions of learners on Update-Skills. We provide the tools and skills to teach what you love.
            <br /> <br />

            We are founding that person who actively love to teach and share knowledge with others.
            <br />
            <Button className="my-8">Start Teaching</Button>
        </FlexSection>
    )
};

export default BecomeATeacher;