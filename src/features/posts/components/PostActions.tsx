"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function PostActions({ onEdit, onDelete }: Props) {
  return (
    <div className="flex gap-3 mt-3">
      <Button variant="outline" onClick={onEdit}>
        <Pencil className="mr-2 h-4 w-4" />
        Edit
      </Button>

      <Button variant="destructive" onClick={onDelete}>
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </Button>
    </div>
  );
}
