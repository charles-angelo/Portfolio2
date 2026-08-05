import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cabc.vercel.app/"),
  title: "Charles Angelo | Web Developer",
  description: "Portfolio of Charles Angelo B. Cuizon, a Full Stack Web Developer specializing in high-performance scalable web applications using React, Laravel, and MySQL.",
  keywords: ["Charles Angelo B. Cuizon", "Full Stack Developer", "Web Developer", "ReactJS", "Laravel", "PHP", "MySQL", "Frontend Developer", "Backend Developer", "Software Engineer", "Portfolio"],
  authors: [{ name: "Charles Angelo B. Cuizon" }],
  openGraph: {
    type: "website",
    url: "https://cabc.vercel.app/",
    title: "Charles Angelo | Web Developer",
    description: "Portfolio of Charles Angelo B. Cuizon, a Full Stack Web Developer specializing in high-performance scalable web applications using React, Laravel, and MySQL.",
    siteName: "Charles Angelo Portfolio",
    images: [
      {
        url: "https://cabc.vercel.app/img/og-banner.png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Angelo | Web Developer",
    description: "Portfolio of Charles Angelo B. Cuizon, a Full Stack Web Developer specializing in high-performance scalable web applications using React, Laravel, and MySQL.",
    images: ["https://cabc.vercel.app/img/og-banner.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg-light dark:bg-bg-dark text-slate-700 dark:text-slate-300 font-sans transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
