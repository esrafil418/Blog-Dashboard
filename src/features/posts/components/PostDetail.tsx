import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/post";
import { Eye, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDeletePost } from "../hooks/useDeletePost";
import DeletePostDialog from "./DeletePostDialog";
import PostActions from "./PostActions";

type Props = {
  post: Post;
};

export default function PostDetail({ post }: Props) {
  const router = useRouter();
  const deleteMutation = useDeletePost();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{post.title}</CardTitle>

        <div className="flex flex-wrap gap-2 mt-4 md:mt-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-7">{post.body}</p>

        {/* Actions Buttons  */}
        <PostActions
          onEdit={() => router.push(`/posts/${post.id}/edit`)}
          deleteButton={
            <DeletePostDialog
              onConfirm={() => {
                deleteMutation.mutate(String(post.id));
                router.push("/posts");
              }}
            >
              <Button
                type="button"
                variant="destructive"
                disabled={deleteMutation.isPending}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {deleteMutation.isPending ? "Deleting..." : "Delete"}
              </Button>
            </DeletePostDialog>
          }
        />

        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            {post.views}
          </span>

          <span className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4" />
            {post.reactions.likes}
          </span>

          <span className="flex items-center gap-2">
            <ThumbsDown className="h-4 w-4" />
            {post.reactions.dislikes}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
