import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Bridge — Modern Software for Indian Driving Schools",
  description:
    "Replace your legacy driving school software. 5-minute admissions with Aadhaar KYC, WhatsApp lead recovery, automated upsells, and Sarathi auto-fill.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased mx-auto max-w-7xl px-6 overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
