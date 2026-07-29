"use client";

import { useState } from "react";
import useCreatePost from "../hooks/useCreatePost";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useCreatePost();

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate({
      title,
      body,
    });
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        type="text"
        className="w-full border p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button
        type="submit"
        className="rounded bg-black px-4 py-2 text-white"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
