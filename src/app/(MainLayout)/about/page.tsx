import Link from "next/link";

type Props = {}

function About({ }: Props) {
    return (
        <div className="p-10">
            <Link href="/dashboard" className="bg-blue-400 rounded-md px-4 py-2">Dashboard</Link>
            {/* <Link href="/">Home</Link> */}
        </div>
    )
};

export default About;