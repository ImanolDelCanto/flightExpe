import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white dark:bg-gray-800"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Contacta con Nosotros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <Link
                  href="https://wa.me/+5491171210438?text=¡Hola!%20Estoy%20interesado%20en%20el%20vuelo%20bautismo."
                  target="_blank"
                  className=" text-muted-foreground"
                >
                <h3 className="font-bold text-gray-900 dark:text-white">Teléfono</h3>
                <p className="text-gray-600 dark:text-gray-300">+54 9 11-7121-0438</p>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <Link href="mailto:vuelosdebautismos@gmail.com">
                <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">vuelosdebautismos@gmail.com</p>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Instagram className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <Link href="https://www.instagram.com/experiencias_aereas/" target="_blank" >
                    <h3 className="font-bold text-gray-900 dark:text-white">Instagram</h3>
                    <p className="text-gray-600 dark:text-gray-300">@experiencias_aereas</p>
                  </Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <Link href="https://maps.app.goo.gl/yhuFxBBZnNBRhTLi9" target="_blank">
                <h3 className="font-bold text-gray-900 dark:text-white">Dirección</h3>
                <p className="text-gray-600 dark:text-gray-300">500 Av. Figueroa Alcorta, Moron</p>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                rows={4}
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}