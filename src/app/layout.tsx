import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="GTM-WTX2V8T9" />

      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} ${robotoMono.variable} antialiased overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
