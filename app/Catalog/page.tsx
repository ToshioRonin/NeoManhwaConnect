"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ChatSidebar } from "@/components/chat-sidebar";
import { Footer } from "@/components/footer";
import { Search, SlidersHorizontal, Grid3X3, LayoutGrid, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const manhwas = [
  { id: 1, title: "Solo Leveling", cover: "/solo-leveling-manhwa-cover.jpg", genres: ["Acción", "Fantasía"], rating: 4.9, chapters: 270 },
  { id: 2, title: "Tower of God", cover: "/tower-of-god-manhwa-cover.jpg", genres: ["Aventura", "Fantasía"], rating: 4.8, chapters: 600 },
  { id: 3, title: "The Beginning After The End", cover: "/beginning-after-the-end-manhwa-cover.jpg", genres: ["Fantasía", "Reencarnación"], rating: 4.8, chapters: 180 },
  { id: 4, title: "Omniscient Reader", cover: "/omniscient-reader-manhwa-cover.jpg", genres: ["Acción", "Fantasía"], rating: 4.9, chapters: 550 },
  { id: 5, title: "The God of High School", cover: "/god-of-high-school-manhwa-cover.jpg", genres: ["Acción", "Artes Marciales"], rating: 4.7, chapters: 430 },
  { id: 6, title: "Eleceed", cover: "/eleceed-manhwa-cover.jpg", genres: ["Acción", "Comedia"], rating: 4.6, chapters: 280 },
  { id: 7, title: "Noblesse", cover: "/noblesse-manhwa-cover.jpg", genres: ["Acción", "Sobrenatural"], rating: 4.7, chapters: 630 },
  { id: 8, title: "The Breaker", cover: "/the-breaker-manhwa-cover.jpg", genres: ["Acción", "Artes Marciales"], rating: 4.6, chapters: 380 },
  { id: 9, title: "Lookism", cover: "/lookism-manhwa-cover.jpg", genres: ["Comedia", "Drama"], rating: 4.8, chapters: 450 },
  { id: 10, title: "Sweet Home", cover: "/sweet-home-manhwa-cover.jpg", genres: ["Terror", "Acción"], rating: 4.7, chapters: 190 },
  { id: 11, title: "Hardcore Leveling Warrior", cover: "/hardcore-leveling-warrior-manhwa-cover.jpg", genres: ["Acción", "Fantasía"], rating: 4.5, chapters: 290 },
  { id: 12, title: "True Beauty", cover: "/true-beauty-manhwa-cover.jpg", genres: ["Romance", "Drama"], rating: 4.6, chapters: 280 },
];

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Biblioteca completa</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Colección Manhwas
            </h1>
            <p className="text-muted-foreground text-lg">
              Explora nuestra biblioteca con más de 50,000 títulos
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar en el catálogo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-xl h-12 focus-visible:ring-2 focus-visible:ring-primary/50"
                />
              </div>
            </div>
            <Button variant="outline" className="border-border/50 bg-transparent hover:bg-secondary/30 h-12 px-6">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <div className="flex items-center gap-1 p-1 rounded-xl bg-secondary/30">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "gradient-primary" : ""}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "gradient-primary" : ""}
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
            {manhwas.map((manhwa, index) => (
              <Link key={manhwa.id} href={`/manhwa/${manhwa.id}`} className="group">
                <Card className="glass overflow-hidden card-hover-static">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={manhwa.cover || "/placeholder.svg"}
                      alt={manhwa.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                        <svg className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-xs text-white font-medium">{manhwa.rating}</span>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white border-0 text-xs">
                        {manhwa.chapters} cap.
                      </Badge>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {manhwa.genres.slice(0, 2).map((genre) => (
                          <span key={genre} className="text-xs text-primary font-medium">{genre}</span>
                        ))}
                      </div>
                      <h3 className="font-bold text-white text-base leading-tight">
                        {manhwa.title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center glow-primary">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="border-border/50 bg-transparent hover:bg-secondary/30 px-8 h-12">
              Cargar más
            </Button>
          </div>
        </div>

        <ChatSidebar />
      </main>

      <Footer />
    </div>
  );
}