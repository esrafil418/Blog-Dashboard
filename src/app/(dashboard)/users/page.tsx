"use client";

import UserCard from "@/features/users/components/UserCard";
import { useUsers } from "@/features/users/hooks/useUsers";

export default function UsersPage() {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) {
    return (
      <main className="p-6">
        <h1>Loading users...</h1>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="p-6">
        <h1>Error loading users.</h1>
      </main>
    );
  }

  if (!data) {
    return <h1>No users found.</h1>;
  }

  return (
    <main className="space-y-6 p-6">
      <section>
        <h1 className="text-3xl font-bold">Users</h1>

        <p className="mt-2 text-muted-foreground">Browse all users.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </main>
  );
}
