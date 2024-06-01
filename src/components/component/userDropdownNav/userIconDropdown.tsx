"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useAuth from "@/lib/hooks/useAuth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import userIcon from '@/assets/userplaceholder.png'

type Props = {}

function UserIconDropdown({ }: Props) {
    const { handleSignOut } = useAuth()
    const { data } = useSession()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                    size="icon"
                    variant="ghost"
                >
                    <Image
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src={data?.user?.image ? data?.user?.image : userIcon.src}
                        style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                        }}
                        width="32"
                    />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{data?.user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default UserIconDropdown;