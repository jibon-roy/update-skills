import CSS from 'csstype';
type Props = {
    children?: any;
    heading?: string;
    head?: string;
    description?: string;
    bg?: string;
    className?: string;
    imgContent?: string;
    justifyContent: 'center' | 'space-between' | 'space-evenly' | 'space-around';
    flexDirectionMd: "column" | "row" | "column-reverse" | "row-reverse";
    flexDirection: "column" | "row" | "column-reverse" | "row-reverse";
    textColor?: string;
}

function FlexSimple({ flexDirection, flexDirectionMd, justifyContent, bg, children, className, description, head, heading, imgContent
}: Props) {
    const styles: CSS.Properties = {
        display: "flex",
        flexDirection: flexDirection,
    }
    return (
        <div style={{ backgroundColor: bg }}>
            <div className={className} style={styles}>

            </div>

        </div>
    )
};

export default FlexSimple;