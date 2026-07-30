import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createPost } from "../services/posts.service";

import { CreatePostInput } from "@/types/post";

import { toast } from "sonner";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: CreatePostInput) => createPost(post),

    onSuccess: () => {
      toast.success("Post created successfully");

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },

    onError: () => {
      toast.error("Failed to create post");
    },
  });
}
