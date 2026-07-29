import { Post } from "@/types/post";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type RecentPostsProps = {
  posts: Post[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Posts</h2>

        <Link href="/posts" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.slice(0, 4).map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <Card className="transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="line-clamp-1">{post.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="line-clamp-4 text-sm text-muted-foreground">
                  {post.body}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
