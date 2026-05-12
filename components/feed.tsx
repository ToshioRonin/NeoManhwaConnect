"use client";

import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  TrendingUp,
  Send,
  MoreHorizontal,
  Image as ImageIcon,
  Smile,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const trendingManhwas = [
  { id: 1, title: "Solo Leveling", reads: "125K", change: "+15%" },
  { id: 2, title: "Tower of God", reads: "98K", change: "+12%" },
  { id: 3, title: "The Beginning After The End", reads: "87K", change: "+8%" },
  { id: 4, title: "Omniscient Reader", reads: "76K", change: "+10%" },
  { id: 5, title: "Return of the Disaster-Class Hero", reads: "65K", change: "+18%" },
];

const posts = [
  {
    id: 1,
    user: { name: "Juan Pérez", username: "@juanperez", avatar: "/man.jpg" },
    content: '¡Acabo de terminar el capítulo 150 de "Solo Leveling"! La trama está increíble. ¿Alguien más lo está leyendo? 🔥',
    image: "/manhwa-panel.jpg",
    likes: 234,
    comments: 45,
    time: "2h",
  },
  {
    id: 2,
    user: { name: "Laura Sánchez", username: "@laurasanchez", avatar: "/diverse-woman-portrait.png" },
    content: 'Recomendación del día: "Tower of God" es una obra maestra. El desarrollo de personajes es simplemente perfecto.',
    likes: 189,
    comments: 32,
    time: "4h",
  },
  {
    id: 3,
    user: { name: "Miguel Torres", username: "@miguelt", avatar: "/man.jpg" },
    content: "¿Qué manhwa me recomiendan para empezar? Soy nuevo en esto y quiero algo con buena acción 💪",
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
          <Card className="glass">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <h2 className="font-bold text-lg text-foreground">Trending</h2>
                <Badge variant="secondary" className="ml-auto text-xs bg-primary/10 text-primary border-primary/20">
                  24h
                </Badge>
              </div>
              <div className="space-y-2">
                {trendingManhwas.map((manhwa, index) => (
                  <div
                    key={manhwa.id}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/30 transition-all cursor-pointer group"
                  >
                    <span className="text-2xl font-bold text-primary/50 w-6">{index + 1}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {manhwa.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{manhwa.reads} lecturas</p>
                    </div>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {manhwa.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="glass">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                  <AvatarImage src="/abstract-geometric-shapes.png" />
                  <AvatarFallback className="bg-muted text-muted-foreground font-semibold">Tú</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <button className="w-full text-left px-4 py-3 rounded-xl bg-secondary/30 text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-all border border-transparent hover:border-border/50">
                    ¿Qué estás leyendo hoy?
                  </button>
                  <div className="flex items-center gap-2 mt-3">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                      <ImageIcon className="w-4 h-4 mr-1" />
                      Imagen
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                      <Smile className="w-4 h-4 mr-1" />
                      Emoción
                    </Button>
                    <Button size="sm" className="ml-auto gradient-primary glow-subtle">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {posts.map((post, index) => (
            <Card key={post.id} className="glass overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 ring-2 ring-primary/20 transition-all hover:ring-primary/40">
                      <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                      <AvatarFallback className="bg-muted text-muted-foreground font-semibold">{post.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{post.user.name}</p>
                      <p className="text-xs text-muted-foreground">{post.user.username} · {post.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

                {post.image && (
                  <div className="rounded-2xl overflow-hidden mb-4 border border-border/30">
                    <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full h-64 object-cover" />
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 group">
                    <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 group">
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 group">
                    <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 group">
                    <Bookmark className="w-4 h-4 group-hover:scale-110 transition-transform" />
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