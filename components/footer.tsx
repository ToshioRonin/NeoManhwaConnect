import { Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border/30 gradient-hero">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <span className="font-bold text-xl text-foreground">NeoManhwa</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu comunidad favorita para descubrir, leer y compartir los mejores manhwas. Hecho con <Heart className="w-3 h-3 inline text-primary fill-primary" /> para fans del manhwa.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Explorar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                  Catálogo
                  <span className="text-primary/50">→</span>
                </Link>
              </li>
              <li>
                <Link href="/scans" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                  Scans
                  <span className="text-primary/50">→</span>
                </Link>
              </li>
              <li>
                <Link href="/authors" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                  Autores
                  <span className="text-primary/50">→</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Comunidad</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Síguenos</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl glass hover:bg-primary/20 transition-all flex items-center justify-center text-muted-foreground hover:text-primary group">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass hover:bg-primary/20 transition-all flex items-center justify-center text-muted-foreground hover:text-primary group">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass hover:bg-primary/20 transition-all flex items-center justify-center text-muted-foreground hover:text-primary group">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl glass hover:bg-primary/20 transition-all flex items-center justify-center text-muted-foreground hover:text-primary group">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Únete a nuestra comunidad en redes sociales.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 NeoManhwa. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Términos</Link>
            <span className="text-border">|</span>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacidad</Link>
            <span className="text-border">|</span>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}