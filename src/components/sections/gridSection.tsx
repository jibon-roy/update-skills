
import { Button } from "@/components/ui/button"
import CustomHeader from "../component/customHeader"
import Link from "next/link";
import Section from "./Section";


type Props = {
    children: any;
    heading?: string;
    headingTitle?: string;
}

function GridSection({ children, heading, headingTitle }: Props) {
    return (
        <Section>
            <div className="container px-4 md:px-6">
                {(heading || headingTitle) && <CustomHeader heading={heading} headingTitle={headingTitle} />}
                <div className="grid grid-cols-1 py-10 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {children}
                </div>
                <div className="flex justify-center">
                    <Link href='/courses'>
                        <Button>View More Properties</Button>
                    </Link>
                </div>
            </div>
        </Section>
    )
};

export default GridSection;

