import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "رزرو نوبت دندانپزشکی",
  description: "رزرو آنلاین نوبت دندانپزشکی با پرداخت دیپازیت",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, title: "نوبت‌دندان", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="flex items-center justify-between p-4">
          <a href="/" className="text-xl font-bold text-sky-600">نوبت‌دندان</a>
          <ThemeToggle />
        </header>
        <main className="flex-1">{children}</main>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js'))}`,
          }}
        />
      </body>
    </html>
  );
}