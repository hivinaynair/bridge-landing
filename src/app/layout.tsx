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
  title: "Bridge — Smart Software for Indian Driving Schools",
  description:
    "Replace your legacy driving school software. 3-minute admissions with Aadhaar KYC, WhatsApp lead recovery, automated upsells, and Sarathi auto-fill.",
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
