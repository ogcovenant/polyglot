import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { SidebarCtx } from "@/contexts/SidebarCtx";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Polyglot",
  description: "A multi-model Ai chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <SidebarCtx>
          <main className="h-screen flex overflow-hidden">
            <div className="h-full lg:w-[30%] xl:w-[20%]">
              <Sidebar />
            </div>
            <div className="w-full lg:w-[70%] xl:w-[80%] h-full">{children}</div>
          </main>
        </SidebarCtx>
      </body>
    </html>
  );
}
