
import { Button } from "@/components/ui/button"
import CustomHeader from "../component/customHeader"
import Link from "next/link";


type Props = {
    children: any;
    heading?: string;
    headingTitle?: string;
}

function GridSection({ children, heading, headingTitle }: Props) {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                {(heading || headingTitle) && <CustomHeader heading={heading} headingTitle={headingTitle} />}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {children}
                </div>
                <div className="flex justify-center">
                    <Link href=''>
                        <Button>View More Properties</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default GridSection;

