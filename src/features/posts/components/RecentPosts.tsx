import { Post } from "@/types/post";
import PostCard from "./PostCard";
import Link from "next/link";

type RecentPostsProps = {
  posts: Post[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <section className="space-y-4">
    <div className="flex items-center justify-between"> <h2 className="text-2xl font-bold">Recent Posts</h2> <Link href="/posts" className="text-sm text-primary hover:underline"> View all </Link> </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
