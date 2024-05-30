import DashboardNavigation from "@/components/component/dashboard/dashboardNavigation/dashboardNavigation";
import PrivateRoute from "../routes/privetRoute";

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
                    {children}
                </div>
            </PrivateRoute>
        </main>
    );
}
