"use client";

import React from "react";
import EmptyState from "@/components/states/EmptyState";
import ErrorState from "@/components/states/ErrorState";
import LoadingState from "@/components/states/LoadingState";
import PostForm from "@/features/posts/components/PostForm";
import { usePost } from "@/features/posts/hooks/usePost";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function EditPostPage({ params }: Props) {
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
        description="We couldn't find this post."
      />
    );
  }

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Post</h1>

      <PostForm mode="edit" post={data} />
    </main>
  );
}
