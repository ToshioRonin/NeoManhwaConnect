"use client";

import {
  MapPin,
  Calendar,
  LinkIcon,
  Heart,
  MessageCircle,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const userPosts = [
  {
    id: 1,
    content:
      'Terminé "The Beginning After The End" y no puedo creer lo que acaba de pasar en el último capítulo. ¡Necesito hablar con alguien sobre esto! 😱',
    likes: 342,
    comments: 56,
    time: "1d",
  },
  {
    id: 2,
    content:
      "Mi lista de manhwas favoritos actualizada: 1. Solo Leveling 2. Tower of God 3. The Beginning After The End 4. Omniscient Reader 5. Eleceed",
    likes: 289,
    comments: 43,
    time: "3d",
  },
  {
    id: 3,
    content:
      '¿Alguien más piensa que "Omniscient Reader\'s Viewpoint" es uno de los mejores manhwas de los últimos años? La narrativa es simplemente perfecta.',
    likes: 421,
    comments: 78,
    time: "5d",
  },
];

export function UserProfile() {
  return (
    <div className="flex-1 overflow-hidden">
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="max-w-3xl mx-auto">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-[#7C4DFF] to-[#5E36CC]"></div>

          {/* Profile Info */}
          <div className="px-4 pb-4">
            <div className="relative mb-16">
              <Avatar className="w-32 h-32 absolute -top-16 border-4 border-background ring-2 ring-primary">
                <AvatarImage src="/abstract-geometric-shapes.png" />
                <AvatarFallback className="bg-muted text-muted-foreground text-3xl">
                  MR
                </AvatarFallback>
              </Avatar>

              <div className="flex justify-end pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-[#9D77FF]">
                  Editar Perfil
                </Button>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  María Rodríguez
                </h1>
                <p className="text-muted-foreground">@mariarodriguez</p>
              </div>

              <p className="text-foreground leading-relaxed">
                Amante de los manhwas y el webtoon. Siempre buscando la próxima
                gran historia para leer. 📚✨
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Madrid, España</span>
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <a href="#" className="text-primary hover:underline">
                    manhwalover.com
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Se unió en marzo 2023</span>
                </div>
              </div>

              <div className="flex gap-6 text-sm">
                <div>
                  <span className="font-bold text-foreground">1,234</span>
                  <span className="text-muted-foreground ml-1">Siguiendo</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">5,678</span>
                  <span className="text-muted-foreground ml-1">Seguidores</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="w-full bg-card border-b border-border rounded-none h-auto p-0">
                <TabsTrigger
                  value="posts"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  Publicaciones
                </TabsTrigger>
                <TabsTrigger
                  value="likes"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  Me Gusta
                </TabsTrigger>
                <TabsTrigger
                  value="media"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  Media
                </TabsTrigger>
                <TabsTrigger
                  value="stats"
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  Estadísticas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-4 space-y-4">
                {userPosts.map((post) => (
                  <Card key={post.id} className="p-4 bg-card border-border">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="/abstract-geometric-shapes.png" />
                        <AvatarFallback className="bg-muted text-muted-foreground">
                          MR
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-sm text-foreground">
                            María Rodríguez
                          </p>
                          <span className="text-muted-foreground text-xs">
                            · {post.time}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          @mariarodriguez
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground mb-3 leading-relaxed">
                      {post.content}
                    </p>

                    <div className="flex items-center gap-6 text-muted-foreground">
                      <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="likes" className="mt-4">
                <div className="text-center py-12 text-muted-foreground">
                  <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No hay publicaciones con me gusta todavía</p>
                </div>
              </TabsContent>

              <TabsContent value="media" className="mt-4">
                <div className="text-center py-12 text-muted-foreground">
                  <p>No hay contenido multimedia todavía</p>
                </div>
              </TabsContent>

              <TabsContent value="stats" className="mt-4">
                <div className="space-y-4">
                  <Card className="p-6 bg-card border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          Manhwas Leídos
                        </h3>
                        <p className="text-3xl font-bold text-primary mb-2">
                          156
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Total de manhwas completados
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          Capítulos Esta Semana
                        </h3>
                        <p className="text-3xl font-bold text-primary mb-2">
                          47
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-green-500 font-medium">
                            +12%
                          </span>{" "}
                          más que la semana pasada
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          Géneros Favoritos
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                            Acción
                          </span>
                          <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                            Fantasía
                          </span>
                          <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                            Drama
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
