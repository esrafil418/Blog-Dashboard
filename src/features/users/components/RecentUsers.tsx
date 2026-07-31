import { User } from "@/types/user";
import Link from "next/link";
import UserCard from "./UserCard";

type Props = {
  users: User[];
};

export default function RecentUsers({ users }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Users</h2>
        <Link href="/users" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}
