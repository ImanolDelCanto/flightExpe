"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { Navbar } from "./navbar"
import { Hero } from "./hero" 


const About = dynamic(() => import("./about").then(mod => mod.About), { ssr: false })
const Isla = dynamic(() => import("./isla").then(mod => mod.Isla), { ssr: false })
const Service = dynamic(() => import("./service").then(mod => mod.Service), { ssr: false })
const Experience = dynamic(() => import("./experience").then(mod => mod.Experience), { ssr: false })
const Gallery = dynamic(() => import("./gallery").then(mod => mod.Gallery), { ssr: false })
const FAQ = dynamic(() => import("./faq").then(mod => mod.FAQ), { ssr: false })
const Contact = dynamic(() => import("./contact").then(mod => mod.Contact), { ssr: false })
const ScrollToTop = dynamic(() => import("./scroll-to-top").then(mod => mod.ScrollToTop), { ssr: false })
const WhatsAppButton = dynamic(() => import("./whatsapp-button").then(mod => mod.WhatsAppButton), { ssr: false })
const Toaster = dynamic(() => import("sonner").then(mod => mod.Toaster), { ssr: false })

export default function Main() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster position="top-center" />

      <header>
        <Navbar />
      </header>

      <main>
        <section id="hero" className="relative w-full">
          <Hero />
        </section>

        <section id="about" className="w-full py-16 md:py-24 bg-muted px-4 sm:px-8">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <About />
          </div>
        </section>

        <section id="isla" className="w-full py-16 md:py-24 px-4 sm:px-8">
          <Isla />
        </section>

        <section id="service" className="w-full py-16 md:py-24 px-4 sm:px-8">
          <Service />
        </section>

        <section id="experience" className="w-full pb-16 md:pb-24 px-4 sm:px-8">
          <Experience />
        </section>

        <section id="gallery" className="w-full py-16 md:py-24 bg-muted">
          <Gallery />
        </section>

        <section id="faq" className="w-full py-16 md:py-24">
          <FAQ />
        </section>

        <section id="contact" className="w-full py-16 md:py-24 bg-muted">
          <Contact />
        </section>
      </main>

      <footer className="w-full bg-primary text-primary-foreground py-6 px-6 md:px-12">
        <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Vuelo Bautismo. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-4 mt-4 md:mt-0">
            <p className="text-xs">
              Desarrollado por{" "}
              <Link href="https://www.gretsoft.com.ar/" target="_blank" className="hover:text-gray-300">
                GretSoft
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}
