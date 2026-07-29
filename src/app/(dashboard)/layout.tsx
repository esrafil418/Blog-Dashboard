"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex pt-16 min-h-[calc(100vh-4rem)]">
        <Sidebar />
        <main className="flex-1 bg-gray-50">
          <div className="p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
