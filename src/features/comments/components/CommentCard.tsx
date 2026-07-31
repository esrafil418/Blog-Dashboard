import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Comment } from "@/types/comment";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">{comment.user.fullName}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm">{comment.body}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Link
          href={`/users/${comment.user.id}`}
          className="text-sm text-primary hover:underline"
        >
          View profile →
        </Link>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Heart className="h-4 w-4" />
          {comment.likes}
        </div>
      </CardFooter>
    </Card>
  );
}
