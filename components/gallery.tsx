"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Users } from "lucide-react"
import Image from "next/image"

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const images = [
    {
      url: "/media/delfina.jpg",
      caption: "Delfina - Piloto por un día",
    },
    {
      url: "/media/agustina.jpg",
      caption: "Agustina - Piloto por un día",
    },
    {
      url: "/media/gallery (1).jpg",
      caption: "Vuelos",
    },
    {
      url: "/media/gallery (2).jpg",
      caption: "Vuelos",
    },
    {
      url: "/media/gallery (3).jpg",
      caption: "Vuelos",
    },
    {
      url: "/media/gallery (4).jpg",
      caption: "Vuelos",
    },
    {
      url: "/media/gallery (5).jpg",
      caption: "Vuelos",
    },
    {
      url: "/media/gallery (6).jpg",
      caption: "Vuelos",
    },
    {
      url: "/media/gallery (7).jpg",
      caption: "Vuelos",
    },
    {
      url: "/media/gallery (8).jpg",
      caption: "Vuelos",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (inView) {
        nextSlide()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white dark:bg-gray-800"
      id="gallery"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-center mb-12">
          <Users className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Galería de Clientes</h2>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Descubre las experiencias inolvidables de nuestros clientes y únete a nuestra comunidad de amantes del vuelo
        </motion.p>

        <div className="relative max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
          {/* Carrusel */}
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[16/8]">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 10 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    height={1000}
                    width={1000}
                    src={image.url || "/placeholder.svg"}
                    alt={`Cliente ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-medium">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Controles del carrusel */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 rounded-full z-20 hover:bg-white/50 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 rounded-full z-20 hover:bg-white/50 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            ¡Sé parte de nuestra galería!
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

