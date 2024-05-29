import Link from "next/link";
import Logo from "./logo";

type Props = {}

function TextLogo({ }: Props) {
    return (
        <Link className="flex items-center gap-2 font-semibold" href="/">
            <Logo />
            <span className="font-semibold">Update Skills</span>
        </Link>
    )
};

export default TextLogo;