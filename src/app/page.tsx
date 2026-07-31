"use client";

import ActivityChart from "@/components/charts/ActivityChart";
import PostEngagementChart from "@/components/charts/PostEngagementChart";
import PostsChart from "@/components/charts/PostsChart";
import UsersChart from "@/components/charts/UsersChart";
import DashboardStatCard from "@/components/DashboardStatCard";
import DashboardStatSkeleton from "@/components/DashboardStatSkeleton";
import { DataTable } from "@/components/DataTable";
import SectionHeader from "@/components/SectionHeader";
import { ThemeToggle } from "@/components/theme/dark-mode-button";
import RecentComments from "@/features/comments/components/RecentComments";
import { useComments } from "@/features/comments/hooks/useComments";
import { columns } from "@/features/posts/components/PostsColumns"; // Import columns
import RecentPosts from "@/features/posts/components/RecentPosts";
import usePosts from "@/features/posts/hooks/usePosts";
import RecentUsers from "@/features/users/components/RecentUsers";
import { useUsers } from "@/features/users/hooks/useUsers";
import { Eye, FileText, MessageCircle, Users } from "lucide-react";

export default function Home() {
  const { data: postsData, isLoading: postsLoading } = usePosts("", 1);
  const { data: usersData, isLoading: usersLoading } = useUsers("", 1);
  const { data: commentsData, isLoading: commentsLoading } = useComments();

  const postsCount = postsData?.total ?? 0;
  const usersCount = usersData?.total ?? 0;
  const commentsCount = commentsData?.total ?? 0;

  const totalViews =
    postsData?.posts.reduce((sum, post) => sum + post.views, 0) ?? 0;

  const isLoading = postsLoading || usersLoading || commentsLoading;

  return (
    <main className="flex-1 bg-background min-h-screen p-6 md:px-10">
      <div className="space-y-8">
        <section>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
            <ThemeToggle />
          </div>

          <p className="mt-2 max-w-2xl text-muted-foreground">
            Here's an overview of your dashboard. Monitor posts, users, comments
            and quickly jump into the sections you work with most.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {isLoading ? (
            <>
              <DashboardStatSkeleton />
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
                icon={FileText}
              />

              <DashboardStatCard
                title="Users"
                value={usersCount}
                description="Registered users"
                href="/users"
                icon={Users}
              />

              <DashboardStatCard
                title="Comments"
                value={commentsCount}
                description="Total comments"
                href="/comments"
                icon={MessageCircle}
              />
              <DashboardStatCard
                title="Views"
                value={totalViews.toLocaleString()}
                description="Total post views"
                href="/posts"
                icon={Eye}
              />
            </>
          )}
        </section>

        {/* Recent Posts */}
        <section className="mt-8">
          {postsData?.posts && (
            <RecentPosts posts={postsData.posts.slice(0, 4)} />
          )}
        </section>
        {/* Recent Users */}
        <section>
          {usersData && <RecentUsers users={usersData.users.slice(0, 4)} />}
        </section>
        {/* Recent Comments */}
        <section>
          {commentsData && (
            <RecentComments comments={commentsData.comments.slice(0, 4)} />
          )}
        </section>

        {/* Charts */}
        <div className="space-y-6">
          <SectionHeader
            title="Charts"
            description="Overview of posts, users and engagement metrics"
          />

          <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {postsData && (
              <ActivityChart
                title="Posts by Tag"
                description="Top tags across all posts"
              >
                <PostsChart posts={postsData.posts} />
              </ActivityChart>
            )}

            {usersData && (
              <ActivityChart
                title="Users by Age"
                description="Age distribution of users"
              >
                <UsersChart users={usersData.users} />
              </ActivityChart>
            )}

            {postsData && (
              <ActivityChart
                title="Post Engagement"
                description="Top 10 posts by views"
              >
                <PostEngagementChart posts={postsData.posts} />
              </ActivityChart>
            )}
          </section>
        </div>

        {/* Post List and DataTable */}
        {postsData && (
          <section>
            <SectionHeader
              title="Posts Table"
              description="View Top 10 posts in a table"
            />
            <DataTable columns={columns} data={postsData.posts} />
          </section>
        )}
      </div>
    </main>
  );
}
