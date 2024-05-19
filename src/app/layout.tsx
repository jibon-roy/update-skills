import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
    title: "Update Skills",
    description: "Best online course platform.",
    icons: "https://cdn-icons-png.freepik.com/512/813/813741.png",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-primary-foreground">
                {children}
            </body>
        </html>
    );
}