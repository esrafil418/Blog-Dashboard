import { User, UsersResponse } from "@/types/user";
import axios from "axios";

const API_URL = "https://dummyjson.com";

// ? get All Users -----------------
export async function getUsers() {
  const response = await axios.get<UsersResponse>(`${API_URL}/users`);

  return response.data;
}

// ? get Single User -----------------
export async function getUser(id: string) {
  const response = await axios.get<User>(`${API_URL}/users/${id}`);

  return response.data;
}
