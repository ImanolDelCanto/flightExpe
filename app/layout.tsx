import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Experiencias Aereas",
  description:
    "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo en Buenos Aires. Clases de vuelo, vuelos panorámicos y experiencias únicas.",
  keywords: [
    "vuelo bautismo",
    "experiencia de vuelo",
    "piloto por un día",
    "vuelos panorámicos",
    "Buenos Aires",
    "clases de vuelo",
  ],
  openGraph: {
    title: "Vuelos Bautismo | Experiencia única de vuelo",
    description: "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vuelos Bautismo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vuelos Bautismo | Experiencia única de vuelo",
    description: "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo",
    images: ["/media/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <WhatsAppButton/>
      </body>
    </html>
  );
}
