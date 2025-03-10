"use client"

import { CheckIcon, Plane, Cloud, Sun } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [animationStarted, setAnimationStarted] = useState(false)

  // Start animation when component comes into view
  useEffect(() => {
    if (isInView && !animationStarted) {
      setAnimationStarted(true)
    }
  }, [isInView, animationStarted])

  // Reset animation when component goes out of view
  useEffect(() => {
    if (!isInView && animationStarted) {
      setTimeout(() => {
        setAnimationStarted(false)
      }, 500)
    }
  }, [isInView, animationStarted])

  return (
    <div className="relative">
      {/* Animation container - positioned completely above the content */}
      <div className="absolute inset-x-0 -top-20 h-40 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {animationStarted && (
            <>
              {/* Airplane */}
              <motion.div
                className="absolute top-16"
                initial={{ x: "-10%", y: 0 }}
                animate={{
                  x: "110%",
                  y: [0, -15, 10, -5, 0],
                  rotate: [0, -5, 3, -2, 0],
                }}
                exit={{ x: "120%", opacity: 0 }}
                transition={{
                  duration: 6,
                  times: [0, 0.2, 0.5, 0.8, 1],
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  <Plane className="h-14 w-14 text-primary" strokeWidth={1.5} />
                </motion.div>

                {/* Airplane trails */}
                <motion.div
                  className="absolute top-1/2 right-12 h-1 bg-gradient-to-l from-transparent to-primary/40 rounded-full"
                  style={{ width: "150px", translateY: "-50%" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.8 }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeOut",
                    repeatDelay: 0.1,
                  }}
                />

                <motion.div
                  className="absolute top-1/2 right-12 h-0.5 bg-gradient-to-l from-transparent to-primary/30 rounded-full"
                  style={{ width: "100px", translateY: "-40%" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.6 }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeOut",
                    delay: 0.1,
                    repeatDelay: 0.15,
                  }}
                />

                <motion.div
                  className="absolute top-1/2 right-12 h-0.5 bg-gradient-to-l from-transparent to-primary/20 rounded-full"
                  style={{ width: "80px", translateY: "-60%" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.4 }}
                  transition={{
                    duration: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeOut",
                    delay: 0.2,
                    repeatDelay: 0.2,
                  }}
                />
              </motion.div>

              {/* Sun */}
              <motion.div
                className="absolute top-6 right-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <Sun className="h-10 w-10 text-yellow-400/70" strokeWidth={1} />
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-400/20 blur-sm"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              {/* Clouds */}
              <motion.div
                className="absolute top-4 left-[15%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Cloud className="h-8 w-8 text-slate-300/70" strokeWidth={1} />
              </motion.div>

              <motion.div
                className="absolute top-12 left-[35%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Cloud className="h-10 w-10 text-slate-300/70" strokeWidth={1} />
              </motion.div>

              <motion.div
                className="absolute top-6 left-[60%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Cloud className="h-7 w-7 text-slate-300/70" strokeWidth={1} />
              </motion.div>

              <motion.div
                className="absolute top-16 left-[80%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                <Cloud className="h-9 w-9 text-slate-300/70" strokeWidth={1} />
              </motion.div>

              {/* Additional decorative elements */}
              <motion.div
                className="absolute top-24 left-[25%] w-20 h-1 bg-primary/10 rounded-full blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1.5, delay: 1.3 }}
              />

              <motion.div
                className="absolute top-20 left-[50%] w-16 h-1 bg-primary/10 rounded-full blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 1.6 }}
              />

              <motion.div
                className="absolute top-28 left-[75%] w-24 h-1 bg-primary/10 rounded-full blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 1.9 }}
              />

              {/* Birds in the distance */}
              <motion.div
                className="absolute top-10 left-[40%]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-500/50">
                  <path
                    d="M3,10 C5,8 6,9 8,10 C10,11 11,10 13,9 C15,8 16,9 18,10"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute top-18 left-[65%]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 1, delay: 2.3 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-500/40">
                  <path
                    d="M3,10 C5,8 6,9 8,10 C10,11 11,10 13,9 C15,8 16,9 18,10"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Main content with ref for animation trigger */}
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">¿Qué es un Vuelo Bautismo?</h2>
          <p className="text-muted-foreground mb-6">
            Son Experiencias diseñadas para aquellas personas que, sin conocer el mundo de la aviación, desean
            adentrarse en el y vivir la emoción de volar. Durante estos vuelos, los participantes aprenden los
            principios básicos del vuelo y podrán tomar los mandos del avión una vez en vuelo, todo bajo la guía del
            piloto.
          </p>
          <p className="text-muted-foreground mb-6">
            Esta experiencia única no solo es una oportunidad para descubrir la magia de volar, sino que también es el
            regalo perfecto para sorprender a alguien especial.
          </p>
        </div>
        <div className="px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">Beneficios del Vuelo Bautismo</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Experiencia Única</h3>
                <p className="text-muted-foreground">
                  Vive una aventura inolvidable y conviértete en piloto por un día.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Aprendizaje Práctico</h3>
                <p className="text-muted-foreground">
                  Aprende los conceptos básicos de pilotaje de una manera divertida y segura.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <CheckIcon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Adrenalina y Emoción</h3>
                <p className="text-muted-foreground">
                  Siente la emoción de volar y disfrutar de una vista panorámica única.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

