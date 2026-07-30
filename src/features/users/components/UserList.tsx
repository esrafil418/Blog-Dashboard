import { User } from "@/types/user";
import UserCard from "./UserCard";

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}
