"use client";

import ErrorMessage from "@/components/ErrorMessage";
import PostCard from "@/features/posts/components/PostCard";
import PostCardSkeleton from "@/features/posts/components/PostCardSkeleton";
import usePosts from "@/features/posts/hooks/usePosts";
import useDebounce from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";

export default function PostsPage() {
  // ? searchParams
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const page = Number(searchParams.get("page") ?? "1");
  // debounced
  const debouncedSearch = useDebounce(search, 1000);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    router.push(`/posts?search=${encodeURIComponent(value)}`);
  }

  // ? Tanstack Query -----------------
  const { data, isLoading, isError } = usePosts(debouncedSearch, page);

  // Loading
  if (isLoading) {
    return (
      <div className="grid gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Error
  if (isError) {
    return <ErrorMessage message="Could not load posts" />;
  }

  if (data?.posts.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">No posts found</h2>

        <p className="text-muted-foreground mt-2">Try another search.</p>
      </div>
    );
  }

  // ? return -----------------
  return (
    <main className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Posts</h1>

      {/* search */}
      <input
        className="mb-6 w-full rounded border p-2"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />

      {/* posts list */}
      <div className="grid gap-4">
        {data?.posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </main>
  );
}
