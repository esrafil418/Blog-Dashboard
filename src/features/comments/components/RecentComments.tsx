import { Comment } from "@/types/comment";
import Link from "next/link";
import CommentCard from "./CommentCard";

type Props = {
  comments: Comment[];
};

export default function RecentComments({ comments }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Comments</h2>
        <Link href="/comments" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
