"use client";

import PostCard from "@/features/posts/components/PostCard";
import usePosts from "@/features/posts/hooks/usePosts";
import useDebounce from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";

export default function PostsPage() {
  // ? searchParams
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  // debounced
  const debouncedSearch = useDebounce(search, 500);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    router.push(`/posts?search=${encodeURIComponent(value)}`);
  }

  // ? Tanstack Query -----------------
  const { data, isLoading, isError } = usePosts(debouncedSearch);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong.</h1>;
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
