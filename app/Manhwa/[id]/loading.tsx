import { Header } from "@/components/header";
import { ChatSidebar } from "@/components/chat-sidebar";
import { Footer } from "@/components/footer";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex container mx-auto px-4 py-8 gap-6">
        <div className="flex-1">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-border rounded w-1/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="aspect-[7/10] bg-border rounded"></div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div className="h-12 bg-border rounded w-2/3"></div>
                <div className="h-4 bg-border rounded w-1/2"></div>
                <div className="h-4 bg-border rounded w-1/2"></div>
                <div className="h-20 bg-border rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <ChatSidebar />
      </main>
      <Footer />
    </div>
  );
}
