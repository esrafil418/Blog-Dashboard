"use client";

import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <header className="border-b p-4 bg-gray-200">
        <button
          onClick={() => router.push("/")}
          type="button"
          className="text-2xl text-gray-700 font-bold cursor-pointer hover:text-black transition-all duration-300"
        >
          Blog Dashboard
        </button>
      </header>

      <main className="p-6 bg-gray-50">{children}</main>
    </div>
  );
}
