"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Post } from "@/types/post";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useCreatePost } from "../hooks/useCreatePost";
import { useUpdatePost } from "../hooks/useUpdatePost";
import { CreatePostFormValues, createPostSchema } from "../schemas/post.schema";

type Props =
  | { mode: "create"; post?: undefined }
  | { mode: "edit"; post: Post };

export default function PostForm({ mode, post }: Props) {
  const createMutation = useCreatePost();
  const updateMutation = useUpdatePost();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostFormValues>({
    resolver: zodResolver(createPostSchema),

    defaultValues: {
      title: post?.title ?? "",
      body: post?.body ?? "",
    },
  });

  function onSubmit(values: CreatePostFormValues) {
    if (createMutation.isPending || updateMutation.isPending) return;
    if (mode === "create") {
      createMutation.mutate(
        {
          title: values.title,
          body: values.body,
          userId: 1,
        },
        {
          onSuccess: () => {
            reset();
          },
        },
      );
    }
    if (mode === "edit" && post) {
      updateMutation.mutate(
        {
          id: String(post.id),
          post: {
            title: values.title,
            body: values.body,
            userId: post.userId,
          },
        },
        {
          onSuccess: () => {
            router.push(`/posts/${post.id}`);
          },
        },
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-xl space-y-5 rounded-xl border p-6 bg-background"
    >
      <div className="space-y-2">
        <Input placeholder="Post title" {...register("title")} />

        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Textarea placeholder="Post content" rows={6} {...register("body")} />

        {errors.body && (
          <p className="text-sm text-red-500">{errors.body.message}</p>
        )}
      </div>

      <Button
        disabled={createMutation.isPending || updateMutation.isPending}
        type="submit"
      >
        {createMutation.isPending || updateMutation.isPending
          ? mode === "create"
            ? "Creating..."
            : "Updating..."
          : mode === "create"
            ? "Create Post"
            : "Update Post"}
      </Button>
    </form>
  );
}
