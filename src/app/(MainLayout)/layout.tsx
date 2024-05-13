import type { Metadata } from "next";
import "../globals.css";
import { Navigation } from "@/components/component/navigation";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-foreground">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
