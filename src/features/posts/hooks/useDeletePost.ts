import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { postKeys } from "../posts.keys";
import { deletePost } from "../services/posts.service";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePost(id),

    onSuccess: () => {
      toast.success("Post deleted successfully");

      queryClient.invalidateQueries({
        queryKey: postKeys.all,
      });
    },

    onError: () => {
      toast.error("Failed to delete post");
    },
  });
}
