"use client";

import { getPost } from "@/services/posts.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function PostDetailPage({ params }: Props) {
  const { id } = React.use(params);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error loading post.</h1>;
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{data?.title}</h1>

      <p className="mt-4">{data?.body}</p>
    </main>
  );
}
