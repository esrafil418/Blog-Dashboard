import { useQuery } from "@tanstack/react-query";
import { commentKeys } from "../comments.keys";
import { getComments } from "../services/comments.service";

export function useComments() {
  return useQuery({
    queryKey: commentKeys.list(),

    queryFn: getComments,
  });
}
