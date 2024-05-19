type Props = {
    heading?: string;
    description?: string;
}

function CustomHeader({ heading, description }: Props) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{heading}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    )
};

export default CustomHeader;