"use client";

import MobileSidebar from "@/components/MobileSidebar";
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

      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50">
          <div className="border-b bg-white p-4 md:hidden">
            <MobileSidebar />
          </div>

          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
