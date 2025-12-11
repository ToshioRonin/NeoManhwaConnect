"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ChatSidebar } from "@/components/chat-sidebar";
import { Footer } from "@/components/footer";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const manhwas = [
  {
    id: 1,
    title: "Solo Leveling",
    cover: "/solo-leveling-manhwa-cover.jpg",
    description:
      "Un cazador de rango E se convierte en el más poderoso del mundo",
  },
  {
    id: 2,
    title: "Tower of God",
    cover: "/tower-of-god-manhwa-cover.jpg",
    description: "Un chico sube una misteriosa torre para encontrar a su amiga",
  },
  {
    id: 3,
    title: "The Beginning After The End",
    cover: "/beginning-after-the-end-manhwa-cover.jpg",
    description: "Un rey reencarna en un mundo de magia y aventuras",
  },
  {
    id: 4,
    title: "Omniscient Reader",
    cover: "/omniscient-reader-manhwa-cover.jpg",
    description: "La novela favorita de un hombre se convierte en realidad",
  },
  {
    id: 5,
    title: "The God of High School",
    cover: "/god-of-high-school-manhwa-cover.jpg",
    description:
      "Torneo de artes marciales que determina al luchador más fuerte",
  },
  {
    id: 6,
    title: "Eleceed",
    cover: "/eleceed-manhwa-cover.jpg",
    description: "Un chico con superpoderes ayuda a un gato misterioso",
  },
  {
    id: 7,
    title: "Noblesse",
    cover: "/noblesse-manhwa-cover.jpg",
    description: "Un noble vampiro despierta en la era moderna",
  },
  {
    id: 8,
    title: "The Breaker",
    cover: "/the-breaker-manhwa-cover.jpg",
    description:
      "Un estudiante débil aprende artes marciales de un maestro legendario",
  },
  {
    id: 9,
    title: "Lookism",
    cover: "/lookism-manhwa-cover.jpg",
    description: "Un estudiante gordo despierta en un cuerpo perfecto",
  },
  {
    id: 10,
    title: "Sweet Home",
    cover: "/sweet-home-manhwa-cover.jpg",
    description: "Supervivientes luchan contra monstruos en un edificio",
  },
  {
    id: 11,
    title: "Hardcore Leveling Warrior",
    cover: "/hardcore-leveling-warrior-manhwa-cover.jpg",
    description: "El jugador número 1 pierde todo y debe empezar de nuevo",
  },
  {
    id: 12,
    title: "True Beauty",
    cover: "/true-beauty-manhwa-cover.jpg",
    description: "Una chica transforma su vida con el poder del maquillaje",
  },
];

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex container mx-auto px-4 py-8 gap-6">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Colección Manhwas
            </h1>
            <p className="text-muted-foreground">
              Explora nuestra biblioteca completa
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar en el catálogo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input border-border text-foreground"
              />
            </div>
            <Button variant="outline" className="border-border bg-transparent">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {manhwas.map((manhwa) => (
              <Link key={manhwa.id} href={`/manhwa/${manhwa.id}`}>
                <Card className="group relative overflow-hidden border-border bg-card cursor-pointer transition-all hover:scale-105 hover:shadow-xl">
                  <div className="aspect-[7/10] relative">
                    <img
                      src={manhwa.cover || "/placeholder.svg"}
                      alt={manhwa.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-bold text-white text-lg leading-tight">
                          {manhwa.title}
                        </h3>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <p className="text-white text-sm text-center leading-relaxed">
                        {manhwa.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <ChatSidebar />
      </main>

      <Footer />
    </div>
  );
}
