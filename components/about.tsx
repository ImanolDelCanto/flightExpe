"use client"

import { CheckIcon } from "lucide-react"

export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-10">¿Qué es un Vuelo Bautismo?</h2>
        <p className="text-muted-foreground mb-6">
          Son Experiencias diseñadas para aquellas personas que, sin conocer el mundo de la aviación, desean adentrarse
          en el y vivir la emoción de volar. Durante estos vuelos, los participantes aprenden los principios básicos del
          vuelo y podrán tomar los mandos del avión una vez en vuelo, todo bajo la guía del piloto.
        </p>
        <p className="text-muted-foreground mb-6">
          Esta experiencia única no solo es una oportunidad para descubrir la magia de volar, sino que también es el
          regalo perfecto para sorprender a alguien especial.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-10">Beneficios del Vuelo Bautismo</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <CheckIcon className="w-6 h-6 text-primary" />
            <div>
              <h3 className="text-xl font-bold">Experiencia Única</h3>
              <p className="text-muted-foreground">Vive una aventura inolvidable y conviértete en piloto por un día.</p>
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
  )
}

