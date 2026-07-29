"use client";

import DashboardStatCard from "@/components/DashboardStatCard";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen p-6">
      <div className="space-y-8">
        <section>
          <h1 className="text-3xl font-bold">Welcome back</h1>

          <p className="mt-2 text-muted-foreground">
            Manage your content and explore your data.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <DashboardStatCard
            title="Posts"
            value="251"
            description="Total posts"
          />

          <DashboardStatCard
            title="Users"
            value="208"
            description="Registered users"
          />

          <DashboardStatCard
            title="Comments"
            value="340"
            description="Total comments"
          />
        </section>
      </div>
    </main>
  );
}
