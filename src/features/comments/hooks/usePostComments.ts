import { useQuery } from "@tanstack/react-query";
import { commentKeys } from "../comments.keys";
import { getPostComments } from "../services/comments.service";

export function usePostComments(id: string) {
  return useQuery({
    queryKey: commentKeys.postComments(id),

    queryFn: () => getPostComments(id),
  });
}
