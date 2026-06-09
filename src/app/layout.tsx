import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/user/Navbar";
import Layout from "@/components/layouts/user/Layout";
import { Providers } from "@/lib/providers";
import { QueryProvider } from "@/lib/QueryProvider";
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TVK CUP 2026",
  description: "Discover TVK CUP - Premium branded cups featuring the exclusive TVK logo. High-quality merchandise for brand enthusiasts and collectors.",
  keywords: ["TVK", "TVK CUP", "Tamilaga Vettri Kazhagam", "Vijay", "CM", "branded cup", "merchandise", "TVK logo", "premium", "collectibles", "gift item", "TVK merchandise"],
  icons: {
    icon: [
      { url: '/3.png', sizes: '48x48', type: 'image/png' },
      { url: '/3.png', sizes: '96x96', type: 'image/png' },
      { url: '/3.png', sizes: '128x128', type: 'image/png' },
    ],
    shortcut: '/3.png',
    apple: { url: '/3.png', sizes: '180x180', type: 'image/png' },
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
      <head>
        <link rel="icon" href="/3.png" sizes="any" />
        <link rel="icon" href="/3.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/3.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/3.png" type="image/png" sizes="128x128" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000] mx-auto`}
      >
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SYKM675PL1" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SYKM675PL1');`}
        </Script>
        <Providers>
          <QueryProvider>
            {/* <div className="site-marquee" aria-hidden="true">
              <div className="site-marquee__inner">If you booked on or before 10 December 2025 and your details are not listed, please WhatsApp your payment receipt and address details to our number at <a href="https://wa.me/918903301652" className="underline">8903301652</a> to get added.                           10 டிசம்பர் 2025 அன்று அல்லது அதற்கு முன் நீங்கள் முன்பதிவு செய்து, உங்கள் விவரங்கள் பட்டியலில் இல்லையெனில், தயவுசெய்து உங்கள் கட்டண ரசீது மற்றும் முகவரி விவரங்களை எங்கள் எண்ணிற்கு WhatsApp மூலம் அனுப்பவும்.</div>
            </div> */}
            <Navbar />
            {children}
            <Layout />
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
