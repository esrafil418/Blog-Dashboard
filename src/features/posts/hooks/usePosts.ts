import { getPost, getPosts } from "@/features/posts/services/posts.service";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useEffect } from "react";

//? All Posts ------------------
export default function usePosts(search: string, page: number) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["posts", search, page],
    queryFn: () => getPosts(search, page),

    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["posts", search, page + 1],
      queryFn: () => getPosts(search, page + 1),
    });
  }, [page, search, queryClient]);

  return query;
}

//? Single Post ------------------
export function usePost(id: string) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });
}
