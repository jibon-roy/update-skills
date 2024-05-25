type Props = {
    children: any
}

function Section({ children }: Props) {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            {children}
        </section>
    )
};

export default Section;