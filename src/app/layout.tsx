import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./redux/storeProvider";


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
        <StoreProvider>
            <html lang="en">
                <body className="bg-primary-foreground">

                </body>
            </html>
        </StoreProvider>
    );
}
