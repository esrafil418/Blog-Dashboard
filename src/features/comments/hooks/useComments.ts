import { useQuery } from "@tanstack/react-query";
import { getComments } from "../services/comments.service";

export function useComments() {
  return useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });
}
