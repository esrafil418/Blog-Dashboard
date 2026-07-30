import { Comment } from "@/types/comment";
import CommentCard from "./CommentCard";

type Props = {
  comments: Comment[];
};

export default function PostComments({ comments }: Props) {
  return (
    <section className="space-y-6 mt-10">
      <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>

      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
