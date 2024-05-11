import Link from "next/link";

type Props = {}

function Dashboard({ }: Props) {
    return (
        <div>
            <Link href="/about">about</Link>
        </div>
    )
};

export default Dashboard;

