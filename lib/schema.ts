export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://experienciasaereas.com.ar/#organization",
      name: "Experiencias Aéreas",
      url: "https://experienciasaereas.com.ar",
      logo: {
        "@type": "ImageObject",
        url: "https://experienciasaereas.com.ar/media/icono.png",
        width: 300,
        height: 300,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+54-9-11-7121-0438",
        contactType: "customer service",
        availableLanguage: "Spanish",
        areaServed: "AR",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "500 Av. Figueroa Alcorta",
        addressLocality: "Morón",
        addressRegion: "Buenos Aires",
        postalCode: "1708",
        addressCountry: "AR",
      },
      sameAs: ["https://www.instagram.com/experiencias_aereas/", "https://wa.me/+5491171210438"],
    },
    {
      "@type": "WebSite",
      "@id": "https://experienciasaereas.com.ar/#website",
      url: "https://experienciasaereas.com.ar",
      name: "Experiencias Aéreas",
      description: "Vuelos bautismo y experiencias aéreas en Buenos Aires",
      publisher: {
        "@id": "https://experienciasaereas.com.ar/#organization",
      },
      inLanguage: "es-AR",
    },
    {
      "@type": "WebPage",
      "@id": "https://experienciasaereas.com.ar/#webpage",
      url: "https://experienciasaereas.com.ar",
      name: "Experiencias Aéreas | Vuelos Bautismo y Panorámicos en Buenos Aires",
      isPartOf: {
        "@id": "https://experienciasaereas.com.ar/#website",
      },
      about: {
        "@id": "https://experienciasaereas.com.ar/#organization",
      },
      description:
        "Vive la experiencia de ser piloto por un día con nuestros vuelos bautismo en Buenos Aires. Vuelos panorámicos y experiencias únicas desde el aeropuerto de Morón.",
      inLanguage: "es-AR",
    },
    {
      "@type": "TouristAttraction",
      "@id": "https://experienciasaereas.com.ar/#service",
      name: "Vuelos Bautismo - Experiencias Aéreas",
      description:
        "Experiencias de vuelo únicas donde puedes ser piloto por un día. Vuelos bautismo y panorámicos sobre Buenos Aires.",
      url: "https://experienciasaereas.com.ar",
      image: [
        "https://experienciasaereas.com.ar/media/banner1.jpg",
        "https://experienciasaereas.com.ar/media/Avioneta.jpg",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "500 Av. Figueroa Alcorta",
        addressLocality: "Morón",
        addressRegion: "Buenos Aires",
        postalCode: "1708",
        addressCountry: "AR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -34.6037,
        longitude: -58.3816,
      },
      touristType: ["Adventure Seeker", "Experience Lover", "Aviation Enthusiast"],
    },
    {
      "@type": "Service",
      "@id": "https://experienciasaereas.com.ar/#flight-service",
      name: "Vuelo Bautismo",
      description:
        "Experiencia única de vuelo donde puedes tomar los controles de una aeronave bajo supervisión profesional.",
      provider: {
        "@id": "https://experienciasaereas.com.ar/#organization",
      },
      areaServed: {
        "@type": "Place",
        name: "Buenos Aires, Argentina",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Experiencias de Vuelo",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vuelo Bautismo - Piloto por un Día",
              description:
                "Experiencia completa donde aprendes los principios básicos del vuelo y tomas los controles de la aeronave.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vuelo Panorámico",
              description: "Disfruta de vistas espectaculares de Buenos Aires desde las alturas.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://experienciasaereas.com.ar/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué tipos de experiencias aéreas ofrecen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ofrecemos experiencias únicas, como vuelos panorámicos sobre paisajes increíbles y la oportunidad de ser Piloto por un Día, donde puedes tomar el control de una aeronave bajo la supervisión de un instructor.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito experiencia previa para participar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, nuestras experiencias están diseñadas para todo el público. Si eliges la opción Piloto por un Día, recibirás una instrucción previa y estarás acompañado por un piloto profesional en todo momento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto dura cada experiencia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vuelos panorámicos: Generalmente entre 30 y 60 minutos, dependiendo de la ruta elegida. Piloto por un Día: Puede durar entre 1 y 2 horas, incluyendo la instrucción en tierra y el vuelo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Desde qué aeropuertos o pistas operan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuestras experiencias parten desde el aeropuerto de Morón.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://experienciasaereas.com.ar/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://experienciasaereas.com.ar",
        },
      ],
    },
  ],
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Experiencias Aéreas",
  image: [
    "https://experienciasaereas.com.ar/media/banner1.jpg",
    "https://experienciasaereas.com.ar/media/Avioneta.jpg",
    "https://experienciasaereas.com.ar/media/icono.png",
  ],
  "@id": "https://experienciasaereas.com.ar",
  url: "https://experienciasaereas.com.ar",
  telephone: "+54-9-11-7121-0438",
  email: "vuelosdebautismos@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "500 Av. Figueroa Alcorta",
    addressLocality: "Morón",
    addressRegion: "Buenos Aires",
    postalCode: "1708",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://www.instagram.com/experiencias_aereas/", "https://wa.me/+5491171210438"],
  priceRange: "$$",
  servesCuisine: [],
  hasMap: "https://maps.app.goo.gl/yhuFxBBZnNBRhTLi9",
}
