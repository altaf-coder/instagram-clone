import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/hooks/SessionWrapper";
import LeftSideBarMessage from "@/components/ui/LeftSideBarMessage";
import { ThemeProvider } from "@/components/theme-provider";
import MobileBottomNav from "@/components/ui/MobileBottomNav";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <SessionWrapper>
            <div className="flex h-[100dvh] w-full bg-background overflow-hidden">
              <div className="hidden lg:block w-16 border-r border-border">
                <LeftSideBarMessage />
              </div>

              {/* 2. Main content (MessageUsersList + Chat Window) */}
              <main className="flex-1 flex flex-col min-w-0 min-h-0">
                {children}
              </main>
            </div>
            {/* Mobile Bottom Navigation */}
            <MobileBottomNav />
          </SessionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
