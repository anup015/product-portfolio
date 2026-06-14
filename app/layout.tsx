import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anup Thakre | Product Builder & HCI Engineer",
  description: "Personal portfolio of Anup Thakre - a product-minded builder at the intersection of AI, technology, and human-centered design. B.Tech CSE Student at IIIT Nagpur, Specialization in Human Computer Interaction, SIH 2025 National Winner.",
  keywords: ["Anup Thakre", "Product Management", "AI Products", "Human Computer Interaction", "Software Development", "SIH 2025 Winner", "IIIT Nagpur"],
  authors: [{ name: "Anup Thakre" }],
  openGraph: {
    title: "Anup Thakre | Product Builder & HCI Engineer",
    description: "Product-minded builder who combines technology, design, AI, systems thinking, and execution.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${lora.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBE2] text-[#0A1128]">
        {children}
      </body>
    </html>
  );
}


