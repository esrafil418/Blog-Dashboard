"use client";

import DashboardStatCard from "@/components/DashboardStatCard";
import DashboardStatSkeleton from "@/components/DashboardStatSkeleton";
import RecentPosts from "@/components/RecentPosts";
import { ThemeToggle } from "@/components/theme/dark-mode-button";
import { useComments } from "@/features/comments/hooks/useComments";
import usePosts from "@/features/posts/hooks/usePosts";
import { useUsers } from "@/features/users/hooks/useUsers";

export default function Home() {
  const { data: postsData, isLoading: postsLoading } = usePosts("", 1);
  const { data: usersData, isLoading: usersLoading } = useUsers();
  const { data: commentsData, isLoading: commentsLoading } = useComments();

  const postsCount = postsData?.total ?? 0;
  const usersCount = usersData?.total ?? 0;
  const commentsCount = commentsData?.total ?? 0;

  const isLoading = postsLoading || usersLoading || commentsLoading;

  return (
    <main className="flex-1 bg-background min-h-screen p-6 md:px-10">
      <div className="space-y-8">
        <section>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <ThemeToggle />
          </div>

          <p className="mt-2 text-muted-foreground">
            Manage your content and explore your data.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {isLoading ? (
            <>
              <DashboardStatSkeleton />
              <DashboardStatSkeleton />
              <DashboardStatSkeleton />
            </>
          ) : (
            <>
              <DashboardStatCard
                title="Posts"
                value={postsCount}
                description="Total posts"
                href="/posts"
              />

              <DashboardStatCard
                title="Users"
                value={usersCount}
                description="Registered users"
                href="/users"
              />

              <DashboardStatCard
                title="Comments"
                value={commentsCount}
                description="Total comments"
                href="/comments"
              />
            </>
          )}
        </section>

        <section className="mt-8">
          {postsData?.posts && <RecentPosts posts={postsData.posts} />}
        </section>
      </div>
    </main>
  );
}
