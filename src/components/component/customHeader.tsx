type Props = {
    heading?: string;
    headingTitle?: string;
    headerColor?: string;
    className?: string;
}

function CustomHeader({ heading, headingTitle, className, headerColor }: Props) {
    return (
        <div className={`flex flex-col items-center justify-center mb-10 space-y-4 text-center`} >
            <div className={className}>
                <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl`}>{heading}</h2>
                <p className={`max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${headerColor ? headerColor : ""}`}>
                    {headingTitle}
                </p>
            </div>
        </div>
    )
};

export default CustomHeader;