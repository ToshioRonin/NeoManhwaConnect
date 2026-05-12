"use client";

import { useState } from "react";
import { UserPlus, CheckCircle2, Pen, Paintbrush, Languages, Users, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

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
      return <Pen className="w-3 h-3" />;
    case "artist":
      return <Paintbrush className="w-3 h-3" />;
    case "scan":
      return <Languages className="w-3 h-3" />;
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

const getTypeBadgeColor = (type: "author" | "artist" | "scan") => {
  switch (type) {
    case "author":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "artist":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "scan":
      return "bg-green-500/20 text-green-400 border-green-500/30";
  }
};

export function AuthorRecommendations() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "author" | "artist" | "scan">("all");

  const filteredAuthors =
    selectedFilter === "all"
      ? recommendedAuthors
      : recommendedAuthors.filter((author) => author.type === selectedFilter);

  return (
    <aside className="hidden xl:block w-80 border-l border-border/30 glass">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-4">
          <Card className="glass overflow-hidden">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-foreground">Recomendados</h2>
                  <p className="text-xs text-muted-foreground">Para seguir</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <Button
                  size="sm"
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("all")}
                  className={selectedFilter === "all" ? "gradient-primary" : ""}
                >
                  Todos
                </Button>
                <Button
                  size="sm"
                  variant={selectedFilter === "author" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("author")}
                  className={selectedFilter === "author" ? "gradient-primary" : ""}
                >
                  <Pen className="w-3 h-3 mr-1" />
                  Autores
                </Button>
                <Button
                  size="sm"
                  variant={selectedFilter === "artist" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("artist")}
                  className={selectedFilter === "artist" ? "gradient-primary" : ""}
                >
                  <Paintbrush className="w-3 h-3 mr-1" />
                  Artistas
                </Button>
                <Button
                  size="sm"
                  variant={selectedFilter === "scan" ? "default" : "outline"}
                  onClick={() => setSelectedFilter("scan")}
                  className={selectedFilter === "scan" ? "gradient-primary" : ""}
                >
                  <Languages className="w-3 h-3 mr-1" />
                  Scans
                </Button>
              </div>

              <div className="space-y-4">
                {filteredAuthors.map((author) => (
                  <div key={author.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/30 transition-all group">
                    <Avatar className="w-14 h-14 ring-2 ring-transparent group-hover:ring-primary/40 transition-all">
                      <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
                      <AvatarFallback className="bg-muted text-muted-foreground font-semibold text-lg">{author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                          {author.name}
                        </p>
                        {author.verified && (
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{author.username}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className={`text-xs px-2 py-0.5 ${getTypeBadgeColor(author.type)}`}>
                          {getTypeIcon(author.type)}
                          <span className="ml-1">{getTypeLabel(author.type)}</span>
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{author.works}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                        <Users className="w-3 h-3" />
                        {author.followers} seguidores
                      </div>
                      <Button
                        size="sm"
                        className="w-full gradient-primary glow-subtle hover:opacity-90 transition-opacity"
                      >
                        <UserPlus className="w-3 h-3 mr-1" />
                        Seguir
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </aside>
  );
}