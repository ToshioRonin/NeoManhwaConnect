"use client";

import { MessageCircle, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const chats = [
  {
    id: 1,
    name: "Elena García",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "¿Has leído el nuevo capítulo?",
    time: "2m",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    avatar: "/man.jpg",
    lastMessage: "Me encanta este manhwa",
    time: "15m",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Ana Martínez",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "Gracias por la recomendación",
    time: "1h",
    unread: 1,
    online: false,
  },
  {
    id: 4,
    name: "Diego López",
    avatar: "/man.jpg",
    lastMessage: "¿Cuál es tu favorito?",
    time: "3h",
    unread: 0,
    online: true,
  },
  {
    id: 5,
    name: "María Silva",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "El final fue increíble",
    time: "5h",
    unread: 0,
    online: false,
  },
];

export function ChatSidebar() {
  return (
    <aside className="w-full md:w-80 border-r border-border/30 glass hidden lg:flex">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-border/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-semibold text-foreground text-lg">Mensajes</h2>
            <Badge variant="secondary" className="ml-auto bg-primary/20 text-primary border-primary/30">5</Badge>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar conversaciones..."
              className="pl-10 bg-secondary/30 border-border/50 text-foreground placeholder:text-muted-foreground rounded-lg"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                className="w-full p-4 rounded-xl hover:bg-secondary/30 transition-all text-left flex items-start gap-3 group relative"
              >
                <div className="relative">
                  <Avatar className="w-12 h-12 ring-2 ring-transparent group-hover:ring-primary/40 transition-all">
                    <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                    <AvatarFallback className="bg-muted text-muted-foreground font-semibold">{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors">
                      {chat.name}
                    </span>
                    <span className="text-xs text-muted-foreground">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="flex-shrink-0 ml-2 w-6 h-6 rounded-full gradient-primary text-primary-foreground text-xs flex items-center justify-center font-semibold shadow-lg">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
}