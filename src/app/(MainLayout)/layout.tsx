import { Footer } from "@/components/component/footer/footer";
import { Navigation } from "@/components/component/navigation/navigation";

export default async function RootMainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="flex flex-col justify-between min-h-screen">
            <div>
                <Navigation />
                {children}
            </div>
            <Footer />
        </main>
    );
}
