"use client"

import { Navbar } from "./navbar"
import { Hero } from "./hero"
import { About } from "./about"
import { Service } from "./service"
import { Experience } from "./experience"
import { Contact } from "./contact"
import { ScrollToTop } from "./scroll-to-top"
import { Toaster } from "sonner"
import { Gallery } from "./gallery"

export default function Main() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      <header >
        <Navbar />
      </header>
      <main >
        <section id="hero" className="relative w-full">
          <Hero />
        </section>
        <section id="about" className="w-full py-16 md:py-24 bg-muted px-4 sm:px-8">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <About />
          </div>
        </section>
        <section id="service" className="w-full py-16 md:py-24 px-4 sm:px-8">
          <Service />
        </section>
        <section id="experience" className="w-full pb-16 md:pb-24 px-4 sm:px-8">
          <Experience />
        </section>
        <section id="contact" className="w-full py-16 md:py-24 bg-muted">
          <Gallery/>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 bg-muted">
          <Contact />
        </section>
      </main>
      <footer className="w-full bg-primary text-primary-foreground py-6 px-6 md:px-12">
        <div className="container flex flex-col mx-auto md:flex items-center justify-between gap-4">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Vuelo Bautismo. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-4 mt-4 md:mt-0">
          <p className="text-xs text-center">
            Desarrollado por GretSoft
          </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}

