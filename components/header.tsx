"use client";

import { Search, Bell, LogIn, Library, Menu, X, Palette, Check, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useTheme, themes } from "@/context/theme-context";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const darkThemes = Object.entries(themes).filter(([, theme]) => theme.mode === "dark");
  const lightThemes = Object.entries(themes).filter(([, theme]) => theme.mode === "light");

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center glow-subtle transition-transform group-hover:scale-110">
            <span className="text-primary-foreground font-bold text-xl">N</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">NeoManhwa</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Button
            variant="ghost"
            asChild
            className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          >
            <Link href="/catalog">
              <Library className="w-4 h-4 mr-2" />
              Catálogo
            </Link>
          </Button>

          <Button
            variant="ghost"
            asChild
            className="text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          >
            <Link href="/scans">
              <Library className="w-4 h-4 mr-2" />
              Scans
            </Link>
          </Button>
        </div>

        <div className="flex-1 max-w-md mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-full pl-10 bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/50 backdrop-blur-sm rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div ref={themeMenuRef} className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 relative"
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
            >
              <div 
                className="w-5 h-5 rounded-full" 
                style={{ backgroundColor: `hsl(${currentTheme.colors.primary})` }} 
              />
              <span className="sr-only">Cambiar tema</span>
            </Button>

            {themeMenuOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-xl glass p-4 animate-slide-up shadow-xl">
                <h3 className="font-semibold text-foreground mb-4">Seleccionar Tema</h3>

                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Moon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Oscuros</span>
                  </div>
                  <div className="space-y-2">
                    {darkThemes.map(([id, theme]) => (
                      <button
                        key={id}
                        onClick={() => setTheme(id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                          currentTheme.name === theme.name
                            ? "bg-primary/20 ring-2 ring-primary"
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        <div className="flex gap-1">
                          <div 
                            className="w-8 h-8 rounded-full" 
                            style={{ backgroundColor: `hsl(${theme.colors.primary})` }} 
                          />
                          <div 
                            className="w-8 h-8 rounded-full" 
                            style={{ backgroundColor: `hsl(${theme.colors.accent})` }} 
                          />
                          <div 
                            className="w-8 h-8 rounded-full" 
                            style={{ backgroundColor: `hsl(${theme.colors.chart2})` }} 
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <span className="text-sm font-medium text-foreground">{theme.name}</span>
                          <p className="text-xs text-muted-foreground">{theme.description}</p>
                        </div>
                        {currentTheme.name === theme.name && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Claros</span>
                  </div>
                  <div className="space-y-2">
                    {lightThemes.map(([id, theme]) => (
                      <button
                        key={id}
                        onClick={() => setTheme(id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                          currentTheme.name === theme.name
                            ? "bg-primary/20 ring-2 ring-primary"
                            : "hover:bg-secondary/50"
                        }`}
                      >
                        <div className="flex gap-1">
                          <div 
                            className="w-8 h-8 rounded-full" 
                            style={{ backgroundColor: `hsl(${theme.colors.primary})` }} 
                          />
                          <div 
                            className="w-8 h-8 rounded-full" 
                            style={{ backgroundColor: `hsl(${theme.colors.accent})` }} 
                          />
                          <div 
                            className="w-8 h-8 rounded-full" 
                            style={{ backgroundColor: `hsl(${theme.colors.chart2})` }} 
                          />
                        </div>
                        <div className="flex-1 text-left">
                          <span className="text-sm font-medium text-foreground">{theme.name}</span>
                          <p className="text-xs text-muted-foreground">{theme.description}</p>
                        </div>
                        {currentTheme.name === theme.name && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="sr-only">Notificaciones</span>
          </Button>

          <Button
            asChild
            size="sm"
            className="gradient-primary glow-subtle hover:opacity-90 transition-opacity hidden sm:flex"
          >
            <Link href="/login">
              <LogIn className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Iniciar Sesión</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/30 animate-slide-up">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
              <Link href="/catalog">
                <Library className="w-4 h-4 mr-2" />
                Catálogo
              </Link>
            </Button>
            <Button variant="ghost" asChild className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
              <Link href="/scans">
                <Library className="w-4 h-4 mr-2" />
                Scans
              </Link>
            </Button>
            <div className="pt-3 border-t border-border/30">
              <Button asChild className="w-full gradient-primary">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <LogIn className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}