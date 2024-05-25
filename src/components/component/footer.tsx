
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6 text-gray-300" />
            <span className="text-lg font-semibold text-gray-300">Update Skills</span>
          </div>
          <p className="text-sm leading-relaxed">
            Update skills is a leading provider of innovative skill development courses for businesses of all sizes.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold text-gray-300">Products</h4>
          <ul className="grid gap-1">
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Enterprise Solutions
              </Link>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                E-commerce
              </Link>
            </li>
            <li>

            </li>
          </ul>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold text-gray-300">Services</h4>
          <ul className="grid gap-1">
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Consulting
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Training
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Support
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Maintenance
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold text-gray-300">Resources</h4>
          <ul className="grid gap-1">
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Documentation
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Webinars
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Case Studies
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold text-gray-300">Company</h4>
          <ul className="grid gap-1">
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-200 transition-colors" href="#">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function MountainIcon(props: any) {
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
