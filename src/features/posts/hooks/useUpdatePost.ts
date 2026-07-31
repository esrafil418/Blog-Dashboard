import { CreatePostInput } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { postKeys } from "../posts.keys";
import { updatePost } from "../services/posts.service";

export function useUpdatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, post }: { id: string; post: CreatePostInput }) =>
      updatePost(id, post),

    onSuccess: (updatedPost) => {
      toast.success("Post updated successfully");

      // Update the single post cache immediately
      queryClient.setQueryData(
        postKeys.detail(String(updatedPost.id)),
        updatedPost,
      );

      // Refresh all post lists
      queryClient.invalidateQueries({
        queryKey: postKeys.lists(),
      });
    },

    onError: () => {
      toast.error("Failed to update post");
    },
  });
}
