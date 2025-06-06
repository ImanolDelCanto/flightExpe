"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { X, Play, Users, Camera, Video, ZoomIn } from "lucide-react"
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
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [filter, setFilter] = useState<"all" | "images" | "videos">("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const mediaItems: MediaItem[] = [
    {
      id: 5,
      type: "image",
      url: "/media/gallery (2).jpg",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
    {
      id: 2,
      type: "image",
      url: "/media/agustina.jpg",
      caption: "Agustina - Piloto por un día",
      category: "clientes",
    },
    {
      id: 4,
      type: "image",
      url: "/media/gallery (1).jpg",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
    {
      id: 7,
      type: "image",
      url: "/media/gallery (4).jpg",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
    {
      id: 8,
      type: "image",
      url: "/media/gallery (5).jpg",
      caption: "Vista panorámica desde la cabina",
      category: "clientes",
    },

    {
      id: 9,
      type: "image",
      url: "/media/gallery (7).jpg",
      caption: "Vista panorámica desde la cabina",
      category: "vuelos",
    },
       {
      id: 1,
      type: "image",
      url: "/media/delfina.jpg",
      caption: "Delfina - Piloto por un día",
      category: "clientes",
    },
    {
      id: 10,
      type: "image",
      url: "/media/gallery (8).jpg",
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
      "md:col-span-2 md:row-span-2", // Grande
      "md:col-span-1 md:row-span-1", // Pequeño
      "md:col-span-1 md:row-span-2", // Alto
      "md:col-span-2 md:row-span-1", // Ancho
      "md:col-span-1 md:row-span-1", // Pequeño
      "md:col-span-1 md:row-span-1", // Pequeño
    ]
    return patterns[index % patterns.length]
  }

  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedMedia])

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

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
              }`}
            >
              Todo
            </button>
            <button
              onClick={() => setFilter("images")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                filter === "images"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
              }`}
            >
              <Camera className="w-4 h-4" />
              Fotos
            </button>
            <button
              onClick={() => setFilter("videos")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                filter === "videos"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
              }`}
            >
              <Video className="w-4 h-4" />
              Videos
            </button>
          </div>
        </motion.div>

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
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${getGridClass(index)}`}
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.type === "video" ? item.thumbnail || item.url : item.url}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

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

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Media Content */}
              <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                {selectedMedia.type === "video" ? (
                  <div className="relative aspect-video">
                    <video controls className="w-full h-full" poster={selectedMedia.thumbnail}>
                      <source src={selectedMedia.url} type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                ) : (
                  <div className="relative">
                    <Image
                      src={selectedMedia.url || "/placeholder.svg"}
                      alt={selectedMedia.caption}
                      width={1200}
                      height={800}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  </div>
                )}

                {/* Caption */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{selectedMedia.caption}</h3>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium capitalize">
                    {selectedMedia.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
