"use client";

import { getPosts } from "@/services/posts.service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function PostsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <main className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Posts</h1>

      {data?.posts.map((post) => (
        <Link
          href={`/posts/${post.id}`}
          key={post.id}
          className="mb-6 rounded border p-4"
        >
          <h2 className="font-bold">{post.title}</h2>

          <p>{post.body}</p>
        </Link>
      ))}
    </main>
  );
}
