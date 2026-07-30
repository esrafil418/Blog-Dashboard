"use client";

import EmptyState from "@/components/states/EmptyState";
import ErrorState from "@/components/states/ErrorState";
import LoadingState from "@/components/states/LoadingState";
import PostDetail from "@/features/posts/components/PostDetail";
import { usePost } from "@/features/posts/hooks/usePost";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function PostDetailPage({ params }: Props) {
  const router = useRouter();

  const { id } = React.use(params);

  const { data, isLoading, isError } = usePost(id);

  if (isLoading) {
    return <LoadingState message="Loading post..." />;
  }

  if (isError) {
    return <ErrorState message="Failed to load post." />;
  }

  if (!data) {
    return (
      <EmptyState
        title="Post not found"
        description="We couldn't find the requested post."
      />
    );
  }

  return (
    <div className="bg-background">
      <button
        type="button"
        onClick={() => router.back()}
        className="mb-4 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200"
      >
        ← Back to posts
      </button>
      <main className="min-h-screen">{data && <PostDetail post={data} />}</main>
    </div>
  );
}
