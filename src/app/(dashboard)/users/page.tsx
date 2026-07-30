"use client";

import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/states/EmptyState";
import ErrorState from "@/components/states/ErrorState";
import LoadingState from "@/components/states/LoadingState";
import UserList from "@/features/users/components/UserList";
import { useUsers } from "@/features/users/hooks/useUsers";
import useDebounce from "@/hooks/useDebounce";
import useSearchPagination from "@/hooks/useSearchPagination";

export default function UsersPage() {
  const { search, page, handleSearch, goToPage } =
    useSearchPagination("/users");

  const debouncedSearch = useDebounce(search, 1000);
  const { data, isLoading, isError } = useUsers(debouncedSearch, page);
  const totalPages = data ? Math.ceil(data.total / data.limit) : 1;

  // ? conditions --------------------
  if (isLoading) {
    return <LoadingState message="Loading users..." />;
  }

  if (isError) {
    return <ErrorState message="Failed to load users." />;
  }

  // No data
  if (!data) {
    return (
      <EmptyState
        title="Users not found"
        description="We couldn't load users."
      />
    );
  }

  // Empty array
  if (data.users.length === 0) {
    return (
      <EmptyState title="No users found" description="Try another search." />
    );
  }

  // ? return --------------------
  return (
    <main className="space-y-6 p-6 bg-background">
      <PageHeader title="Users" description="Browse all users" />

      {/* search */}
      <SearchInput
        value={search}
        placeholder="Search users..."
        onChange={handleSearch}
      />

      {/* users list */}
      <UserList users={data.users} />

      {/* pagination */}
      <Pagination page={page} totalPages={totalPages} onPageChange={goToPage} />
    </main>
  );
}
