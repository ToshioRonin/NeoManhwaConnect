"use client"

import { Search, Bell, Home, LogIn, Sparkles, Library } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground">N</div>
          <span className="hidden sm:inline">NeoManhwa</span>
        </Link>

        <Button
          variant="ghost"
          asChild
          className="text-foreground hover:text-primary hover:bg-secondary hidden md:flex"
        >
          <Link href="/catalog">
            <Library className="w-4 h-4 mr-2" />
            Catálogo
          </Link>
        </Button>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar en NeoManhwa Connect"
              className="w-full pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="text-foreground hover:text-primary hover:bg-secondary">
            <Link href="/">
              <Home className="w-5 h-5" />
              <span className="sr-only">Inicio</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="text-foreground hover:text-primary hover:bg-secondary">
            <Link href="/ai-search">
              <Sparkles className="w-5 h-5" />
              <span className="sr-only">Buscar con IA</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary hover:bg-secondary relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            <span className="sr-only">Notificaciones</span>
          </Button>

          <Button asChild className="bg-primary text-primary-foreground hover:bg-[#9D77FF]">
            <Link href="/login">
              <LogIn className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Iniciar Sesión</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
