import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Amarilla — Full-Stack Developer",
  description:
    "Full-Stack Developer con experiencia en fintech. Next.js, React, TypeScript.",
  metadataBase: new URL("https://gaperalta.dev"),
  openGraph: {
    title: "Gabriel Amarilla — Full-Stack Developer",
    description:
      "Full-Stack Developer con experiencia en fintech y SaaS. Next.js, React, TypeScript.",
    url: "https://gaperalta.dev",
    siteName: "Gabriel Amarilla",
    locale: "es_PY",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Amarilla — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Amarilla — Full-Stack Developer",
    description:
      "Full-Stack Developer con experiencia en fintech y SaaS.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
