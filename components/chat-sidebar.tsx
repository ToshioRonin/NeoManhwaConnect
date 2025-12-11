"use client";

import { MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const chats = [
  {
    id: 1,
    name: "Elena García",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "¿Has leído el nuevo capítulo?",
    time: "2m",
    unread: 2,
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    avatar: "/man.jpg",
    lastMessage: "Me encanta este manhwa",
    time: "15m",
    unread: 0,
  },
  {
    id: 3,
    name: "Ana Martínez",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "Gracias por la recomendación",
    time: "1h",
    unread: 1,
  },
  {
    id: 4,
    name: "Diego López",
    avatar: "/man.jpg",
    lastMessage: "¿Cuál es tu favorito?",
    time: "3h",
    unread: 0,
  },
  {
    id: 5,
    name: "María Silva",
    avatar: "/diverse-woman-portrait.png",
    lastMessage: "El final fue increíble",
    time: "5h",
    unread: 0,
  },
];

export function ChatSidebar() {
  return (
    <aside className="w-full md:w-80 border-r border-border bg-card hidden lg:block">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">Conversaciones</h2>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2 space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                className="w-full p-3 rounded-lg hover:bg-secondary transition-colors text-left flex items-start gap-3 group"
              >
                <Avatar className="w-10 h-10 ring-2 ring-transparent group-hover:ring-primary transition-all">
                  <AvatarImage
                    src={chat.avatar || "/placeholder.svg"}
                    alt={chat.name}
                  />
                  <AvatarFallback className="bg-muted text-muted-foreground">
                    {chat.name[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm text-foreground truncate">
                      {chat.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {chat.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground truncate">
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <span className="flex-shrink-0 ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
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
