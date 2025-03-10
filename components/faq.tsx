"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
  question: string
  answer: string
  index: number
  isOpen: boolean
  toggleOpen: () => void
}

function FAQItem({ question, answer, index, isOpen, toggleOpen }: FAQItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4"
    >
      <motion.button
        onClick={toggleOpen}
        className={cn(
          "flex items-center justify-between w-full p-5 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
          isOpen && "bg-blue-50 dark:bg-blue-900/20",
        )}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="font-medium text-gray-900 dark:text-white">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </motion.button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "¿Qué tipos de experiencias aéreas ofrecen?",
      answer:
        "Ofrecemos experiencias únicas, como vuelos panorámicos sobre paisajes increíbles y la oportunidad de ser Piloto por un Día, donde puedes tomar el control de una aeronave bajo la supervisión de un instructor.",
    },
    {
      question: " ¿Necesito experiencia previa para participar?",
      answer:
        "No, nuestras experiencias están diseñadas para todo el público. Si eliges la opción Piloto por un Día, recibirás una instrucción previa y estarás acompañado por un piloto profesional en todo momento.",
    },
    {
      question: "¿Cuánto dura cada experiencia?",
      answer:
        "Vuelos panorámicos: Generalmente entre 30 y 60 minutos, dependiendo de la ruta elegida Piloto por un Día: Puede durar entre 1 y 2 horas, incluyendo la instrucción en tierra y el vuelo.",
    },
    {
      question: "¿Qué pasa si hay mal clima el día de mi vuelo?",
      answer:
        "La seguridad es nuestra prioridad. Si las condiciones climáticas no permiten volar, reprogramamos tu experiencia sin costo adicional.",
    },
    {
      question: "¿Cómo reservo mi experiencia?",
      answer:
        "Puedes hacer tu reserva directamente en nuestra página web o contactarnos por WhatsApp o correo electrónico. Te recomendamos reservar con anticipación para asegurar tu lugar.",
    },
    {
      question: "¿Qué ropa debo usar para el vuelo?",
      answer:
        "Te sugerimos ropa cómoda y calzado cerrado. En invierno, es recomendable llevar una campera ligera, ya que las temperaturas pueden bajar en altitud.",
    },
    {
      question: "¿Puedo regalar una experiencia aérea?",
      answer:
        "¡Sí! Ofrecemos vouchers de regalo y una opción especial: 🎟️ Boarding Pass Sorpresa: Recibirás un pase de embarque personalizado que puedes regalar a esa persona especial. El pase incluye un código QR, que al escanearlo después del vuelo, le permitirá ver y descargar las fotos y videos de su experiencia ",
    },
    {
      question: "¿Desde qué aeropuertos o pistas operan?",
      answer:
        "Nuestras experiencias parten desde el aeropuerto de Morón.",
    },
    {
      question: "¿Puedo llevar mi cámara o celular durante el vuelo?",
      answer:
        "Sí, puedes llevar tu cámara o celular para capturar la experiencia, siempre siguiendo las indicaciones del piloto para garantizar la seguridad.",
    },
    {
      question: "Si vuelo varias veces, ¿obtengo algún descuento",
      answer:
        "¡Sí! Si decides repetir la experiencia o probar una nueva, ofrecemos descuentos exclusivos para clientes recurrentes. Contáctanos para conocer las promociones disponibles.",
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white dark:bg-gray-800"
      id="faq"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-12">
          <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Preguntas Frecuentes</h2>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Resolvemos tus dudas sobre nuestras experiencias aéreas
        </motion.p>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

