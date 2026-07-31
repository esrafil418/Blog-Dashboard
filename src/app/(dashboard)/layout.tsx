"use client";

import Navbar from "@/components/NavbarMain";
import Sidebar from "@/components/SidebarMain";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex pt-16 min-h-[calc(100vh-4rem)]">
        <Sidebar />
        <main className="flex-1">
          <div className="p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
