"use client";

import { useUser } from "@/features/users/hooks/useUser";
import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function UserPage({ params }: Props) {
  const { id } = React.use(params);

  const { data, isLoading, isError } = useUser(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error loading user.</h1>;
  }

  if (!data) {
    return <h1>User not found.</h1>;
  }

  return (
    <main className="p-6">
      <h1>{data.firstName}</h1>
    </main>
  );
}
