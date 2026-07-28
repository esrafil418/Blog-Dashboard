import { getPosts } from "@/features/posts/services/posts.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export default function usePosts(search: string, page: number) {
  return useQuery({
    queryKey: ["posts", search, page],
    queryFn: () => getPosts(search, page),

    placeholderData: keepPreviousData,
  });
}
