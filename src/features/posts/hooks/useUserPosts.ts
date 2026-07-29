import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../services/posts.service";

export function useUserPosts(id: string) {
  return useQuery({
    queryKey: ["user-posts", id],
    queryFn: () => getUserPosts(id),
  });
}
