"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Search, Upload, Sparkles, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function AISearchPage() {
  const [query, setQuery] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isDraggingOverTextarea, setIsDraggingOverTextarea] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setUploadedFileName(file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOverTextarea(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDraggingOverTextarea(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOverTextarea(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setUploadedFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex container mx-auto px-4 py-8 gap-6">
        <div className="flex-1 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Búsqueda con IA
                </h1>
                <p className="text-muted-foreground">
                  Encuentra manhwas usando inteligencia artificial
                </p>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-card border-border mb-6">
            <div className="space-y-4">
              <div
                className="relative"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
              >
                {isDraggingOverTextarea && (
                  <div className="absolute inset-0 bg-primary/20 border-2 border-dashed border-primary rounded-lg flex items-center justify-center pointer-events-none">
                    <p className="text-primary font-semibold">
                      Suelta la imagen aquí para subirla
                    </p>
                  </div>
                )}

                <Textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pregunta por un manhwa..."
                  className="min-h-[120px] bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary resize-none"
                />
              </div>

              {uploadedImage && uploadedFileName && (
                <Card className="p-4 border-l-4 border-primary bg-secondary/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 truncate">
                    <ImageIcon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground truncate">
                      Archivo cargado: {uploadedFileName}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => {
                      setUploadedImage(null);
                      setUploadedFileName(null);
                    }}
                  >
                    Eliminar
                  </Button>
                </Card>
              )}

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-border text-foreground hover:bg-secondary bg-transparent"
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Subir imagen
                </Button>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />

                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-[#9D77FF]">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar con IA
                </Button>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Sugerencias de búsqueda
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "⚔️",
                  title: "Acción y Aventura",
                  query: "Manhwas de acción con protagonista fuerte",
                },
                {
                  icon: "💖",
                  title: "Romance",
                  query: "Romance coreano con giros inesperados",
                },
                {
                  icon: "🎭",
                  title: "Drama Histórico",
                  query: "Manhwas históricos con reencarnación",
                },
                {
                  icon: "🌟",
                  title: "Fantasía",
                  query: "Mundo de fantasía con magia y dungeons",
                },
              ].map((suggestion, idx) => (
                <Card
                  key={idx}
                  className="p-4 bg-card border-border hover:border-primary cursor-pointer transition-all"
                  onClick={() => setQuery(suggestion.query)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{suggestion.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {suggestion.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {suggestion.query}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mt-6 p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <ImageIcon className="w-5 h-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Búsqueda por imagen
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sube una captura de pantalla o imagen de un manhwa y nuestra
                  IA te ayudará a identificarlo o encontrar similares. También
                  puedes describir lo que buscas con texto.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
