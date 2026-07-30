import { useQuery } from "@tanstack/react-query";
import { postKeys } from "../posts.keys";
import { getPost } from "../services/posts.service";

//? Single Post ------------------
export function usePost(id: string) {
  return useQuery({
    queryKey: postKeys.detail(id),
    queryFn: () => getPost(id),
  });
}
