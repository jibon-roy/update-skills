import PageTransition from "@/components/animations/pageTransition";
import { Footer } from "@/components/component/footer/footer";
import { Navigation } from "@/components/component/navigation/navigation";

export default async function RootMainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main>
            <Navigation />
            <PageTransition>
                <div className="flex flex-col justify-between min-h-screen">
                    {children}
                    <Footer />
                </div>
            </PageTransition>

        </main>
    );
}
