import Main from "@/components/main"
import { jsonLd, localBusinessSchema } from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experiencias Aéreas | Vuelos Bautismo y Panorámicos en Buenos Aires",
  description:
    "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo en Buenos Aires. Vuelos panorámicos, clases de vuelo y experiencias únicas desde el aeropuerto de Morón. ¡El regalo perfecto!",
  keywords: [
    "vuelo bautismo Buenos Aires",
    "experiencias aéreas Morón",
    "piloto por un día Argentina",
    "vuelos panorámicos Buenos Aires",
    "clases de vuelo",
    "experiencias de vuelo",
    "regalos experiencias aéreas",
    "turismo aéreo Buenos Aires",
  ],
  openGraph: {
    title: "Experiencias Aéreas | Vuelos Bautismo en Buenos Aires",
    description:
      "Vive la experiencia de ser piloto por un día. Vuelos bautismo y panorámicos desde el aeropuerto de Morón.",
    url: "https://experienciasaereas.com.ar",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Experiencias Aéreas - Vuelos Bautismo en Buenos Aires",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Main />
    </>
  )
}
