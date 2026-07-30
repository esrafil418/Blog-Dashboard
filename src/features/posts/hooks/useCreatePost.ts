import { CreatePostInput } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../services/posts.service";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: CreatePostInput) => createPost(post),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}
