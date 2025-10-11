import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "hiromps - AI自動化エンジニア",
  description: "iPhoneマクロを活用したSNS自動化とPWA開発を専門とするAI自動化エンジニア。Instagram自動化、SNSマーケティングプラットフォーム、中小企業診断士向け学習支援アプリの開発。",
  keywords: "hiromps, AI自動化, iPhone自動化, SNS自動化, Instagram自動化, PWA開発, 中小企業診断士, Web開発",
  authors: [{ name: "hiromps" }],
  creator: "hiromps",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hiromps.dev",
    title: "hiromps - AI自動化エンジニア",
    description: "iPhoneマクロを活用したSNS自動化とPWA開発を専門とするAI自動化エンジニア",
    siteName: "hiromps Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "hiromps - AI自動化エンジニア",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hiromps - AI自動化エンジニア",
    description: "iPhoneマクロを活用したSNS自動化とPWA開発を専門とするAI自動化エンジニア",
    creator: "@hiromps_dev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}