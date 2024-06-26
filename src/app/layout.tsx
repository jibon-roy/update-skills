import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./redux/storeProvider";
import AuthProvider from "@/lib/utils/SessionProvider";
import { getServerSession } from "next-auth";
import icon from "@/assets/icon.png"


export const metadata: Metadata = {
    title: "Update Skills",
    description: "Best online course platform.",
    icons: icon.src,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession()

    return (
        <html lang="en">
            <body className="bg-primary-foreground overflow-x-hidden">
                <StoreProvider>
                    <AuthProvider session={session}>
                        {children}
                    </AuthProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
