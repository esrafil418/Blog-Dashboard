import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTagColor } from "@/lib/tag-colors";
import { Post } from "@/types/post";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";
import Link from "next/link";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-2 text-muted-foreground">{post.body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} className={getTagColor(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            {post.reactions.likes}
          </span>

          <span className="flex items-center gap-1">
            <ThumbsDown className="h-4 w-4" />
            {post.reactions.dislikes}
          </span>

          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {post.views}
          </span>
        </div>

        <Link
          href={`/posts/${post.id}`}
          className="text-sm text-primary hover:underline"
        >
          Read more →
        </Link>
      </CardFooter>
    </Card>
  );
}