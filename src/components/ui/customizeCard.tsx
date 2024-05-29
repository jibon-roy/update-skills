
type Props = {
    padding?: "none" | "sm" | "md" | "lg" | string;
    margin?: "none" | "sm" | "md" | "lg" | string;
    border?: "none" | "sm" | "md" | "lg" | string;
    borderRadius?: "none" | "sm" | "md" | "lg" | "full" | string;
    boxShadow?: "none" | "sm" | "md" | "lg" | string;
    display?: "grid" | "flex" | "block" | "inline-block";
    gap?: "none" | "sm" | "md" | "lg" | string;
    position?: 'absolute' | 'fixed' | 'relative';
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
    style?: object;
}

function DynamicCard({ width, style, position, justifyContent, backgroundSize, gap, backgroundPosition, backgroundRepeat, alignItems, gridTemplateColumns, height, display, padding, bgImgLink, boxShadow, background, border, borderRadius, margin, children, className }: Props) {

    const getPadding = padding === "none" ? '0px' : padding === "sm" ? '8px' : padding === "md" ? '16px' : padding === "lg" ? '32px' : padding;
    const getMargin = margin === "none" ? '0px' : margin === "sm" ? '12px' : margin === "md" ? '36px' : margin === "lg" ? '48px' : margin;
    const getBorder = border === "none" ? '0px' : border === "sm" ? '1px solid black' : border === "md" ? '4px solid black' : border === "lg" ? '8px solid black' : border;
    const getBorderRadius = borderRadius === "none" ? '0px' : borderRadius === "sm" ? '0px' : borderRadius === "md" ? '0px' : borderRadius === "lg" ? '0px' : borderRadius === "full" ? '100%' : borderRadius;
    const getBoxShadow = boxShadow === "none" ? '0px' : boxShadow === "sm" ? '0 1px 2px rgba(0, 0, 0, 0.1)' : boxShadow === "md" ? '0 4px 6px rgba(0, 0, 0, 0.1)' : boxShadow === "lg" ? '0 10px 15px rgba(0, 0, 0, 0.1)' : boxShadow;

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
                    backgroundColor: background,
                    backgroundPosition: backgroundPosition ? backgroundPosition : "center",
                    backgroundRepeat: backgroundRepeat ? backgroundRepeat : "no-repeat",
                    backgroundSize: backgroundSize ? backgroundSize : "cover",
                    backgroundImage: `url(${bgImgLink ? bgImgLink : ""})`,
                    display: display,
                    justifyContent: justifyContent,
                    alignItems: alignItems,
                    position: position ? position : 'static',
                    gap: gap,
                    gridTemplateColumns: `repeat(${gridTemplateColumns}, minmax(0, 1fr))`,
                    ...style
                }
            }
            className={className ? className : ""}>
            {children}
        </div>
    )
};

export default DynamicCard;