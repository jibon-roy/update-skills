/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/xYHqD5MkVkT
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full container mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center" href="#">
            <MountainIcon />
            <span className="sr-only">Update Skills</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/">
              Home
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/dashboard">
              Dashboard
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="/about">
              About
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Services
            </Link>
            <Link className="font-medium flex items-center text-sm transition-colors hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/signUp">
              <Button size="sm">Sign up</Button>
            </Link>
            <Link href="/login">
              <Button size="sm" variant="outline">
                Log in
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function MountainIcon(props: {}) {
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
      className="h-6 w-6"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
