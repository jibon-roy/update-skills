"use client"
import DashboardNavigation from "@/components/component/dashboard/dashboardNavigation/dashboardNavigation";
import PrivateRoute from "../routes/privetRoute";
import DashboardHeaderNav from "@/components/component/navigation/dashboard/dashboardHeaderNav";
import { useState } from "react";
import { useHotkeys } from 'react-hotkeys-hook'

export default function RootDashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useHotkeys('esc', () => {
        setIsMenuOpen(false)
    })

    const handleOpenNav = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <main>
            <PrivateRoute>
                <div className="lg:flex relative overflow-x-hidden min-h-screen w-full">
                    <div className={`inset-y-0 left-0 bg-white shadow-lg z-10 transform ${isMenuOpen ? 'w-64' : 'w-0 p-0 sm:w-14'
                        } absolute transition-all p-0 sm:px-2 bg-slate-700 duration-300 ease-in-out`} >
                        <DashboardNavigation />
                    </div>
                    <div className={`flex-1 overflow-hidden ${isMenuOpen ? 'sm:ml-64' : 'sm:ml-14'} transition-all duration-300 ease-in-out`}>
                        <DashboardHeaderNav handleOpenNav={handleOpenNav} />
                        <div className="p-4">
                            {children}
                        </div>
                    </div>
                </div>
            </PrivateRoute>
        </main>
    );
}
