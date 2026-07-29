import { Post } from "@/types/post";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function UserPosts({ posts }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Posts</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
