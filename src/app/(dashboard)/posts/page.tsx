"use client";

import EmptyState from "@/components/states/EmptyState";
import ErrorState from "@/components/states/ErrorState";
import CreatePostForm from "@/features/posts/components/CreatePostPage";
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
  //? debounced
  const debouncedSearch = useDebounce(search, 1000);

  //? handle Search
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    const newUrl = `/posts?${params.toString()}`;

    if (newUrl !== window.location.pathname + window.location.search) {
      router.push(newUrl, { scroll: false });
    }
  }

  // ? pagination
  function goToPage(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));

    router.push(`/posts?${params.toString()}`, { scroll: false });
  }

  // ? Tanstack Query -----------------
  const { data, isLoading, isError } = usePosts(debouncedSearch, page);

  const totalPages = data ? Math.ceil(data.total / data.limit) : 1;

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
    return <ErrorState message="Failed to load posts." />;
  }

  if (!data) {
    return (
      <EmptyState
        title="Post not found"
        description="We couldn't find the requested posts."
      />
    );
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
    <main className="p-6 bg-background">
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
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="rounded border px-4 py-2 disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          className="rounded border px-4 py-2 disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </main>
  );
}
