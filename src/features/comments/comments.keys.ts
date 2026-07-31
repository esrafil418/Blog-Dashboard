export const commentKeys = {
  all: ["comments"] as const,

  lists: () => [...commentKeys.all, "list"] as const,

  list: () => [...commentKeys.lists()] as const,

  postComments: (postId: string) =>
    [...commentKeys.all, "post", postId] as const,
};
