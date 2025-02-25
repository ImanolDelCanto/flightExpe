export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vuelos Bautismo",
  image: "/media/og-image.jpg",
  description: "Experiencias de vuelo y vuelos bautismo en Buenos Aires. Vive la emoción de ser piloto por un día.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Figueroa Alcorta 500",
    addressLocality: "Moron",
    addressRegion: "Buenos Aires",
    postalCode: "B1712",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.661913,
    longitude: -58.643101,
  },
  url: "https://vuelosbautismo.com.ar",
  telephone: "+5491171210438",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
}

