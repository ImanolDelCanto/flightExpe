import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      className={`text-gray-800 font-medium hover:text-blue-600 transition-colors`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  return (
    <motion.a
      href={href}
      className="text-gray-800 font-medium hover:text-blue-600 transition-colors block text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 ">
        <div className="flex items-center justify-between">
          <Image src="/media/icono.png" alt="logo" className="h-32 w-auto" width={1000} height={1000}/>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#services">Servicios</NavLink>
            <NavLink href="#experience">Experiencia</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <motion.a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reservar Ahora
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-600"
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-lg">
                <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>
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
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-center hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reservar Ahora
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}