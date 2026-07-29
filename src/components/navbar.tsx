import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <button
        onClick={() => router.push("/")}
        type="button"
        className="text-xl font-bold cursor-pointer text-gray-600 hover:text-black transition-all duration-300"
      >
        Blog Dashboard
      </button>

      <p className="text-sm text-muted-foreground cursor-pointer">Sign up </p>
    </header>
  );
}
