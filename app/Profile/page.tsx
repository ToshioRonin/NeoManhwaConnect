import { Header } from "@/components/header";
import { ChatSidebar } from "@/components/chat-sidebar";
import { UserProfile } from "@/components/user-profile";
import { Footer } from "@/components/footer";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex">
        <ChatSidebar />
        <UserProfile />
      </main>
      <Footer />
    </div>
  );
}
