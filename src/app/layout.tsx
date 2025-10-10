import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/user/Navbar";
import Layout from "@/components/layouts/user/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website",
  description: "Welcome to My Website!",
  openGraph: {
    title: "My Website",
    description: "Welcome to My Website!",
    url: "https://jananayagan.vercel.app/",
    siteName: "My Website",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        width: 1200,
        height: 630,
        alt: "My Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Website",
    description: "Welcome to My Website!",
    images: ["https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"],
  },
};

type Props = {
  children?: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<Props>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
          {children}
        <Layout />
      </body>
    </html>
  );
}
