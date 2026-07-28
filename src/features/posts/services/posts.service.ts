import { Post, PostsResponse } from "@/types/post";

//! 1 -------------------------
//? get All posts
export async function getPosts(): Promise<PostsResponse> {
  const response = await fetch("https://dummyjson.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  return response.json();
}

//! 2 -------------------------
//? get Single post
export async function getPost(id: string): Promise<Post> {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post.");
  }

  return response.json();
}

//! 3 -------------------------
//? Create a post

type CreatePostData = {
  title: string;
  body: string;
};

export async function createPost(post: CreatePostData) {
  const response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (response.ok) {
    throw new Error("Failed to create post.");
  }

  return response.json();
}
