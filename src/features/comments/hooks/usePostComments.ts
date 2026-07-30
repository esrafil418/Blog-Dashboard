import { useQuery } from "@tanstack/react-query";

import { getPostComments } from "../services/comments.service";

export function usePostComments(id: string) {
  return useQuery({
    queryKey: ["post-comments", id],
    queryFn: () => getPostComments(id),
  });
}
