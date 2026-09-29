import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cfstudio.in"),
  title: "CFStudio — Digital Marketing That Works | High-Performance Agency",
  description:
    "CFStudio is Kolkata's premier performance marketing, creative strategy & growth agency. We engineer hyper-profitable customer acquisition with Meta Ads, Google Ads, viral UGC, and conversion rate optimization.",
  keywords: [
    "Digital Marketing Agency Kolkata",
    "Performance Marketing India",
    "CFStudio",
    "Meta Ads Agency",
    "Google Ads Management",
    "D2C Growth Agency",
    "E-commerce Marketing",
    "Conversion Rate Optimization",
    "Creative Studio Kolkata"
  ],
  authors: [{ name: "CFStudio", url: "https://cfstudio.in" }],
  creator: "CFStudio",
  openGraph: {
    title: "CFStudio — Digital Marketing That Works",
    description: "Scale your revenue with predictable, high-ROAS performance marketing and viral creative funnels.",
    url: "https://cfstudio.in",
    siteName: "CFStudio",
    images: [
      {
        url: "/brand/cfstudio-brand-board.png",
        width: 1200,
        height: 630,
        alt: "CFStudio Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CFStudio — Digital Marketing That Works",
    description: "Scale your revenue with predictable, high-ROAS performance marketing and viral creative funnels.",
    images: ["/brand/cfstudio-brand-board.png"],
  },
  icons: {
    icon: "/brand/cf-icon-mark.png",
    shortcut: "/brand/cf-icon-mark.png",
    apple: "/brand/cf-icon-hd.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased selection:bg-brand-500 selection:text-white min-h-screen flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
