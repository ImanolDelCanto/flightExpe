"use client"

import type React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Phone, Mail, Instagram, MapPin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) throw new Error(result.error || "Error al enviar el mensaje")

      setSuccess("¡Mensaje enviado con éxito!")
      setFormData({ name: "", email: "", message: "" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white dark:bg-gray-800"
      id="contact"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contacta con Nosotros</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ContactItem
              icon={<Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
              title="Teléfono"
              link="https://wa.me/+5491171210438?text=¡Hola!%20Estoy%20interesado%20en%20el%20vuelo%20bautismo."
              text="+54 9 11-7121-0438"
            />
            <ContactItem
              icon={<Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
              title="Email"
              link="mailto:vuelosdebautismos@gmail.com"
              text="vuelosdebautismos@gmail.com"
            />
            <ContactItem
              icon={<Instagram className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
              title="Instagram"
              link="https://www.instagram.com/experiencias_aereas/"
              text="@experiencias_aereas"
            />
            <ContactItem
              icon={<MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
              title="Dirección"
              link="https://maps.app.goo.gl/yhuFxBBZnNBRhTLi9"
              text="500 Av. Figueroa Alcorta, Morón"
            />
          </motion.div>

          {/* Formulario de contacto */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 bg-gray-50 dark:bg-gray-900 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <InputField
              label="Nombre"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
            />
            <TextareaField
              label="Mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu mensaje"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  )
}

const ContactItem = ({
  icon,
  title,
  link,
  text,
}: {
  icon: React.ReactNode
  title: string
  link: string
  text: string
}) => (
  <div className="flex items-center gap-4">
    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">{icon}</div>
    <div>
      <Link href={link} target="_blank">
        <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{text}</p>
      </Link>
    </div>
  </div>
)

// Componente reutilizable para los inputs
const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
      placeholder={placeholder}
    />
  </div>
)

// Componente reutilizable para el textarea
const TextareaField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}: {
  label: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
      rows={4}
      placeholder={placeholder}
    />
  </div>
)

