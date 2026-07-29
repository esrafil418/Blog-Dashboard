import axios from "axios";

const API_URL = "https://dummyjson.com";

export async function getComments() {
  const response = await axios.get(`${API_URL}/comments`);

  return response.data;
}
