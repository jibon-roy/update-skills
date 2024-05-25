type Props = {
    children: any,
    className?: string,
    style?: object
}

function Section({ children, className, style }: Props) {
    return (
        <section className={`w-full py-12 md:py-16 lg:py-24 ${className}`} style={style}>
            {children}
        </section>
    )
};

export default Section;