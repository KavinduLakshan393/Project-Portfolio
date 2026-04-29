import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavindu Lakshan | Web Developer & Game Developer",
  description:
    "Portfolio of Kavindu Lakshan, showcasing web development, game development, UI engineering, and software projects.",
  keywords: [
    "Kavindu Lakshan",
    "Web Developer",
    "Game Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Portfolio",
  ],
  authors: [{ name: "Kavindu Lakshan" }],
  openGraph: {
    title: "Kavindu Lakshan | Web Developer & Game Developer",
    description:
      "A portfolio showcasing web development, game development, and interactive software projects.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0e0e0e] text-[#e5e2e1] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
