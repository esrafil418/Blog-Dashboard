import { getPosts } from "@/features/posts/services/posts.service";
import { useQuery } from "@tanstack/react-query";

export default function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
}
