import DashboardNavigation from "@/components/component/dashboard/dashboardNavigation/dashboardNavigation";
import PrivateRoute from "../routes/privetRoute";
import DashboardHeaderNav from "@/components/component/navigation/dashboard/dashboardHeaderNav";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main>
            <PrivateRoute>
                <div className="flex min-h-screen w-full">
                    <DashboardNavigation />
                    <div className="flex-1">
                        <DashboardHeaderNav />
                        {children}
                    </div>
                </div>
            </PrivateRoute>
        </main>
    );
}
