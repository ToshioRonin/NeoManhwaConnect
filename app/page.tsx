import { Header } from "@/components/header"
import { ChatSidebar } from "@/components/chat-sidebar"
import { Feed } from "@/components/feed"
import { AuthorRecommendations } from "@/components/author-recommendations"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex">
        <ChatSidebar />
        <Feed />
        <AuthorRecommendations />
      </main>
      <Footer />
    </div>
  )
}
