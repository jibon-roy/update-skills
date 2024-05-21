import { FlexSection } from "@/components/sections/flex-section";
import teacherImage from "@/assets/images/teacher.png"

type Props = {}

function BecomeATeacher({ }: Props) {
    return (
        <FlexSection head="Become A Teacher" textColor="black" imgContent={teacherImage.src} flexDirection="column" flexDirectionMd="row-reverse">
            Separate subject from body with a blank line
            Do not end the subject line with a period
            Capitalize the subject line and each paragraph
            Use the imperative mood in the subject line
            Wrap lines at 72 characters
            Use the body to explain what and why you have done something. In most cases, you can leave out details about how a change has been made.
        </FlexSection>
    )
};

export default BecomeATeacher;