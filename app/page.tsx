import Main from "@/components/main"
import { jsonLd, localBusinessSchema } from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experiencias Aéreas | Piloto por un Día | Vuelos Bautismo Buenos Aires ",
  description:
    "Cumplí tu sueño de ser piloto por un día con nuestros vuelos bautismo en Buenos Aires. Experiencia única de copiloto desde el Aeropuerto de Morón. Vuelos panorámicos seguros, clases de vuelo para principiantes y el regalo perfecto para aventureros. ¡Reservá tu experiencia aérea ahora!",
  keywords: [
    // Keywords primarias con alta intención de búsqueda
    "piloto por un día Buenos Aires",
    "vuelos bautismo Buenos Aires",
    "copiloto por un día Argentina",
    "vuelo bautismo aeropuerto Morón",
    
    // Keywords de cola larga con alta conversión
    "ser piloto por un día experiencia",
    "vuelos bautismo avioneta Buenos Aires",
    "experiencia copiloto vuelo Buenos Aires",
    "primer vuelo como piloto Argentina",
    "clases de vuelo principiantes Morón",
    
    // Keywords de regalo y experiencias
    "regalar vuelo bautismo Buenos Aires",
    "experiencias únicas Buenos Aires",
    "regalo piloto por un día",
    "aventura aérea Buenos Aires",
    
    // Keywords geográficas específicas
    "vuelos panorámicos desde Morón",
    "escuela de vuelo zona oeste",
    "turismo aéreo Buenos Aires",
    "experiencias aéreas Morón",
  ],
  openGraph: {
    title: "🛩️ Piloto por un Día | Vuelos Bautismo Buenos Aires - Experiencias Aéreas",
    description:
      "Sé piloto por un día con vuelos bautismo únicos desde el Aeropuerto de Morón. Experiencia de copiloto segura y emocionante sobre Buenos Aires. ¡El regalo perfecto para aventureros!",
    url: "https://experienciasaereas.com.ar",
    type: "website",
    locale: "es_AR",
    siteName: "Experiencias Aéreas - Piloto por un Día",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Piloto por un día - Vuelos bautismo en Buenos Aires desde Aeropuerto de Morón",
        type: "image/jpeg",
      },
      {
        url: "/media/banner1.webp", 
        width: 1200,
        height: 630,
        alt: "Experiencia de copiloto - Vista panorámica de Buenos Aires desde avioneta",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piloto por un Día | Vuelos Bautismo Buenos Aires",
    description:
      "Cumplí tu sueño de ser piloto por un día. Vuelos bautismo desde Aeropuerto de Morón. Experiencia única de copiloto sobre Buenos Aires.",
    images: ["/media/og-image.jpg"],
    creator: "@experiencias_aereas",
  },
  // Datos estructurados adicionales
  other: {
    "article:author": "Experiencias Aéreas",
    "article:section": "Turismo de Aventura",
    "article:tag": "piloto por un día, vuelos bautismo, experiencias aéreas, Buenos Aires, Morón",
  },
  // Metadatos específicos para búsqueda local
  alternates: {
    canonical: "https://experienciasaereas.com.ar",
    languages: {
      "es-AR": "https://experienciasaereas.com.ar",
    },
  },
}

export default function Home() {
  // Schema markup optimizado para SEO
  const enhancedJsonLd = {
    ...jsonLd,
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristAttraction", "EducationalOrganization"],
    "name": "Experiencias Aéreas - Piloto por un Día",
    "description": "Experiencias únicas de vuelos bautismo en Buenos Aires. Sé piloto por un día desde el Aeropuerto de Morón.",
    "serviceType": [
      "Vuelos Bautismo",
      "Piloto por un Día", 
      "Experiencias Aéreas",
      "Clases de Vuelo",
      "Vuelos Panorámicos"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Buenos Aires, Argentina",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -34.6037,
        "longitude": -58.3816
      }
    },
    "offers": {
      "@type": "Offer",
      "name": "Experiencia Piloto por un Día",
      "description": "Vuelo bautismo completo con experiencia de copiloto",
      "category": "Experiencias Aéreas"
    }
  }

  const enhancedLocalBusinessSchema = {
    ...localBusinessSchema,
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Experiencias Aéreas - Piloto por un Día",
    "alternateName": ["Vuelos Bautismo Buenos Aires", "Piloto por un Día Morón"],
    "description": "Escuela de vuelo y experiencias aéreas. Vuelos bautismo desde el Aeropuerto de Morón.",
    "knowsAbout": [
      "Vuelos Bautismo",
      "Piloto por un Día",
      "Experiencias Aéreas", 
      "Clases de Vuelo",
      "Turismo Aéreo"
    ],
    "serviceArea": {
      "@type": "Place", 
      "name": "Buenos Aires y Gran Buenos Aires, Argentina"
    }
  }

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedJsonLd) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedLocalBusinessSchema) }} 
      />
      <Main />
    </>
  )
}