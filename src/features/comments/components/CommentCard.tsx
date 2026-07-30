import { Card } from "@/components/ui/card";
import { Comment } from "@/types/comment";
import { Heart } from "lucide-react";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card className="space-y-4 p-5">
      <p>{comment.body}</p>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{comment.user.fullName}</span>

        <div className="flex items-center gap-1">
          <Heart className="h-4 w-4" />
          {comment.likes}
        </div>
      </div>
    </Card>
  );
}
