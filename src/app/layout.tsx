import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export const metadata: Metadata = {
  title: "Bridge — Driving School Software for India",
  description:
    "Driving school software built for India. Aadhaar KYC admissions, WhatsApp follow-ups, Sarathi auto-fill, fleet tracking.",
  metadataBase: new URL("https://bridgedrive.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bridge — Driving School Software for India",
    description:
      "Driving school software built for India. Aadhaar KYC admissions, WhatsApp follow-ups, Sarathi auto-fill, fleet tracking.",
    url: "https://bridgedrive.in",
    siteName: "Bridge",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Bridge — Driving School Software for India",
    description:
      "Driving school software built for India. Aadhaar KYC admissions, WhatsApp follow-ups, Sarathi auto-fill, fleet tracking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WTX2V8T9');`}</Script>
      </head>
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} ${robotoMono.variable} antialiased overflow-x-clip`}
      >
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTX2V8T9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
