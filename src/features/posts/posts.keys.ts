export const postKeys = {
  all: ["posts"] as const,

  lists: () => [...postKeys.all, "list"] as const,

  list: (search: string, page: number) =>
    [
      ...postKeys.lists(),
      {
        search,
        page,
      },
    ] as const,

  details: () => [...postKeys.all, "detail"] as const,

  detail: (id: string) => [...postKeys.details(), id] as const,
};
