import { Footer } from "@/components/component/footer/footer";
import { Navigation } from "@/components/component/navigation/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main>
            <Navigation />
            {children}
            <Footer />
        </main>
    );
}
