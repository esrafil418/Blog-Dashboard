"use client";

import { useState } from "react";
import { useCreatePost } from "../hooks/useCreatePost";

export default function CreatePostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const mutation = useCreatePost();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    mutation.mutate({
      title,
      body,
      userId: 1,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border p-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full rounded border p-2"
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="w-full rounded border p-2"
      />

      <button
        disabled={mutation.isPending}
        className="rounded bg-primary px-4 py-2 text-white"
      >
        {mutation.isPending ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
