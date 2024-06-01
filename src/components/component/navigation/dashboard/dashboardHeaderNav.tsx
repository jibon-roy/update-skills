import Link from "next/link";
import Logo from "../../logo/logo";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import UserIconDropdown from "../userDropdownNav/userIconDropdown";

type Props = {}

function DashboardHeaderNav({ }: Props) {
    return (
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="flex lg:hidden items-center gap-2 font-semibold" href="/">
                <Logo />
                <span className="">Dashboard</span>
            </Link>
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-1">
                            <SearchIcon />
                        </div>
                        <Input
                            className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                            placeholder="Search..."
                            type="search"
                        />
                    </div>
                </form>
            </div>
            <UserIconDropdown />
        </header>
    )
};

export default DashboardHeaderNav;