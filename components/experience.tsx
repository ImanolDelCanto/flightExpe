"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plane } from "lucide-react"

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-gray-50 dark:bg-gray-900"
      id="experience"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          ¿Qué incluyen las experiencias aéreas?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 rounded-lg bg-blue-500/20 blur-md"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <Image
              height={1000}
              width={1000}
              src="/media/Avioneta.jpg"
              alt="Vuelo Bautismo"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover relative z-10 transition-all duration-300"
            />

            {/* Decorative elements that appear on hover */}
            <motion.div
              className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
            >
              <Plane className="w-6 h-6 text-white drop-shadow-md" />
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: -15 }}
            >
              <Plane className="w-5 h-5 text-white drop-shadow-md" />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: {
                  rotate: { repeat: Number.POSITIVE_INFINITY, duration: 1.5 },
                  scale: { duration: 0.2 },
                },
              }}
              className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-20"
            >
              <Plane className="w-8 h-8" />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Recepción y Bienvenida",
                description: "Charla introductoria y explicación básica sobre el vuelo",
              },
              {
                title: "Briefing Pre Vuelo",
                description: "Información detallada del recorrido y normas de seguridad",
              },
              {
                title: "Equipo y Preparativos",
                description: "Entrega de auriculares y explicación de procedimientos",
              },
              {
                title: "Inspección de la Aeronave",
                description: "Revisión completa del avión junto al piloto",
              },
              {
                title: "Recuerdo Especial",
                description: "Fotos y videos en calidad 4K + certificado de vuelo",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                  backgroundColor: "rgba(239, 246, 255, 1)",
                  transition: { duration: 0.2 },
                }}
                className="flex items-start gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <motion.div
                  className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full"
                  whileHover={{
                    backgroundColor: "#dbeafe",
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                  >
                    <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

