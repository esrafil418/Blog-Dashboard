"use client";

import PageHeader from "@/components/PageHeader";
import ErrorState from "@/components/states/ErrorState";
import LoadingState from "@/components/states/LoadingState";

import CommentCard from "@/features/comments/components/CommentCard";
import { useComments } from "@/features/comments/hooks/useComments";

export default function CommentsPage() {
  const { data, isLoading, isError } = useComments();

  if (isLoading) {
    return <LoadingState message="Loading comments..." />;
  }

  if (isError) {
    return <ErrorState message="Failed to load comments." />;
  }

  return (
    <main className="space-y-8">
      <PageHeader title="Comments" description="Browse all comments" />

      <div className="grid gap-4">
        {data?.comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </main>
  );
}
