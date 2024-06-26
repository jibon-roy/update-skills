import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import UserIconDropdown from "../userDropdownNav/userIconDropdown";
import { FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsMenuOpen } from "@/app/redux/slices/handleDashboardMenu";
// import { RootState } from "@/app/redux/store/store";


type Props = {
    handleOpenNav: any
}

function DashboardHeaderNav({ handleOpenNav }: Props) {


    return (
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 p-4 dark:bg-gray-800/40">
            <div>
                <Button onClick={handleOpenNav} className="rounded-none bg-transparent p-0 hover:bg-transparent group" >
                    <FaBars className="text-2xl text-black transition hover:text-main-primary-violet" />
                </Button>
            </div>
            <div className="w-full flex-1">
                {/* <form>
                    <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-1">
                            <SearchIcon />
                        </div>
                        {/* <Input
                            className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                            placeholder="Search..."
                            type="search"
                            id='search'
                        /> 
                    </div>
                </form> */}
            </div>
            <UserIconDropdown />
        </header>
    )
};

export default DashboardHeaderNav;