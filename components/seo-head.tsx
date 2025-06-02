import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}

export function SEOHead({
  title = "Experiencias Aéreas | Vuelos Bautismo y Panorámicos en Buenos Aires",
  description = "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo en Buenos Aires. Vuelos panorámicos y experiencias únicas desde el aeropuerto de Morón.",
  keywords = [],
  image = "/media/og-image.jpg",
  url = "https://experienciasaereas.com.ar",
}: SEOHeadProps) {
  const defaultKeywords = [
    "vuelo bautismo",
    "experiencias aéreas",
    "piloto por un día",
    "vuelos panorámicos",
    "Buenos Aires",
    "Morón",
    "clases de vuelo",
  ]

  const allKeywords = [...defaultKeywords, ...keywords]

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <meta name="author" content="Experiencias Aéreas" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Experiencias Aéreas" />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="AR-B" />
      <meta name="geo.placename" content="Buenos Aires, Argentina" />
      <meta name="geo.position" content="-34.6037;-58.3816" />
      <meta name="ICBM" content="-34.6037, -58.3816" />

      {/* Business Information */}
      <meta property="business:contact_data:street_address" content="500 Av. Figueroa Alcorta" />
      <meta property="business:contact_data:locality" content="Morón" />
      <meta property="business:contact_data:region" content="Buenos Aires" />
      <meta property="business:contact_data:postal_code" content="1708" />
      <meta property="business:contact_data:country_name" content="Argentina" />
      <meta property="business:contact_data:phone_number" content="+54 9 11-7121-0438" />
      <meta property="business:contact_data:email" content="vuelosdebautismos@gmail.com" />
    </Head>
  )
}
