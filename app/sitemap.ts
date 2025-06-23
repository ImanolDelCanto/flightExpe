import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://experienciasaereas.com.ar"
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Secciones principales con keywords optimizadas
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
      // Información adicional para SEO
      alternates: {
        languages: {
          'es-AR': `${baseUrl}/#about`,
        },
      },
    },
    {
      url: `${baseUrl}/#service`, // Corregido: service en lugar de services
      lastModified: currentDate,
      changeFrequency: "weekly", // Más frecuente para sección de servicios
      priority: 0.9, // Alta prioridad para "piloto por un día" y "vuelos bautismo"
      alternates: {
        languages: {
          'es-AR': `${baseUrl}/#service`,
        },
      },
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85, // Alta prioridad para experiencias
      alternates: {
        languages: {
          'es-AR': `${baseUrl}/#experience`,
        },
      },
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly", // Más frecuente si se actualizan fotos regularmente
      priority: 0.7,
      alternates: {
        languages: {
          'es-AR': `${baseUrl}/#gallery`,
        },
      },
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          'es-AR': `${baseUrl}/#faq`,
        },
      },
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85, // Alta prioridad para conversiones
      alternates: {
        languages: {
          'es-AR': `${baseUrl}/#contact`,
        },
      },
    },
  ]
}