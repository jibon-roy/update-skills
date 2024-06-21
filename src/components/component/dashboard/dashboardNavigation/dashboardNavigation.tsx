import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "../../logo/logo"
import { LuPanelLeftClose } from "react-icons/lu";


type Props = {
    handleOpenNav: any;
    isMenuOpen: boolean;
}

function DashboardNavigation({ handleOpenNav,  isMenuOpen }: Props) {

    return (
        <div className="min-h-full overflow-x-hidden bg-slate-700 text-white max-w-[280px] lg:block ">
            <div className="flex h-full  min-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-1">
                    <Link className="flex h-14 lg:h-[60px] items-center gap-4 font-semibold" href="/">
                        <Logo sm />
                        <span>Dashboard</span>
                    </Link>
                    <Button onClick={handleOpenNav} className={`ml-auto bg-slate-500 ${isMenuOpen ? '': 'bg-main-primary-yellow'}  rounded-full border-0 h-8 w-8`} size="icon">
                        <LuPanelLeftClose className="text-slate-700" /> 
                        
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1 py-2">
                    <nav className={`grid h-screen lg:h-full items-start overflow-x-hidden hover:overflow-x-auto hover:overflow-y-auto text-sm font-medium ${isMenuOpen ? 'overflow-y-auto overflow-x-auto' : 'overflow-y-hidden overflow-x-hidden'}`}>
                        <Link
                            className="flex items-center gap-5 bg-slate-600 px-2 py-2 text-slate-100 transition-all hover:text-slate-300"
                            href="/dashboard"
                        >
                            <HomeIcon />
                            Dashboard
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <LineChartIcon />
                            Analytics
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="/dashboard/allusers"
                        >
                            <LineChartIcon />
                            All Users
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <LineChartIcon />
                            Analytics
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <LineChartIcon />
                            Analytics
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <LineChartIcon />
                            Analytics
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <SettingsIcon />
                            Settings
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <SettingsIcon />
                            Settings
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <SettingsIcon />
                            Settings
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <SettingsIcon />
                            Settings
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <SettingsIcon />
                            Settings
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <SettingsIcon />
                            Settings
                        </Link>
                        <Link
                            className="flex items-center gap-5 px-2 py-2 text-slate-100 transition-all hover:text-slate-300 "
                            href="#"
                        >
                            <SettingsIcon />
                            Settings
                        </Link>
                    </nav>
                </div>
                {/* <div className="mt-auto p-4">
                    <Card>
                        <CardHeader className="pb-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" size="sm">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div> */}
            </div>
        </div>
    )
};

export default DashboardNavigation;


function SettingsIcon(props: object) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function LineChartIcon(props: object) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    )
}

function BellIcon(props: object) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function HomeIcon(props: object) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}
function MountainIcon(props: object) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
