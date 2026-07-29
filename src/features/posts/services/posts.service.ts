import { Post, PostsResponse } from "@/types/post";
import axios from "axios";

const API_URL = "https://dummyjson.com/";

//! 1 -------------------------
//? get All posts
export async function getPosts(
  search: string,
  page: number,
): Promise<PostsResponse> {
  const limit = 10;
  const skip = (page - 1) * limit;

  const url = search
    ? `https://dummyjson.com/posts/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`
    : `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;

  const response = await fetch(url);

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

export async function createPost(post: CreatePostData): Promise<Post> {
  const response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error("Failed to create post.");
  }

  return response.json();
}

//! 4 -------------------------
// ? get User Post
export async function getUserPosts(id: string) {
  const response = await axios.get<PostsResponse>(
    `${API_URL}/users/${id}/posts`,
  );

  return response.data;
}
