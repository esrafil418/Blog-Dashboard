import { getPosts } from "@/features/posts/services/posts.service";
import { useQuery } from "@tanstack/react-query";

export default function usePosts(search: string) {
  return useQuery({
    queryKey: ["posts", search],
    queryFn: () => getPosts(search),
  });
}
