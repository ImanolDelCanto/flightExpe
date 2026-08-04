"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plane, Video, Ticket, Map, Leaf, MessageCircle } from "lucide-react"

// Función para scroll suave
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const offsetTop = element.offsetTop - 100 // Ajuste para el navbar fijo
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

const ITINERARIO = [
  {
    titulo: "Check-in y Bienvenida",
    detalle:
      "Presentación en el Aeropuerto de Morón, entrega de tu Boarding Pass y charla previa de seguridad con la tripulación.",
  },
  {
    titulo: "Vuelo Panorámico",
    detalle:
      "Despegue con vistas espectaculares de la ciudad, el Delta y el Río de la Plata mientras grabamos tu experiencia en GoPro.",
  },
  {
    titulo: "Aterrizaje y Tour por la Isla",
    detalle: "Toque de tierra en la pista de Martín García y recorrido guiado por los puntos emblemáticos de la isla.",
  },
  {
    titulo: "Tiempo Libre",
    detalle:
      "Pasá el día en la isla a tu ritmo: ideal para recorrer la reserva, sacar fotos y almorzar en los restaurantes locales.",
  },
  {
    titulo: "Vuelo de Regreso y Certificado",
    detalle: "Despegue de vuelta hacia Morón y entrega de tu Certificado de Vuelo como recuerdo de la experiencia.",
  },
]

const INCLUYE = [
  {
    icono: Plane,
    titulo: "Vuelo de Experiencia",
    detalle: "Ida y vuelta desde el Aeropuerto de Morón.",
  },
  {
    icono: Video,
    titulo: "Recuerdo HD Incluido",
    detalle: "Grabación de tu vuelo con cámara GoPro y fotos en alta calidad de tu aventura.",
  },
  {
    icono: Ticket,
    titulo: "Kit de Vuelo",
    detalle: "Tu propio Boarding Pass personalizado y Certificado de Vuelo al finalizar.",
  },
  {
    icono: Map,
    titulo: "Tour por la Isla",
    detalle: "Recorrido guiado para descubrir la historia, el antiguo penal, el faro y la reserva natural.",
  },
  {
    icono: Leaf,
    titulo: "Día Completo en la Isla",
    detalle: "Tiempo libre para caminar, relajarte y almorzar en los comedores locales a tu gusto.",
  },
]

export function Isla() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleReservarClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    smoothScrollTo("contact")
  }

  return (
    <div ref={ref} className="container mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
      >
        <span className="inline-block text-sm font-semibold tracking-wide uppercase text-blue-600 mb-3">
          Experiencia de día completo
        </span>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Volá a la Isla Martín García
        </h2>
        <p className="text-muted-foreground">
          Despegá desde el Aeropuerto de Morón en un vuelo panorámico exclusivo sobrevolando los paisajes increíbles del
          Delta y el Río de la Plata. Al aterrizar en la Isla Martín García te espera una jornada completa de
          exploración, historia y naturaleza para disfrutar a tu propio ritmo antes de emprender el vuelo de regreso.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Itinerario */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-8">Itinerario</h3>
          <ol className="relative space-y-8">
            {ITINERARIO.map((paso, i) => (
              <li key={paso.titulo} className="relative flex gap-4">
                {/* Línea que une los pasos, salvo en el último */}
                {i < ITINERARIO.length - 1 && (
                  <span className="absolute left-5 top-11 bottom-[-2rem] w-px bg-blue-200 dark:bg-blue-900" aria-hidden />
                )}
                <span className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h4 className="font-bold mb-1">{paso.titulo}</h4>
                  <p className="text-muted-foreground text-sm">{paso.detalle}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Qué incluye */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-8">¿Qué incluye esta experiencia?</h3>
          <ul className="space-y-5">
            {INCLUYE.map(({ icono: Icono, titulo, detalle }) => (
              <li key={titulo} className="flex gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Icono className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </span>
                <div className="pt-1">
                  <h4 className="font-bold mb-1">{titulo}</h4>
                  <p className="text-muted-foreground text-sm">{detalle}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-14 text-center"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-2">¡Reservá tu fecha!</h3>
        <p className="text-muted-foreground mb-6">
          Lugares limitados por fin de semana. Consultá disponibilidad y asegurá tu lugar.
        </p>
        <div className="flex flex-wrap w-full justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            onClick={handleReservarClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Reservar mi vuelo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/+5491171210438?text=¡Hola!%20Quiero%20consultar%20por%20el%20vuelo%20a%20la%20Isla%20Martín%20García."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar por WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
