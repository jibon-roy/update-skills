"use client"
import DashboardNavigation from "@/components/component/dashboard/dashboardNavigation/dashboardNavigation";
import PrivateRoute from "../routes/privetRoute";
import DashboardHeaderNav from "@/components/component/navigation/dashboard/dashboardHeaderNav";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useState } from "react";


export default function RootDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(true)

    const handleOpenNav = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <main>
            <PrivateRoute>
                <div className="lg:flex relative overflow-x-hidden min-h-screen w-full">
                    <div className={`inset-y-0 left-0 w-64 bg-white shadow-lg z-10 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:fixed absolute transition-transform duration-300 ease-in-out`} >
                        <DashboardNavigation />
                    </div>
                    <div className={`flex-1 ${isMenuOpen ? 'md:ml-64' : 'ml-0'} transition-all duration-300 ease-in-out`}>
                        <DashboardHeaderNav handleOpenNav={handleOpenNav} />
                        {children}
                    </div>
                </div>
            </PrivateRoute>
        </main>
    );
}
