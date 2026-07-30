import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../services/users.service";

export function useUsers(search: string, page: number) {
  return useQuery({
    queryKey: ["users", search, page],

    queryFn: () => getUsers(search, page),
  });
}
