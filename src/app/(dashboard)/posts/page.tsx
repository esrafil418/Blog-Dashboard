"use client";

import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/states/EmptyState";
import ErrorState from "@/components/states/ErrorState";
import PostCardSkeleton from "@/features/posts/components/PostCardSkeleton";
import PostList from "@/features/posts/components/PostList";
import usePosts from "@/features/posts/hooks/usePosts";
import useDebounce from "@/hooks/useDebounce";
import useSearchPagination from "@/hooks/useSearchPagination";

export default function PostsPage() {
  const { search, page, handleSearch, goToPage } =
    useSearchPagination("/posts");

  //? debounced
  const debouncedSearch = useDebounce(search, 1000);

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

  if (data.posts.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-xl font-semibold">No posts found</h2>

        <p className="text-muted-foreground mt-2">Try another search.</p>
      </div>
    );
  }

  // ? return -----------------
  return (
    <main className="space-y-6 p-6 bg-background">
      <PageHeader title="Posts" description="Browse all posts" />

      {/* search */}
      <SearchInput
        value={search}
        placeholder="Search posts..."
        onChange={handleSearch}
      />

      {/* posts list */}
      <PostList posts={data.posts} />

      {/* pagination */}
      <Pagination page={page} totalPages={totalPages} onPageChange={goToPage} />
    </main>
  );
}
