import { Card } from "./card";

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
}

function CustomizeCard({ width, height, display, padding, bgImgLink, boxShadow, background, border, borderRadius, margin, children, className }: Props) {
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
                    backgroundImage: `url(${bgImgLink})`,
                    display: display,
                }
            }
            className={className ? className : ""}>
            {children}
        </div>
    )
};

export default CustomizeCard;