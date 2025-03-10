"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plane } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay?: number
}

function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}

export function Service() {
  return (
    <div id="services" className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Vuelo Bautismo",
              description: "Primera experiencia de vuelo en un entorno seguro y controlado",
              icon: <Plane className="w-12 h-12 text-blue-600" />,
            },
            {
              title: "Piloto por un Día",
              description: "Toma el control y vive la experiencia de ser piloto",
              icon: <Plane className="w-12 h-12 text-blue-600" />,
            },
            {
              title: "Vuelo Panorámico",
              description: "Disfruta de las mejores vistas de Buenos Aires desde el aire",
              icon: <Plane className="w-12 h-12 text-blue-600" />,
            },
          ].map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

