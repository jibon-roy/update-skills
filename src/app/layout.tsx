import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./redux/storeProvider";
import AuthProvider from "@/lib/utils/SessionProvider";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
    title: "Update Skills",
    description: "Best online course platform.",
    icons: "https://cdn-icons-png.freepik.com/512/813/813741.png",
};


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession()

    return (
        <StoreProvider>
            <html lang="en">
                <body className="bg-primary-foreground">
                    <AuthProvider session={session}>
                        {children}
                    </AuthProvider>
                </body>
            </html>
        </StoreProvider>
    );
}
