
type Props = {
    padding?: "none" | "sm" | "md" | "lg" | string;
    margin?: "none" | "sm" | "md" | "lg" | string;
    border?: "none" | "sm" | "md" | "lg" | string;
    borderRadius?: "none" | "sm" | "md" | "lg" | string;
    boxShadow?: "none" | "sm" | "md" | "lg" | string;
    display?: "grid" | "flex" | "block" | "inline-block";
    gap?: "none" | "sm" | "md" | "lg" | string;
    position: string;
    width?: string;
    height?: string;
    children?: any;
    className?: string;
    background?: string;
    bgImgLink?: string;
    justifyContent?: string;
    alignItems?: string;
    gridTemplateColumns?: number;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
}

function CustomizeCard({ width, justifyContent, backgroundSize, gap, backgroundPosition, backgroundRepeat, alignItems, gridTemplateColumns, height, display, padding, bgImgLink, boxShadow, background, border, borderRadius, margin, children, className }: Props) {

    const getPadding = padding === "none" ? '0px' : padding === "sm" ? '0px' : padding === "md" ? '0px' : padding === "lg" ? '0px' : padding;
    const getMargin = margin === "none" ? '0px' : margin === "sm" ? '0px' : margin === "md" ? '0px' : margin === "lg" ? '0px' : margin;
    const getBorder = border === "none" ? '0px' : border === "sm" ? '0px' : border === "md" ? '0px' : border === "lg" ? '0px' : border;
    const getBorderRadius = borderRadius === "none" ? '0px' : borderRadius === "sm" ? '0px' : borderRadius === "md" ? '0px' : borderRadius === "lg" ? '0px' : borderRadius;
    const getBoxShadow = boxShadow === "none" ? '0px' : boxShadow === "sm" ? '0px' : boxShadow === "md" ? '0px' : boxShadow === "lg" ? '0px' : boxShadow;

    return (
        <div
            style={
                {
                    width: width,
                    height: height,
                    padding: getPadding,
                    margin: getMargin,
                    border: getBorder,
                    borderRadius: getBorderRadius,
                    boxShadow: getBoxShadow,
                    background: background,
                    backgroundPosition: backgroundPosition ? backgroundPosition : "center",
                    backgroundRepeat: backgroundRepeat ? backgroundRepeat : "no-repeat",
                    backgroundSize: backgroundSize ? backgroundSize : "cover",
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