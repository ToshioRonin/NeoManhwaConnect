"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Bell,
  BellRing,
  Calendar,
  User,
  Languages,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export function ManhwaDetail({ manhwa }: { manhwa: any }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground">
        <Link href="/catalog" className="hover:text-primary transition-colors">
          Colección Manhwas
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{manhwa.title}</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Cover Image */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden border-border bg-card">
            <div className="aspect-[7/10] relative">
              <img
                src={manhwa.cover || "/placeholder.svg"}
                alt={manhwa.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="mt-4 space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Comenzar a Leer
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className={`border-border ${
                  isFavorite ? "bg-primary/20 border-primary" : "bg-transparent"
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`w-4 h-4 mr-2 ${isFavorite ? "fill-primary" : ""}`}
                />
                Favorito
              </Button>

              <Button
                variant="outline"
                className={`border-border ${
                  isFollowing
                    ? "bg-primary/20 border-primary"
                    : "bg-transparent"
                }`}
                onClick={() => setIsFollowing(!isFollowing)}
              >
                {isFollowing ? (
                  <BellRing className="w-4 h-4 mr-2 fill-primary" />
                ) : (
                  <Bell className="w-4 h-4 mr-2" />
                )}
                Seguir
              </Button>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title and Metadata */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {manhwa.title}
            </h1>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span className="text-sm">Autor:</span>
                <span className="text-foreground font-medium">
                  {manhwa.author}
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Languages className="w-4 h-4" />
                <span className="text-sm">Scan/Traductor:</span>
                <span className="text-foreground font-medium">
                  {manhwa.translator}
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Próximo capítulo:</span>
                <span className="text-primary font-medium">
                  {manhwa.nextChapter}
                </span>
              </div>
            </div>
          </div>

          {/* Genres */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Géneros
            </h3>
            <div className="flex flex-wrap gap-2">
              {manhwa.genres.map((genre: string) => (
                <Badge
                  key={genre}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full"
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Descripción
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              {manhwa.description}
            </p>
          </div>

          {/* Chapter Count */}
          <Card className="p-4 border-border bg-card/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total de Capítulos
                </p>
                <p className="text-2xl font-bold text-primary">
                  {manhwa.totalChapters}
                </p>
              </div>
              <BookOpen className="w-10 h-10 text-primary/50" />
            </div>
          </Card>
        </div>
      </div>

      {/* Chapter List */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Listado de Capítulos
        </h2>
        <Card className="border-border bg-card divide-y divide-border">
          {manhwa.chapters.map((chapter: any) => (
            <Link
              key={chapter.number}
              href={`/manhwa/${manhwa.id}/chapter/${chapter.number}`}
              className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {chapter.number}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {chapter.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {chapter.date}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Leer
              </Button>
            </Link>
          ))}
        </Card>
      </div>
    </>
  );
}
