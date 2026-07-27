import { PostsResponse } from "@/types/post";

export async function getPosts(): Promise<PostsResponse> {
  const response = await fetch("https://dummyjson.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  return response.json();
}
