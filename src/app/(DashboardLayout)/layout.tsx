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
                <div className="lg:flex overflow-x-hidden min-h-screen w-full">
                    <div >
                        <DashboardNavigation />
                    </div>
                    <div className="flex-1">
                        <DashboardHeaderNav />
                        {children}
                    </div>
                </div>
            </PrivateRoute>
        </main>
    );
}
