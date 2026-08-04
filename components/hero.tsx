"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

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

interface Slide {
  type: 'image' | 'video'
  src: string
  // Imagen de base: se ve mientras el video carga y reemplaza al video si no se puede reproducir
  fallback?: string
  alt: string
  // Las fotos verticales quedan muy recortadas en un hero ancho: esto corre el encuadre
  // para que no se pierdan las caras ni el motivo principal.
  position?: string
}

// El primer slide es imagen a propósito: se carga con priority y define el LCP.
const SLIDES: Slide[] = [
  {
    type: 'image',
    src: '/media/hero/3 (2).00_00_51_13.Imagen fija002.webp',
    alt: 'Cabina de la avioneta en vuelo sobre el río',
  },
  {
    type: 'image',
    src: '/media/hero/IMG_7307.webp',
    alt: 'Grupo de pasajeros junto a la avioneta antes del vuelo',
    position: '50% 45%',
  },
  {
    type: 'image',
    src: '/media/hero/GH010459.00_00_02_25.Imagen fija002.webp',
    alt: 'Vista aérea de Buenos Aires desde la avioneta',
  },
  {
    type: 'image',
    src: '/media/hero/IMG_7009.webp',
    alt: 'Avionetas en plataforma al atardecer',
    position: '50% 60%',
  },
  {
    type: 'image',
    src: '/media/hero/3 (2).00_03_42_21.Imagen fija005.webp',
    alt: 'Piloto a los comandos con el sol entre las nubes',
  },
  {
    type: 'image',
    src: '/media/hero/IMG_7291.webp',
    alt: 'Pareja de pasajeros frente a la avioneta',
    position: '50% 52%',
  },
  {
    type: 'video',
    src: '/media/video2.webm',
    fallback: '/media/hero/GH010459.00_00_02_25.Imagen fija002.webp',
    alt: 'Vista aérea de la Basílica de Luján',
  },
  {
    type: 'image',
    src: '/media/hero/GH010462.00_03_33_27.Imagen fija001.webp',
    alt: 'Aproximación a la pista del Aeropuerto de Morón',
  },
  {
    type: 'image',
    src: '/media/hero/IMG_7299.webp',
    alt: 'Pasajero en cabina durante el vuelo bautismo',
    position: '50% 45%',
  },
  {
    type: 'image',
    src: '/media/hero/IMG_7007.webp',
    alt: 'Hélice y trompa de la avioneta en plataforma',
  },
  {
    type: 'image',
    src: '/media/hero/IMG_7259.webp',
    alt: 'Entrada a la Isla Martín García, uno de los destinos',
    position: '50% 32%',
  },
]

// Cuánto dura cada slide antes de pasar al siguiente
const SLIDE_MS = { image: 6000, video: 9000 }

export function Hero() {
  const handleReservarClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    smoothScrollTo('contact')
  }

  const handleConocerMasClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    smoothScrollTo('service')
  }

  const shouldReduceMotion = useReducedMotion();

  const [current, setCurrent] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  // Si el usuario pidió ahorro de datos no bajamos los videos, sólo las imágenes
  const [allowVideo, setAllowVideo] = useState(true)
  // Sólo montamos el <video> del slide actual y el siguiente, para no bajar todo de una
  const [mountedVideos, setMountedVideos] = useState<number[]>([0, 1])

  const [heroRef, inView] = useInView({ threshold: 0.25 })
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const touchStartX = useRef<number | null>(null)

  const total = SLIDES.length
  const goTo = useCallback((i: number) => setCurrent(((i % total) + total) % total), [total])
  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // El carrusel sólo corre si está a la vista y la pestaña está activa
  const running = inView && !tabHidden && !hovering && !shouldReduceMotion

  useEffect(() => {
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection
    if (conn?.saveData) setAllowVideo(false)
  }, [])

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    setMountedVideos((prevMounted) => {
      const upcoming = (current + 1) % total
      if (prevMounted.includes(current) && prevMounted.includes(upcoming)) return prevMounted
      return Array.from(new Set([...prevMounted, current, upcoming]))
    })
  }, [current, total])

  // Avance automático
  useEffect(() => {
    if (!running) return
    const timer = setTimeout(next, SLIDE_MS[SLIDES[current].type])
    return () => clearTimeout(timer)
  }, [current, running, next])

  // Sólo reproduce el video del slide activo; el resto se pausa y vuelve al inicio
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === current && inView && !tabHidden) {
        video.play().catch(() => {})
      } else {
        video.pause()
        if (i !== current) video.currentTime = 0
      }
    })
  }, [current, inView, tabHidden, mountedVideos])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  return (
    <div
      ref={heroRef}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Experiencias aéreas en vuelo"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative w-full overflow-hidden h-[68vh] min-h-[460px] max-h-[720px]"
    >
      {SLIDES.map((slide, i) => {
        const isActive = i === current
        const showVideo = slide.type === 'video' && allowVideo && mountedVideos.includes(i)

        return (
          <motion.div
            key={slide.src}
            aria-hidden={!isActive}
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 pointer-events-none"
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={
                shouldReduceMotion || slide.type === 'video'
                  ? { scale: 1 }
                  : { scale: isActive ? 1.06 : 1 }
              }
              transition={{ duration: isActive ? SLIDE_MS.image / 1000 + 1 : 0.9, ease: 'linear' }}
            >
              <Image
                src={slide.type === 'video' ? (slide.fallback as string) : slide.src}
                alt={slide.alt}
                style={slide.position ? { objectPosition: slide.position } : undefined}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
                loading={i === 0 ? undefined : 'lazy'}
              />

              {showVideo && (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={slide.alt}
                >
                  <source src={slide.src} type="video/webm" />
                </video>
              )}
            </motion.div>
          </motion.div>
        )
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={shouldReduceMotion ? false : { y: -40, opacity: 0 }}
          animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }} // Duración reducida
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
        >
          Experiencias Aéreas
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? false : { y: 40, opacity: 0 }}
          animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-7 max-w-2xl drop-shadow"
        >
          Descubre la libertad de volar y vive una experiencia única en el cielo
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { y: 40, opacity: 0 }}
          animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap w-full justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            onClick={handleReservarClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Reserva Tu Vuelo Ahora
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

      {/* Flechas */}
      <button
        type="button"
        onClick={prev}
        aria-label="Anterior"
        className="hidden sm:block absolute z-20 left-3 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full text-white bg-white/10 hover:bg-white/25 border border-white/25 backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Siguiente"
        className="hidden sm:block absolute z-20 right-3 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full text-white bg-white/10 hover:bg-white/25 border border-white/25 backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Indicadores: el activo se llena con el tiempo que le queda al slide */}
      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1} de ${total}`}
            aria-current={i === current}
            className={`h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
              i === current ? 'w-10 bg-white/30' : 'w-2.5 bg-white/45 hover:bg-white/70'
            }`}
          >
            {i === current && (
              <motion.span
                key={`${slide.src}-${current}-${running}`}
                className="block h-full bg-blue-500"
                initial={{ width: running ? '0%' : '100%' }}
                animate={{ width: '100%' }}
                transition={{ duration: running ? SLIDE_MS[slide.type] / 1000 : 0, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
