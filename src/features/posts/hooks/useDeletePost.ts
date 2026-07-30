import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { postKeys } from "../posts.keys";
import { deletePost } from "../services/posts.service";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,

    onSuccess: (_, id) => {
      toast.success("Post deleted successfully");

      // Remove the deleted post from cache
      queryClient.removeQueries({
        queryKey: postKeys.detail(id),
      });

      // Refresh posts list
      queryClient.invalidateQueries({
        queryKey: postKeys.lists(),
      });
    },

    onError: () => {
      toast.error("Failed to delete post");
    },
  });
}
