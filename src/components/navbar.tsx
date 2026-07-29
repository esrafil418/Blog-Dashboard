import { useRouter } from "next/navigation";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-white px-6">
      <button
        onClick={() => router.push("/")}
        type="button"
        className="text-xl font-bold cursor-pointer text-gray-600 hover:text-black transition-all duration-300"
      >
        Blog Dashboard
      </button>

      {/* Mobile sidebar trigger - replaces Login on mobile */}
      <div className="md:hidden">
        <MobileSidebar />
      </div>

      {/* Login - hidden on mobile, visible on desktop */}
      <p className="hidden md:block text-sm text-muted-foreground cursor-pointer">
        Login
      </p>
    </header>
  );
}
