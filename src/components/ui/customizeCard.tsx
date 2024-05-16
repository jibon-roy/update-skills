
type Props = {
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    children?: any;
    className?: string;
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    background?: string;
    bgImgLink?: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    gridTemplateColumns?: number;
    gap?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
}

function CustomizeCard({ width, justifyContent, gap, backgroundPosition, backgroundRepeat, alignItems, gridTemplateColumns, height, display, padding, bgImgLink, boxShadow, background, border, borderRadius, margin, children, className }: Props) {
    return (
        <div
            style={
                {
                    width: width,
                    height: height,
                    padding: padding,
                    margin: margin,
                    border: border,
                    borderRadius: borderRadius,
                    boxShadow: boxShadow,
                    background: background,
                    backgroundPosition: backgroundPosition ? backgroundPosition : "center",
                    backgroundRepeat: backgroundRepeat ? backgroundRepeat : "no-repeat",
                    backgroundImage: `url(${bgImgLink})`,
                    display: display,
                    justifyContent: justifyContent,
                    alignItems: alignItems,
                    gap: gap,
                    gridTemplateColumns: `repeat(${gridTemplateColumns}, minmax(0, 1fr))`
                }
            }
            className={className ? className : ""}>
            {children}
        </div>
    )
};

export default CustomizeCard;