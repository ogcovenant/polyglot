import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <main className="h-screen flex overflow-hidden">
          <div className="w-[20%] h-full">
          <Sidebar />
          </div>
          <div className="w-[80%] h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
