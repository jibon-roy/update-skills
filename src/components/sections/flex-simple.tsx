"use client"
import CSS from 'csstype';
import { useEffect, useState } from 'react';
type Props = {
    children?: any;
    bg?: string;
    className?: string;
    justifyContent: 'center' | 'space-between' | 'space-evenly' | 'space-around';
    flexDirectionMd: "column" | "row" | "column-reverse" | "row-reverse";
    flexDirection: "column" | "row" | "column-reverse" | "row-reverse";
    textColor?: string;
}

function FlexSimple({ flexDirection, flexDirectionMd, textColor, justifyContent, bg, children, className,
}: Props) {

    const [direction, setDirection] = useState(flexDirection);

    useEffect(() => {
        const updateBackground = () => {
            if (window.matchMedia('(max-width: 1024px)').matches) {
                setDirection(flexDirection);
            } else {
                setDirection(flexDirectionMd);
            }
        };
        updateBackground();
        window.addEventListener('resize', updateBackground);
        return () => {
            window.removeEventListener('resize', updateBackground);
        };
    }, [flexDirection, flexDirectionMd]);


    const styles: CSS.Properties = {
        flexDirection: direction,
        justifyContent: justifyContent,
        display: "flex",
        WebkitJustifyContent: justifyContent,
        color: textColor
    }
    return (
        <div style={{ backgroundColor: bg }}>
            <div className={className} style={styles}>
                {children}
            </div>
        </div>
    )
};

export default FlexSimple;