"use client";

import PostCard from "@/features/posts/components/PostCard";
import usePosts from "@/features/posts/hooks/usePosts";

export default function PostsPage() {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <main className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Posts</h1>

      <div className="grid gap-4">
        {data?.posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </main>
  );
}
