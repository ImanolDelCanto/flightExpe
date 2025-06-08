import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: {
    default: "Experiencias Aéreas | Vuelos Bautismo y Panorámicos en Buenos Aires",
    template: "%s | Experiencias Aéreas",
  },
  description:
    "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo en Buenos Aires. Vuelos panorámicos, clases de vuelo y experiencias únicas desde el aeropuerto de Morón. ¡El regalo perfecto para los amantes de la aventura!",
  keywords: [
    "vuelo bautismo",
    "experiencias aéreas",
    "piloto por un día",
    "vuelos panorámicos",
    "Buenos Aires",
    "Morón",
    "clases de vuelo",
    "experiencias de vuelo",
    "regalos experiencias",
    "vuelos en avioneta",
    "escuela de vuelo",
    "turismo aéreo",
    "aventura aérea",
    "experiencias únicas",
    "vuelos de bautismo",
    "aviación civil",
    "vuelos turísticos",
  ],
  authors: [{ name: "Experiencias Aéreas" }],
  creator: "Experiencias Aéreas",
  publisher: "Experiencias Aéreas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://experienciasaereas.com.ar"),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://experienciasaereas.com.ar",
    title: "Experiencias Aéreas | Vuelos Bautismo y Panorámicos en Buenos Aires",
    description:
      "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo en Buenos Aires. Vuelos panorámicos y experiencias únicas desde el aeropuerto de Morón.",
    siteName: "Experiencias Aéreas",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Experiencias Aéreas - Vuelos Bautismo en Buenos Aires",
        type: "image/jpeg",
      },
      {
        url: "/media/banner1.webp",
        width: 1200,
        height: 630,
        alt: "Vuelo panorámico sobre Buenos Aires",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiencias Aéreas | Vuelos Bautismo y Panorámicos",
    description:
      "Vive la experiencia de ser piloto por un día. Vuelos bautismo y panorámicos en Buenos Aires desde el aeropuerto de Morón.",
    images: ["/media/og-image.jpg"],
    creator: "@experiencias_aereas",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    
  },
  category: "travel",
  classification: "Experiencias Aéreas y Turismo",
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Buenos Aires",
    "geo.position": "-34.6037;-58.3816",
    ICBM: "-34.6037, -58.3816",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="canonical" href="https://experienciasaereas.com.ar" />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Buenos Aires, Argentina" />
        <meta name="geo.position" content="-34.6037;-58.3816" />
        <meta name="ICBM" content="-34.6037, -58.3816" />
        <meta name="language" content="Spanish" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta property="business:contact_data:street_address" content="500 Av. Figueroa Alcorta" />
        <meta property="business:contact_data:locality" content="Morón" />
        <meta property="business:contact_data:region" content="Buenos Aires" />
        <meta property="business:contact_data:postal_code" content="1708" />
        <meta property="business:contact_data:country_name" content="Argentina" />
        <meta property="business:contact_data:phone_number" content="+54 9 11-7121-0438" />
        <meta property="business:contact_data:email" content="vuelosdebautismos@gmail.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
