import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/post";
import Link from "next/link";

type PostCardProps = {
  post: Post;
};
export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <Card className="transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="line-clamp-2 text-muted-foreground">{post.body}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
