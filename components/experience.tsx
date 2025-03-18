"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plane, Check } from "lucide-react"

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
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="experience"
    >
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white relative z-10">
            ✈️ ¿Qué incluyen nuestras experiencias aéreas?
          </h2>
          <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
            <Plane className="w-32 h-32 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column - Image */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="lg:sticky lg:top-24">
              <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <Image
                  height={1000}
                  width={1000}
                  src="/media/Avioneta.jpg"
                  alt="Vuelo Bautismo"
                  className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-bold">Experiencia de vuelo única</h3>
                  <p className="text-white/80 mt-2">Vive la aventura de los cielos con nosotros</p>
                </div>
              </div>

              <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">Reserva tu experiencia</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Todas nuestras experiencias están diseñadas para brindarte momentos inolvidables en el aire.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Reservar ahora
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right column - Features list */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Briefing previo al vuelo",
                  description: "Explicación de seguridad y principios básicos de vuelo.",
                  delay: 0.1,
                },
                {
                  title: "Experiencia 'Piloto por un día'",
                  description: "Oportunidad de tomar los controles bajo supervisión.",
                  delay: 0.2,
                },
                {
                  title: "Vuelos panorámicos",
                  description: "Recorridos sobre paisajes increíbles.",
                  delay: 0.3,
                },
                {
                  title: "Pilotos certificados",
                  description: "Profesionales con experiencia garantizan un vuelo seguro.",
                  delay: 0.4,
                },
                {
                  title: "Fotos y videos en 4K",
                  description: "Captura cada momento con una cámara GoPro en cabina.",
                  delay: 0.5,
                },
                {
                  title: "Certificado de participación",
                  description: "Recuerdo especial de tu experiencia en los cielos.",
                  delay: 0.6,
                },
                {
                  title: "Auriculares con comunicación",
                  description: "Vive la experiencia como un verdadero piloto.",
                  delay: 0.7,
                },
                {
                  title: "Explicación de instrumentos",
                  description: "Conoce cómo funciona el panel de control.",
                  delay: 0.8,
                },
                {
                  title: "Oportunidad de elegir la ruta",
                  description: "En algunos vuelos, puedes personalizar el recorrido.",
                  delay: 0.9,
                },
                {
                  title: "Para todas las edades",
                  description: "No necesitas experiencia previa, solo ganas de volar.",
                  delay: 1.0,
                },
                {
                  title: "Ambiente exclusivo y seguro",
                  description: "Operaciones en aeródromos certificados.",
                  delay: 1.1,
                },
                {
                  title: "Acceso a zonas restringidas",
                  description: "Descubre el mundo de la aviación desde adentro.",
                  delay: 1.2,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-full flex-shrink-0">
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special features with more emphasis */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-800/30"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-full">
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                        Posibilidad de volar con acompañante
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Comparte la experiencia con alguien especial (según disponibilidad).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-full">
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">Boarding pass con código QR</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        Recibe un pase especial que simula un ticket de avión con tu nombre, fecha, hora y tipo de
                        vuelo.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        El código QR te permite acceder a todas las fotos y videos en alta calidad de la experiencia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

