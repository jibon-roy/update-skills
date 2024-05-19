
import { Button } from "@/components/ui/button"
import CustomHeader from "../component/customHeader"


type Props = {
    children: any;
    heading?: string;
    description?: string;
}

function GridSection({ children, heading, description }: Props) {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                {(heading || description) && <CustomHeader heading={heading} description={description} />}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {children}
                </div>
                <div className="flex justify-center">
                    <Button>View More Properties</Button>
                </div>
            </div>
        </section>
    )
};

export default GridSection;

