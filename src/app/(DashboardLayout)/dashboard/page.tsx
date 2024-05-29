
import PrivetRoute from "@/app/routes/privetRoute";
import { Dashboard } from "@/components/component/dashboard/dashboard";
// import Link from "next/link";

type Props = {}

function DashboardPage({ }: Props) {

    return (
        <PrivetRoute>
            <div>
                <Dashboard />
            </div>
        </PrivetRoute>
    )
};

export default DashboardPage;

