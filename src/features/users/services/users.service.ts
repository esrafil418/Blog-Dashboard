import { User, UsersResponse } from "@/types/user";
import axios from "axios";

const API_URL = "https://dummyjson.com";

// ? get All Users -----------------
export async function getUsers(search: string, page: number) {
  const limit = 10;
  const skip = (page - 1) * limit;

  const endpoint = search
    ? `${API_URL}/users/search?q=${search}&limit=${limit}&skip=${skip}`
    : `${API_URL}/users?limit=${limit}&skip=${skip}`;

  const response = await axios.get<UsersResponse>(endpoint);

  return response.data;
}

// ? get Single User -----------------
export async function getUser(id: string) {
  const response = await axios.get<User>(`${API_URL}/users/${id}`);

  return response.data;
}
