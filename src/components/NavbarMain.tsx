"use client"

import { useRouter } from "next/navigation";
import MobileSidebar from "./MobileSidebar";
import { ThemeToggle } from "./theme/dark-mode-button";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background px-6">
      <button
        onClick={() => router.push("/")}
        type="button"
        className="text-xl font-bold cursor-pointer transition-all duration-300"
      >
        Blog Dashboard
      </button>

      {/* Welcome - hidden on mobile, visible on desktop */}
      <div className="hidden md:block text-sm text-muted-foreground cursor-pointer hover:underline transition-all duration-300">
        <ThemeToggle />
      </div>

      {/* Mobile sidebar trigger - replaces Login on mobile */}
      <div className="md:hidden">
        <MobileSidebar />
      </div>
    </header>
  );
}
