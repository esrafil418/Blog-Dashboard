import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/users.service";
import { userKeys } from "../users.keys";

export function useUser(id: string) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => getUser(id),
  });
}
