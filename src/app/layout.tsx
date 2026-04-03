import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, Roboto_Mono } from "next/font/google";
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
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export const metadata: Metadata = {
  title: "Bridge — Driving School Software for Indian Motor Training Schools",
  description:
    "Driving school management software built for India. Aadhaar KYC admissions, WhatsApp lead recovery, Sarathi auto-fill, fleet tracking. Start free.",
  metadataBase: new URL("https://bridgedrive.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bridge — Driving School Software for Indian Motor Training Schools",
    description:
      "Driving school management software built for India. Aadhaar KYC admissions, WhatsApp lead recovery, Sarathi auto-fill, fleet tracking.",
    url: "https://bridgedrive.in",
    siteName: "Bridge",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Bridge — Driving School Software for Indian Motor Training Schools",
    description:
      "Driving school management software built for India. Aadhaar KYC admissions, WhatsApp lead recovery, Sarathi auto-fill, fleet tracking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} ${robotoMono.variable} antialiased overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
