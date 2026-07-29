import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../services/posts.service";

export default function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}
