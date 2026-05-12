"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookOpen, Users, Library, ChevronRight, Star, Play, Gamepad2 } from "lucide-react";

const featuredManhwas = [
  {
    id: 1,
    title: "Solo Leveling",
    cover: "/solo-leveling-manhwa-cover.jpg",
    genre: "Acción, Fantasía",
    rating: 4.9
  },
  {
    id: 2,
    title: "Tower of God",
    cover: "/tower-of-god-manhwa-cover.jpg",
    genre: "Aventura, Fantasía",
    rating: 4.8
  },
  {
    id: 3,
    title: "Omniscient Reader",
    cover: "/omniscient-reader-manhwa-cover.jpg",
    genre: "Acción, Fantasía",
    rating: 4.9
  },
  {
    id: 4,
    title: "The Beginning After The End",
    cover: "/beginning-after-the-end-manhwa-cover.jpg",
    genre: "Fantasía, Reencarnación",
    rating: 4.8
  },
];

const features = [
  {
    icon: Library,
    title: "Miles de Manhwas",
    description: "Accede a una biblioteca masiva con los mejores títulos coreanos"
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Conecta con miles de lectores y comparte tus pasiones"
  },
  {
    icon: BookOpen,
    title: "Lectura Fácil",
    description: "Experimenta la mejor forma de leer tus manhwas favoritos"
  },
];

const stats = [
  { value: "50K+", label: "Manhwas Disponibles" },
  { value: "2M+", label: "Lectores Activos" },
  { value: "100K+", label: "Capítulos Publicados" },
  { value: "4.9", label: "Puntuación Promedio" },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex-1">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-slide-up">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">La comunidad de manhwas más grande</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-gradient">Tu portal</span>
              <br />
              <span className="text-foreground">al mundo manhwa</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Descubre, lee y conecta con millones de amantes del manhwa en una experiencia diseñada para fans, por fans.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="gradient-primary glow-subtle text-lg px-8 h-14 hover:opacity-90 transition-opacity">
                <Link href="/register">
                  Comenzar Ahora <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 h-14 glass border-border/50 hover:bg-secondary/50">
                <Link href="/catalog">
                  <Play className="mr-2 w-5 h-5" /> Explorar Catálogo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/30 glass">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Manhwas */}
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Manhwas Destacados</h2>
              <p className="text-muted-foreground">Los títulos más populares del momento</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link href="/catalog">Ver Todos <ChevronRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredManhwas.map((manhwa, index) => (
              <Link
                key={manhwa.id}
                href={`/manhwa/${manhwa.id}`}
                className="group relative rounded-2xl overflow-hidden card-hover-static"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={manhwa.cover}
                    alt={manhwa.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-white font-medium">{manhwa.rating}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs text-primary font-medium mb-1 block">{manhwa.genre}</span>
                    <h3 className="font-bold text-white text-lg">{manhwa.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Por qué elegir NeoManhwa?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Todo lo que necesitas para disfrutar al máximo de tu pasión por el manhwa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl glass card-hover-static group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 glow-subtle group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Gamepad2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Únete a millones de fans</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Listo para tu próxima aventura?
            </h2>

            <p className="text-xl text-muted-foreground mb-10">
              Crea tu cuenta gratis y empieza a descubrir increíbles historias ahora mismo.
            </p>

            <Button asChild size="lg" className="gradient-primary glow-primary text-lg px-10 h-14 hover:opacity-90 transition-opacity">
              <Link href="/register">
                Crear Cuenta Gratis <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}