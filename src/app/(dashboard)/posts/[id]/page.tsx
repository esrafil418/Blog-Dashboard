"use client";

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
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error loading post.</h1>;
  }

  return (
    <>
      <button
        onClick={() => router.back()}
        className="mb-4 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-all duration-200"
      >
        ← Back to posts
      </button>
      <main className="min-h-screen">{data && <PostDetail post={data} />}</main>
    </>
  );
}
