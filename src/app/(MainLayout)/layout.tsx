import { Navigation } from "@/components/component/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main>
            <Navigation />
            {children}
        </main>
    );
}
