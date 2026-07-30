import axios from "axios";

import { CommentsResponse } from "@/types/comment";

const API_URL = "https://dummyjson.com";

export async function getComments() {
  const response = await axios.get<CommentsResponse>(`${API_URL}/comments`);

  return response.data;
}
