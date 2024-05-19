/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f9QPHjbedJX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <div className="flex items-center gap-1">
            <button className="p-1 transition-colors hover:text-primary">
                <StarIcon className="h-6 w-6 fill-primary" />
            </button>
            <button className="p-1 transition-colors hover:text-primary">
                <StarIcon className="h-6 w-6 fill-primary" />
            </button>
            <button className="p-1 transition-colors hover:text-primary">
                <StarIcon className="h-6 w-6 fill-primary" />
            </button>
            <button className="p-1 transition-colors hover:text-primary">
                <StarIcon className="h-6 w-6 fill-primary" />
            </button>
            <button className="p-1 transition-colors hover:text-primary">
                <StarIcon className="h-6 w-6 fill-muted stroke-muted-foreground" />
            </button>
        </div>
    )
}

function StarIcon(props: any) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}