"use client";

import PageHeader from "@/components/PageHeader";
import EmptyState from "@/components/states/EmptyState";
import ErrorState from "@/components/states/ErrorState";
import LoadingState from "@/components/states/LoadingState";
import { Input } from "@/components/ui/input";
import UserCard from "@/features/users/components/UserCard";
import { useUsers } from "@/features/users/hooks/useUsers";
import useDebounce from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";

export default function UsersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const page = Number(searchParams.get("page") ?? "1");

  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError } = useUsers(debouncedSearch, page);

  const totalPages = data ? Math.ceil(data.total / data.limit) : 1;

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    router.push(`/users?${params.toString()}`, {
      scroll: false,
    });
  }

  function goToPage(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(newPage));

    router.push(`/users?${params.toString()}`, {
      scroll: false,
    });
  }

  if (!data) {
    return (
      <EmptyState
        title="Users not found"
        description="We couldn't load users."
      />
    );
  }

  if (data.users.length === 0) {
    return (
      <EmptyState title="No users found" description="Try another search." />
    );
  }

  // ? conditions --------------------
  if (isLoading) {
    return <LoadingState message="Loading users..." />;
  }

  if (isError) {
    return <ErrorState message="Failed to load users." />;
  }

  if (!data || data.users.length === 0) {
    return (
      <EmptyState title="No users found" description="Try another search." />
    );
  }

  // ? return --------------------
  return (
    <main className="space-y-6 p-6 bg-background">
      <PageHeader title="Users" description="Browse all users" />

      {/* search */}
      <Input
        placeholder="Search users..."
        value={search}
        onChange={handleSearch}
      />

      {/* users list */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>

      {/* pagination */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="cursor-pointer rounded border px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          className="cursor-pointer rounded border px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
