import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

// Función para scroll suave
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const offsetTop = element.offsetTop - 100 // Ajuste para el navbar fijo
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

export function Hero() {
  const handleReservarClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    smoothScrollTo('contact')
  }

  const handleConocerMasClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    smoothScrollTo('service')
  }

  const handleScrollDownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    smoothScrollTo('about')
  }

  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-screen">
      <Image
        src="/media/banner1.webp"
        alt="Banner"
        fill
        className="absolute object-cover"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={shouldReduceMotion ? false : { y: -40, opacity: 0 }}
          animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }} // Duración reducida
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Experiencias Aéreas
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { y: 40, opacity: 0 }}
          animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl"
        >
          Descubre la libertad de volar y vive una experiencia única en el cielo
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { y: 40, opacity: 0 }}
          animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            onClick={handleReservarClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Reservar Ahora
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#service"
            onClick={handleConocerMasClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Conocer Más
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        onClick={handleScrollDownClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer hover:text-blue-300 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>
  );
}
