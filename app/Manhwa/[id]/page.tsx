import Link from "next/link";
import { ChatSidebar } from "@/components/chat-sidebar";
import { ManhwaDetail } from "@/components/manhwa-detail";

const manhwaData: Record<number, any> = {
  1: {
    id: 1,
    title: "Solo Leveling",
    author: "Chugong",
    translator: "Reaper Scans",
    cover: "/solo-leveling-manhwa-cover.jpg",
    description:
      "En un mundo donde cazadores, humanos que poseen habilidades mágicas, deben luchar contra monstruos mortales para proteger a la humanidad de cierta destrucción, un notoriamente débil cazador llamado Sung Jinwoo se encuentra en una lucha constante por sobrevivir. Un día, después de un brutal encuentro en una mazmorra de alto rango, recibe un programa misterioso llamado el Sistema que lo convierte en un 'jugador' y le da la única habilidad de subir de nivel sin límites.",
    genres: ["Acción", "Fantasía", "Aventura", "Sobrenatural"],
    totalChapters: 179,
    nextChapter: "15 de Enero, 2025",
    chapters: [
      { number: 179, title: "Capítulo Final", date: "2024-12-20" },
      { number: 178, title: "El Emperador de las Sombras", date: "2024-12-18" },
      { number: 177, title: "La Batalla Final", date: "2024-12-15" },
      { number: 176, title: "Poder Absoluto", date: "2024-12-13" },
      { number: 175, title: "El Regreso del Rey", date: "2024-12-10" },
    ],
  },
};

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default async function ManhwaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const manhwaId = Number.parseInt(resolvedParams.id);
  const manhwa = manhwaData[manhwaId] || manhwaData[1];

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="mb-6 text-sm text-muted-foreground">
            <Link href="/catalog" className="hover:text-primary transition-colors">
              Colección Manhwas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{manhwa.title}</span>
          </div>

          <ManhwaDetail manhwa={manhwa} />
        </div>

        <ChatSidebar />
      </div>
    </main>
  );
}