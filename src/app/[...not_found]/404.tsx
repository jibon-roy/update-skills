import Link from "next/link";



function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold mb-4">Opps...</h1>
            <p className="text-2xl mb-8">Page not Found</p>
            <Link href="/">
                <a className="text-blue-500 hover:underline">Go back to Home</a>
            </Link>
        </div>
    );
}

export default Custom404;
