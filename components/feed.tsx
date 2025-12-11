"use client";

import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const trendingManhwas = [
  { id: 1, title: "Solo Leveling", reads: "125K", change: "+15%" },
  { id: 2, title: "Tower of God", reads: "98K", change: "+12%" },
  { id: 3, title: "The Beginning After The End", reads: "87K", change: "+8%" },
  { id: 4, title: "Omniscient Reader", reads: "76K", change: "+10%" },
  {
    id: 5,
    title: "Return of the Disaster-Class Hero",
    reads: "65K",
    change: "+18%",
  },
];

const posts = [
  {
    id: 1,
    user: { name: "Juan Pérez", username: "@juanperez", avatar: "/man.jpg" },
    content:
      '¡Acabo de terminar el capítulo 150 de "Solo Leveling"! La trama está increíble. ¿Alguien más lo está leyendo? 🔥',
    image: "/manhwa-panel.jpg",
    likes: 234,
    comments: 45,
    time: "2h",
  },
  {
    id: 2,
    user: {
      name: "Laura Sánchez",
      username: "@laurasanchez",
      avatar: "/diverse-woman-portrait.png",
    },
    content:
      'Recomendación del día: "Tower of God" es una obra maestra. El desarrollo de personajes es simplemente perfecto.',
    likes: 189,
    comments: 32,
    time: "4h",
  },
  {
    id: 3,
    user: { name: "Miguel Torres", username: "@miguelt", avatar: "/man.jpg" },
    content:
      "¿Qué manhwa me recomiendan para empezar? Soy nuevo en esto y quiero algo con buena acción 💪",
    likes: 156,
    comments: 78,
    time: "6h",
  },
];

export function Feed() {
  return (
    <div className="flex-1 overflow-hidden">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="max-w-2xl mx-auto p-4 space-y-4">
          <Card className="p-4 bg-card border-border">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="font-bold text-lg text-foreground">
                Más leídos en 24h
              </h2>
            </div>
            <div className="space-y-2">
              {trendingManhwas.map((manhwa, index) => (
                <div
                  key={manhwa.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                >
                  <span className="text-2xl font-bold text-primary w-8">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-foreground">
                      {manhwa.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {manhwa.reads} lecturas
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {manhwa.change}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* New Post Card */}
          <Card className="p-4 bg-card border-border">
            <div className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/abstract-geometric-shapes.png" />
                <AvatarFallback className="bg-muted text-muted-foreground">
                  Tú
                </AvatarFallback>
              </Avatar>
              <button className="flex-1 text-left px-4 py-3 rounded-lg bg-input text-muted-foreground hover:bg-secondary transition-colors">
                ¿Qué estás leyendo hoy?
              </button>
            </div>
          </Card>

          {/* Feed Posts */}
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden bg-card border-border"
            >
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={post.user.avatar || "/placeholder.svg"}
                      alt={post.user.name}
                    />
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      {post.user.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-foreground">
                      {post.user.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.user.username} · {post.time}
                    </p>
                  </div>
                </div>

                <p className="text-foreground mb-3 leading-relaxed">
                  {post.content}
                </p>

                {post.image && (
                  <div className="rounded-lg overflow-hidden mb-3">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Post content"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary hover:bg-secondary"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary hover:bg-secondary"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary hover:bg-secondary"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary hover:bg-secondary"
                  >
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
