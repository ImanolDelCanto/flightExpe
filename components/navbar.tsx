"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}
interface MobileNavLinkProps {
  href: string
  onClick: () => void
  children: React.ReactNode
}

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

function NavLink({ href, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const elementId = href.replace('#', '')
    smoothScrollTo(elementId)
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`text-gray-800 font-medium hover:text-blue-600 transition-colors cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick() // Cierra el menú primero
    setTimeout(() => {
      const elementId = href.replace('#', '')
      smoothScrollTo(elementId)
    }, 100) // Espera a que el menú se cierre antes de hacer scroll
  }

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="text-gray-800 font-medium hover:text-blue-600 transition-colors block text-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 const handleReservarClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    smoothScrollTo('contact')
    setIsMenuOpen(false) // Cerrar menú móvil si está abierto
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex items-center justify-between">
          <Link href={"/"} >
            <Image
              src={isScrolled ? "/media/logo-dark.png" : "/media/logo-light.png"}
              width={1331}
              height={1064}
              alt="Experiencias Aéreas"
              className="h-16 md:h-20 w-auto"
              sizes="120px"
              priority
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink href="#isla">Isla Martín García</NavLink>
            <NavLink href="#service">Servicios</NavLink>
            <NavLink href="#experience">Experiencia</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <motion.a
              href="#contact"
              onClick={handleReservarClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reservar Ahora
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-lg">
                <MobileNavLink href="#isla" onClick={() => setIsMenuOpen(false)}>
                  Isla Martín García
                </MobileNavLink>
                <MobileNavLink href="#service" onClick={() => setIsMenuOpen(false)}>
                  Servicios
                </MobileNavLink>
                <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>
                  Experiencia
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </MobileNavLink>
                <motion.a
                  href="#contact"
                  onClick={handleReservarClick}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-center hover:bg-blue-700 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reservar Ahora
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}