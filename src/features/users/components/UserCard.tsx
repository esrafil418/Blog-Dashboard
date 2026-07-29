import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@/types/user";
import Link from "next/link";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle>
          {user.firstName} {user.lastName}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">@{user.username}</p>

        <p className="text-sm">{user.email}</p>

        <p className="text-sm text-muted-foreground">{user.company.name}</p>
      </CardContent>

      <CardFooter className="justify-end">
        <Link
          href={`/users/${user.id}`}
          className="text-sm text-primary hover:underline"
        >
          View profile →
        </Link>
      </CardFooter>
    </Card>
  );
}
