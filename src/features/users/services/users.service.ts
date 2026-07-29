import { UsersResponse } from "@/types/user";
import axios from "axios";

const API_URL = "https://dummyjson.com";

export async function getUsers() {
  const response = await axios.get<UsersResponse>(`${API_URL}/users`);

  return response.data;
}
