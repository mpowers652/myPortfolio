import type React from "react"
import "./globals.css"
import { Inter, Sora, Orbitron } from "next/font/google"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import CustomCursor from "@/components/CustomCursor/CustomCursor"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stephen - Full Stack Developer | Portfolio",
  description:
    "Stephen is a .NET Full Stack Developer building modern web apps with Next.js, React, TypeScript, and Azure. Check portfolio projects, experience, and contact information.",
  keywords: [
    "Stephen",
    ".NET Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Azure",
    "Portfolio",
  ],
  metadataBase: new URL("https://appflow-theta.vercel.app/"),
  openGraph: {
    title: "Stephen - Full Stack Developer | Portfolio",
    description:
      "Stephen is a Full Stack Developer building modern web apps with Next.js, React, TypeScript, and Azure.",
    url: "https://appflow-theta.vercel.app/",
    siteName: "Stephen Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://appflow-theta.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stephen Portfolio Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen - Full Stack Developer | Portfolio",
    description:
      "Discover Stephen's web development portfolio featuring Next.js, React, and Azure projects.",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  generator: "v0.dev",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${orbitron.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>
        {/* Only render CustomCursor on client-side */}
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}