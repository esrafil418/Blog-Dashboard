import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { PostsResponse } from "@/types/post";
import { postKeys } from "../posts.keys";
import { deletePost } from "../services/posts.service";

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,

    async onMutate(id) {
      await queryClient.cancelQueries({
        queryKey: postKeys.lists(),
      });

      const previousPosts = queryClient.getQueriesData<PostsResponse>({
        queryKey: postKeys.lists(),
      });

      queryClient.setQueriesData<PostsResponse>(
        {
          queryKey: postKeys.lists(),
        },
        (old) => {
          if (!old) return old;

          return {
            ...old,
            posts: old.posts.filter((post) => String(post.id) !== id),
          };
        },
      );

      return {
        previousPosts,
      };
    },

    onError(error, id, context) {
      toast.error("Failed to delete post");

      if (context?.previousPosts) {
        context.previousPosts.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },

    onSuccess() {
      toast.success("Post deleted successfully");
    },

    onSettled() {
      queryClient.invalidateQueries({
        queryKey: postKeys.lists(),
      });
    },
  });
}
