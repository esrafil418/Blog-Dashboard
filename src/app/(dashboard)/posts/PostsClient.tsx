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

export default function PostsClient() {
  const { search, page, handleSearch, goToPage } =
    useSearchPagination("/posts");

  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError } = usePosts(debouncedSearch, page);

  const totalPages = data ? Math.ceil(data.total / data.limit) : 1;

  if (isLoading) {
    return (
      <div className="grid gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </div>
    );
  }

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
        <p className="mt-2 text-muted-foreground">Try another search.</p>
      </div>
    );
  }

  return (
    <main className="space-y-6 bg-background p-6">
      <PageHeader title="Posts" description="Browse all posts" />

      <SearchInput
        value={search}
        placeholder="Search posts..."
        onChange={handleSearch}
      />

      <PostList posts={data.posts} />

      <Pagination page={page} totalPages={totalPages} onPageChange={goToPage} />
    </main>
  );
}
