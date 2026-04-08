import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://swaritsheel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Swarit Sheel | Computer Engineering @ UIUC",
    template: "%s | Swarit Sheel",
  },
  description:
    "Portfolio of Swarit Sheel — computer engineering student at UIUC. Projects in embedded systems, software, and entrepreneurship.",
  authors: [{ name: "Swarit Sheel" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Swarit Sheel",
    title: "Swarit Sheel | Computer Engineering @ UIUC",
    description:
      "Portfolio of Swarit Sheel — computer engineering student at UIUC. Projects in embedded systems, software, and entrepreneurship.",
  },
  twitter: {
    card: "summary",
    title: "Swarit Sheel | Computer Engineering @ UIUC",
    description:
      "Portfolio of Swarit Sheel — computer engineering student at UIUC.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="flex min-h-full flex-col font-body">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
