import { Post } from "@/types/post";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
