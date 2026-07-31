"use client";

import { Badge } from "@/components/ui/badge";
import { getTagColor } from "@/lib/tag-colors";
import { Post } from "@/types/post";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const post = row.original;
      return (
        <Link
          href={`/posts/${post.id}`}
          className="text-primary hover:underline font-medium"
        >
          {post.title}
        </Link>
      );
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.original.tags;
      return (
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} className={getTagColor(tag)}>
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline">+{tags.length - 3}</Badge>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => {
      const views = row.original.views;
      return <span className="font-medium">{views.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: "reactions",
    header: "Reactions",
    cell: ({ row }) => {
      const { likes, dislikes } = row.original.reactions;
      return (
        <div className="flex items-center gap-2">
          <span className="text-green-600 dark:text-green-400">👍 {likes}</span>
          <span className="text-red-600 dark:text-red-400">👎 {dislikes}</span>
        </div>
      );
    },
  },
];
