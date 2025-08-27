import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/hooks/SessionWrapper";
import LeftSideBarMessage from "@/components/ui/LeftSideBarMessage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Messages",
  description: "Chat UI",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        <SessionWrapper>
          <div className="flex min-h-screen w-full bg-black">
            <div className="hidden lg:block w-[180px]">
              <LeftSideBarMessage />
            </div>

            {/* 2. Main content (MessageUsersList + Chat Window) */}
            <main className="flex-1 flex flex-col">
              {children}
            </main>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
