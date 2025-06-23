"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Play, ZoomIn } from "lucide-react"
import Image from "next/image"

interface MediaItem {
  id: number
  type: "image" | "video"
  url: string
  thumbnail?: string
  caption: string
  category: string
}

export function Gallery() {
  const [filter] = useState<"all" | "images" | "videos">("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "image",
      url: "/media/gallery (2).webp",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
    {
      id: 2,
      type: "image",
      url: "/media/agustina.webp",
      caption: "Agustina - Piloto por un día",
      category: "clientes",
    },
    {
      id: 3,
      type: "video",
      url: "/media/videoCorto.webm",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
    {
      id: 4,
      type: "image",
      url: "/media/oscar.webp",
      caption: "Oscar - Piloto por un día",
      category: "vuelos",
    },
    {
      id: 5,
      type: "image",
      url: "/media/gallery (5).webp",
      caption: "Vista panorámica desde la cabina",
      category: "clientes",
    },
    {
      id: 6,
      type: "image",
      url: "/media/gallery (7).webp",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
    {
      id: 7,
      type: "video",
      url: "/media/video2.webm",
      caption: "Vista panorámica básilica de Luján",
      category: "vuelos",
    },
    {
      id: 8,
      type: "image",
      url: "/media/gallery (8).webp",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
    {
      id: 9,
      type: "image",
      url: "/media/delfina.webp",
      caption: "Delfina - Piloto por un día",
      category: "clientes",
    },
    {
      id: 10,
      type: "image",
      url: "/media/pamela.webp",
      caption: "Pamela - Piloto por un día",
      category: "vuelos",
    },
    {
      id: 11,
      type: "image",
      url: "/media/gallery (4).webp",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
    {
      id: 12,
      type: "image",
      url: "/media/gallery (1).webp",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
 
  ]

  const filteredItems = mediaItems.filter((item) => {
    if (filter === "all") return true
    if (filter === "images") return item.type === "image"
    if (filter === "videos") return item.type === "video"
    return true
  })

  const getGridClass = (index: number) => {
    const patterns = [
      "md:col-span-2 md:row-span-2",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-2",
      "md:col-span-2 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
    ]
    return patterns[index % patterns.length]
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white dark:bg-gray-800"
      id="gallery"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <Users className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
            Galería de Experiencias
          </h2>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Descubre las experiencias inolvidables de nuestros clientes y los momentos únicos capturados en cada vuelo
        </motion.p>

        {/* Masonry Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${getGridClass(index)}`}
              >
                <div className="relative w-full h-full">
                  {item.type === "video" ? (
                    <video
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={item.url} type="video/mp4" />
                      <source src={item.url} type="video/webm" />
                    </video>
                  ) : (
                    <Image
                      src={item.url}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Media Type Icon */}
                  <div className="absolute top-3 right-3">
                    {item.type === "video" ? (
                      <div className="bg-red-600 text-white p-2 rounded-full">
                        <Play className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-sm mb-1">{item.caption}</h3>
                    <span className="text-white/80 text-xs capitalize">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ¡Sé parte de nuestra galería!
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}