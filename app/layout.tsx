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
    default: "Piloto por un Día | Vuelos Bautismo en Buenos Aires - Experiencias Aéreas",
    template: "%s | Experiencias Aéreas - Piloto por un Día",
  },
  description:
    "🛩️ Sé piloto por un día con nuestros vuelos bautismo en Buenos Aires. Vuelos panorámicos únicos desde el Aeropuerto de Morón. Experiencia de copiloto, clases de vuelo y el regalo perfecto para amantes de la aventura aérea. ¡Reservá tu vuelo bautismo ahora!",
  keywords: [
    // Keywords principales optimizadas
    "piloto por un día Buenos Aires",
    "vuelos bautismo Argentina",
    "copiloto por un día",
    "experiencia piloto Buenos Aires",
    "vuelo bautismo Morón",
    "ser piloto por un día Argentina",
    
    // Keywords de cola larga específicas
    "vuelos bautismo avioneta Buenos Aires",
    "experiencia copiloto avión Argentina", 
    "clases de vuelo para principiantes",
    "vuelos panorámicos desde Morón",
    "regalo experiencia vuelo Buenos Aires",
    "bautismo de vuelo en avioneta",
    
    // Keywords relacionadas con la ubicación
    "vuelos bautismo aeropuerto Morón",
    "escuela de vuelo Buenos Aires",
    "experiencias aéreas zona oeste",
    "turismo aéreo Buenos Aires",
    
    // Keywords de intención comercial
    "regalar vuelo bautismo",
    "experiencias únicas Buenos Aires",
    "aventura aérea Argentina",
    "primer vuelo como piloto",
    "curso piloto principiante",
    "vuelos recreativos Buenos Aires"
  ],
  authors: [{ name: "Experiencias Aéreas - Piloto por un Día" }],
  creator: "Experiencias Aéreas",
  publisher: "Experiencias Aéreas - Vuelos Bautismo",
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
    title: "Piloto por un Día | Vuelos Bautismo Buenos Aires - Experiencias Aéreas",
    description:
      "Cumplí tu sueño de ser piloto por un día. Vuelos bautismo únicos en Buenos Aires desde el Aeropuerto de Morón. Experiencia de copiloto segura y emocionante. ¡El regalo perfecto para aventureros!",
    siteName: "Experiencias Aéreas - Piloto por un Día",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Piloto por un día - Vuelos Bautismo en Buenos Aires desde Aeropuerto de Morón",
        type: "image/jpeg",
      },
      {
        url: "/media/banner1.webp",
        width: 1200,
        height: 630,
        alt: "Experiencia de copiloto - Vuelo bautismo panorámico sobre Buenos Aires",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🛩️ Piloto por un Día | Vuelos Bautismo Buenos Aires",
    description:
      "Sé piloto por un día con vuelos bautismo únicos en Buenos Aires. Experiencia de copiloto desde el Aeropuerto de Morón. ¡El regalo perfecto!",
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
  classification: "Experiencias Aéreas, Vuelos Bautismo y Turismo de Aventura",
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Morón, Buenos Aires",
    "geo.position": "-34.6037;-58.3816",
    ICBM: "-34.6037, -58.3816",
    // Datos estructurados adicionales para SEO local
    "business.type": "Aviation Training School",
    "business.category": "Flight Experience Provider",
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
        
        {/* Meta tags geográficos optimizados */}
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Morón, Buenos Aires, Argentina" />
        <meta name="geo.position" content="-34.6037;-58.3816" />
        <meta name="ICBM" content="-34.6037, -58.3816" />
        
        {/* Meta tags de idioma y distribución */}
        <meta name="language" content="Spanish" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Meta tags específicos para búsquedas locales */}
        <meta name="locality" content="Morón" />
        <meta name="region" content="Buenos Aires" />
        <meta name="country" content="Argentina" />
        
        {/* Datos de contacto del negocio optimizados */}
        <meta property="business:contact_data:street_address" content="500 Av. Figueroa Alcorta" />
        <meta property="business:contact_data:locality" content="Morón" />
        <meta property="business:contact_data:region" content="Buenos Aires" />
        <meta property="business:contact_data:postal_code" content="1708" />
        <meta property="business:contact_data:country_name" content="Argentina" />
        <meta property="business:contact_data:phone_number" content="+54 9 11-7121-0438" />
        <meta property="business:contact_data:email" content="experienciasaereas1@gmail.com" />
        
        {/* Meta tags adicionales para SEO de experiencias */}
        <meta name="category" content="Experiencias Aéreas, Vuelos Bautismo, Piloto por un Día" />
        <meta name="coverage" content="Buenos Aires, Argentina" />
        <meta name="target" content="Turistas, Aventureros, Regalos de Experiencias" />
        
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon optimizado */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}