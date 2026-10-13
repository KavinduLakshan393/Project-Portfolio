import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StudioHeader, StudioFooter } from "@/components/layout/StudioShell";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Kavindu Lakshan — Creative Developer", template: "%s | Kavindu Lakshan" },
  description: "Kavindu Lakshan is a developer in Sri Lanka building web apps, mobile products and interactive game experiences. Explore real projects and case studies.",
  keywords: ["Kavindu Lakshan", "Creative Developer", "Next.js", "TypeScript", "Flutter", "Unity", "Portfolio"],
  authors: [{ name: "Kavindu Lakshan" }],
  openGraph: {
    title: "Kavindu Lakshan — Ideas Into Impact",
    description: "Web applications, mobile experiences and playable worlds. Designed with intent. Built with code.",
    type: "website",
  },
};
export const viewport: Viewport = { themeColor: "#131311" };

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable + " " + geistMono.variable + " antialiased"}>
        <a href="#main-content" className="studio-skip">Skip to content</a>
        <StudioHeader />
        <div id="main-content">{children}</div>
        <StudioFooter />
      </body>
    </html>
  );
}
