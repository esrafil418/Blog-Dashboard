"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { CreatePostFormValues, createPostSchema } from "../schemas/post.schema";

import { useCreatePost } from "../hooks/useCreatePost";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePostForm() {
  const mutation = useCreatePost();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostFormValues>({
    resolver: zodResolver(createPostSchema),

    defaultValues: {
      title: "",
      body: "",
    },
  });

  function onSubmit(values: CreatePostFormValues) {
    mutation.mutate({
      title: values.title,

      body: values.body,

      userId: 1,
    });

    reset();
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

      <Button disabled={mutation.isPending} type="submit">
        {mutation.isPending ? "Creating..." : "Create Post"}
      </Button>
    </form>
  );
}
