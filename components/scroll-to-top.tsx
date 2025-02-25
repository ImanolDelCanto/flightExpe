"use client"

import { ArrowUpCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-4 right-4 z-50 rounded-full p-2"
          onClick={scrollToTop}
          size="icon"
          variant="secondary"
        >
          <ArrowUpCircle className="h-6 w-6" />
          <span className="sr-only">Volver arriba</span>
        </Button>
      )}
    </>
  )
}

