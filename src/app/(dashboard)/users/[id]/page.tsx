"use client";

import { Button } from "@/components/ui/button";
import UserPosts from "@/features/posts/components/UserPosts";
import { useUserPosts } from "@/features/posts/hooks/useUserPosts";
import UserProfile from "@/features/users/components/UserProfile";
import { useUser } from "@/features/users/hooks/useUser";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function UserPage({ params }: Props) {
  const { id } = React.use(params);
  const router = useRouter();
  const { data, isLoading, isError } = useUser(id);
  const { data: postsData, isLoading: postsLoading } = useUserPosts(id);

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
    <main className="mx-auto max-w-4xl space-y-6 p-6">
      <Button
        className="cursor-pointer"
        variant="outline"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to users
      </Button>

      <UserProfile user={data} />

      {postsLoading ? (
        <p>Loading posts...</p>
      ) : (
        postsData && <UserPosts posts={postsData.posts} />
      )}
    </main>
  );
}
