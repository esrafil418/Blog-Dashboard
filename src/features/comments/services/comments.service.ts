import axios from "axios";

import { CommentsResponse } from "@/types/comment";

const API_URL = "https://dummyjson.com";

// ! 1.
// ? get Comments ---------------------
export async function getComments() {
  const response = await axios.get<CommentsResponse>(`${API_URL}/comments`);

  return response.data;
}

// ! 2.
// ? get Post Comments ---------------------
export async function getPostComments(id: string): Promise<CommentsResponse> {
  const response = await axios.get<CommentsResponse>(
    `${API_URL}/posts/${id}/comments`,
  );

  return response.data;
}
