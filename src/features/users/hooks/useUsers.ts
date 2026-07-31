import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../services/users.service";
import { userKeys } from "../users.keys";

export function useUsers(search: string, page: number) {
  return useQuery({
    queryKey: userKeys.list(search, page),
    queryFn: () => getUsers(search, page),
  });
}
