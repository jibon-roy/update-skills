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
                <div className="lg:flex text-white overflow-x-hidden w-full">
                    <div className={`left-0 bg-slate-700 shadow-lg z-10 transform ${isMenuOpen ? 'w-56 sm:w-64 px-2' : 'w-0 p-0 sm:w-14'
                        } fixed transition-all p-0 sm:px-2 sm:hover:w-64 bg-slate-700 duration-300 ease-in-out`} >
                        <DashboardNavigation isMenuOpen={isMenuOpen} handleOpenNav={handleOpenNav} />
                    </div>
                    <div className={`flex-1 overflow-hidden ${isMenuOpen ? 'sm:ml-64' : 'sm:ml-14'} transition-all duration-300 ease-in-out`}>
                        <DashboardHeaderNav handleOpenNav={handleOpenNav} />
                        <div className="p-2">
                            {children}
                        </div>
                    </div>
                </div>
            </PrivateRoute>
        </main>
    );
}
