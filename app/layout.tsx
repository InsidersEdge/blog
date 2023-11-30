import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { NavigationBar } from "@/components/navigation";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insiders Edge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "bg-white dark:bg-[#313333]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="insiders-edge-theme"
        >
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
