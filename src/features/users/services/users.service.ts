import axios from "axios";

const API_URL = "https://dummyjson.com";

export async function getUsers() {
  const response = await axios.get(`${API_URL}/users`);

  return response.data;
}
