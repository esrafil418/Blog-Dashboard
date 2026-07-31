import { CreatePostInput } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { postKeys } from "../posts.keys";
import { createPost } from "../services/posts.service";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: CreatePostInput) => createPost(post),

    onSuccess: () => {
      toast.success("Post created successfully");

      queryClient.invalidateQueries({
        queryKey: postKeys.lists(),
      });
    },
    onError: () => {
      toast.error("Failed to create post");
    },
  });
}
