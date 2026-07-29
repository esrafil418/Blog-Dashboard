import { useQuery } from "@tanstack/react-query";
import { getPost } from "../services/posts.service";

//? Single Post ------------------
export function usePost(id: string) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });
}
