import { Post, PostsResponse } from "@/types/post";

export async function getPosts(): Promise<PostsResponse> {
  const response = await fetch("https://dummyjson.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  return response.json();
}

export async function getPost(id: string): Promise<Post> {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post.");
  }

  return response.json();
}
