"use client";

import { useState } from "react";
import {
  UserPlus,
  CheckCircle2,
  Pen,
  Paintbrush,
  Languages,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const recommendedAuthors = [
  {
    id: 1,
    name: "SIU",
    username: "@siu_official",
    avatar: "/man.jpg",
    works: "Tower of God",
    followers: "2.5M",
    verified: true,
    type: "author" as const,
  },
  {
    id: 2,
    name: "Redice Studio",
    username: "@redice_studio",
    avatar: "/diverse-woman-portrait.png",
    works: "The Greatest Estate Developer",
    followers: "950K",
    verified: true,
    type: "artist" as const,
  },
  {
    id: 3,
    name: "Flame Scans",
    username: "@flamescans_team",
    avatar: "/man.jpg",
    works: "1500+ traducciones",
    followers: "820K",
    verified: true,
    type: "scan" as const,
  },
  {
    id: 4,
    name: "Chugong",
    username: "@chugong_author",
    avatar: "/man.jpg",
    works: "Solo Leveling",
    followers: "3.1M",
    verified: true,
    type: "author" as const,
  },
  {
    id: 5,
    name: "DUBU",
    username: "@dubu_artist",
    avatar: "/diverse-woman-portrait.png",
    works: "Solo Leveling (Arte)",
    followers: "2.4M",
    verified: true,
    type: "artist" as const,
  },
];

const getTypeIcon = (type: "author" | "artist" | "scan") => {
  switch (type) {
    case "author":
      return <Pen className="w-4 h-4 text-primary flex-shrink-0" />;
    case "artist":
      return <Paintbrush className="w-4 h-4 text-primary flex-shrink-0" />;
    case "scan":
      return <Languages className="w-4 h-4 text-primary flex-shrink-0" />;
  }
};

const getTypeLabel = (type: "author" | "artist" | "scan") => {
  switch (type) {
    case "author":
      return "Autor";
    case "artist":
      return "Artista";
    case "scan":
      return "Scan";
  }
};

export function AuthorRecommendations() {
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "author" | "artist" | "scan"
  >("all");

  const filteredAuthors =
    selectedFilter === "all"
      ? recommendedAuthors
      : recommendedAuthors.filter((author) => author.type === selectedFilter);

  return (
    <aside className="hidden xl:block w-80 border-l border-border bg-card">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-4">
          <Card className="p-4 bg-background border-border">
            <h2 className="font-bold text-lg text-foreground mb-4">
              Mis recomendaciones
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              <Button
                size="sm"
                variant={selectedFilter === "all" ? "default" : "outline"}
                onClick={() => setSelectedFilter("all")}
                className={
                  selectedFilter === "all"
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                Todos
              </Button>
              <Button
                size="sm"
                variant={selectedFilter === "author" ? "default" : "outline"}
                onClick={() => setSelectedFilter("author")}
                className={
                  selectedFilter === "author"
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                <Pen className="w-3 h-3 mr-1" />
                Autores
              </Button>
              <Button
                size="sm"
                variant={selectedFilter === "artist" ? "default" : "outline"}
                onClick={() => setSelectedFilter("artist")}
                className={
                  selectedFilter === "artist"
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                <Paintbrush className="w-3 h-3 mr-1" />
                Artistas
              </Button>
              <Button
                size="sm"
                variant={selectedFilter === "scan" ? "default" : "outline"}
                onClick={() => setSelectedFilter("scan")}
                className={
                  selectedFilter === "scan"
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                <Languages className="w-3 h-3 mr-1" />
                Scans
              </Button>
            </div>

            <div className="space-y-4">
              {filteredAuthors.map((author) => (
                <div key={author.id} className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={author.avatar || "/placeholder.svg"}
                      alt={author.name}
                    />
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      {author.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-sm text-foreground truncate">
                        {author.name}
                      </p>
                      {getTypeIcon(author.type)}
                      {author.verified && (
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {author.username} · {getTypeLabel(author.type)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {author.works}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {author.followers} seguidores
                    </p>
                    <Button
                      size="sm"
                      className="mt-2 w-full bg-primary text-primary-foreground hover:bg-[#9D77FF]"
                    >
                      <UserPlus className="w-3 h-3 mr-1" />
                      Seguir
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </ScrollArea>
    </aside>
  );
}
